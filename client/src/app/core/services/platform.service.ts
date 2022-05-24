import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
  }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  localStorageSet(key: string, value: string) {
    if (this.isBrowser()) {
      localStorage.setItem(key, value);
      return true;
    }
    return false;
  }

  localStorageGet(key: string) {
    if (this.isBrowser()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  localStorageRemove(key: string) {
    if (this.isBrowser()) {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  }
}
