import {AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {Subject} from "rxjs";
import {delay, filter} from "rxjs/operators";
import {PlatformService} from "../services/platform.service";

@Directive({
  selector: '[appIsVisible]'
})

export class IsVisibleDirective implements OnDestroy, OnInit, AfterViewInit {
  @Input() debounceTime = 0;
  @Input() threshold = 1;

  @Output() visible = new EventEmitter<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }|undefined>();

  constructor(
    private element: ElementRef,
    private platformService: PlatformService,
  ) {}



  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    this.subject$.next(undefined);
    this.subject$.complete();
  }

  private isVisible(element: HTMLElement) {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio === 1);
        observer.disconnect();
      });

      observer.observe(element);
    });
  }

  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$
      .pipe(delay(this.debounceTime), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);

        if (isStillVisible) {
          this.visible.emit(target);
          observer.unobserve(target);
        }
      });
  }

  private createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) =>
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          this.subject$.next({entry, observer});
        }
      }), options);
  }

  ngAfterViewInit() {
    if (this.platformService.isBrowser()) {
      this.startObservingElements();
    }
  }

  ngOnInit() {
    if (this.platformService.isBrowser()) {
      this.createObserver();
    }
  }
}
