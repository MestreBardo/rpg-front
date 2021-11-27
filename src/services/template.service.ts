import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  hideConstructors = new EventEmitter<boolean>();
  showConstructor = new EventEmitter<any>();
  createOn = new EventEmitter<any>();
  constructor() { }
}
