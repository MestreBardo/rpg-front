import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { 
  }

  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)|| '{}');
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
