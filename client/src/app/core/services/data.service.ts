import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public choice = new BehaviorSubject<string>('summer');
  public isChoiceOpen = new BehaviorSubject<boolean>(false);
  public isChoiceOpenYet = new BehaviorSubject<boolean>(false);
  public codeMedia = new BehaviorSubject<string>('W22PD0ZZL');
  public giftsAvailable = new BehaviorSubject<any[]>([]);
  public giftSelected = new BehaviorSubject<any>(undefined);
  public selectedAmount = new BehaviorSubject<number>(0);

  public gifts: any[] = [
    {
      id:1,
      choice: 'summer',
      for: 'prospect',
      image: 'assets/images/medaillon2.jpg',
      amount: '65',
      amountAfter: '22,10',
      text: 'Vous offrez des soins vétérinaires à un animal en détresse',
      url: 'https://soutenir.la-spa.fr/b?cid=274&lang=fr_FR&free_amount=0&amount=6500&frequency=once'
    },
    {
      id:2,
      choice: 'summer',
      for: 'prospect',
      image: 'assets/images/medaillon3.jpg',
      amount: '90',
      amountAfter: '31,00',
      text: 'Vous permettez de nourrir et soigner un chat pendant 3 mois.',
      url: 'https://soutenir.la-spa.fr/b?cid=274&lang=fr_FR&free_amount=0&amount=9000&frequency=once'
    },
    {
      id:3,
      choice: 'summer',
      for: 'prospect',
      image: 'assets/images/medaillon1.jpg',
      amount: '120',
      amountAfter: '40,80',
      text: 'Vous permettez de nourrir et soigner un chien pendant 3 mois et demi.',
      url: 'https://soutenir.la-spa.fr/b?cid=274&lang=fr_FR&free_amount=0&amount=12000&frequency=once'
    },
    {
      id:4,
      choice: 'summer',
      for: 'prospect',
      image: 'assets/images/medaillon4.jpg',
      amount: '000',
      tx: 0.34,
      text: 'Vous  contribuez au bien-être d’un animal en refuge.',
      url: 'https://soutenir.la-spa.fr/b?cid=274&lang=fr_FR&free_amount=1&amount=XX00&frequency=once'
    },
    {
      id:5,
      choice: 'summer',
      for: 'fidelisation',
      image: 'assets/images/medaillon3.jpg',
      amount: '90',
      amountAfter: '31,00',
      text: 'Vous permettez de nourrir et soigner un chat pendant 3 mois.',
      url: 'https://soutenir.la-spa.fr/b?cid=275&lang=fr_FR&free_amount=0&amount=8500&frequency=once'
    },
    {
      id:6,
      choice: 'summer',
      for: 'fidelisation',
      image: 'assets/images/medaillon1.jpg',
      amount: '120',
      amountAfter: '40.80',
      text: 'Vous permettez de nourrir et soigner un chien pendant 3 mois et demi.',
      url: 'https://soutenir.la-spa.fr/b?cid=275&lang=fr_FR&free_amount=0&amount=12000&frequency=once'
    },
    {
      id:7,
      choice: 'summer',
      for: 'fidelisation',
      image: 'assets/images/medaillon4.jpg',
      amount: '170',
      amountAfter: '57.80',
      text: 'Vous offrez 1 an de nourriture à un chien.',
      url: 'https://soutenir.la-spa.fr/b?cid=275&lang=fr_FR&free_amount=0&amount=17000&frequency=once'
    },
    {
      id:8,
      choice: 'summer',
      for: 'fidelisation',
      image: 'assets/images/medaillon4.jpg',
      amount: '000',
      tx: 0.34,
      text: 'Vous  contribuez au bien-être d’un animal en refuge.',
      url: 'https://soutenir.la-spa.fr/b?cid=275&lang=fr_FR&free_amount=1&amount=XX00&frequency=once'
    },
    {
      id:9,
      choice: 'year',
      image: 'assets/images/medaillon5.jpg',
      amount:'10',
      amountAfter: '3,00',
      text: 'Vous offrez de la nourriture à un chat ou un chien de petite taille pendant 1 an.',
      url: 'https://soutenir.la-spa.fr/b?cid=276&lang=fr_FR&free_amount=0&amount=1000&frequency=regular'
    },
    {
      id:10,
      choice: 'year',
      image: 'assets/images/medaillon1.jpg',
      amount:'15',
      amountAfter: '5,10',
      text: 'Vous permettez de nourrir et prendre soin d’un chien adulte pendant 1 an.',
      url: 'https://soutenir.la-spa.fr/b?cid=276&lang=fr_FR&free_amount=0&amount=1500&frequency=regular'
    },
    {
      id:11,
      choice: 'year',
      image: 'assets/images/medaillon2.jpg',
      amount:'20',
      amountAfter: '6,80',
      text: 'Vous offrez les soins vétérinaires d’un chat ou d’un chien pendant 1 an.',
      url: 'https://soutenir.la-spa.fr/b?cid=276&lang=fr_FR&free_amount=0&amount=2000&frequency=regular'
    },
    {
      id:12,
      choice: 'year',
      image: 'assets/images/medaillon4.jpg',
      amount: '000',
      tx: 0.34,
      text: 'Vous  contribuez au bien-être d’un animal en refuge.',
      url: 'https://soutenir.la-spa.fr/b?cid=276&lang=fr_FR&free_amount=1&amount=XX00&frequency=regular'
    },
  ]

  constructor() {
  }
}
