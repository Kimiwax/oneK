import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarVarsService {

  constructor() { }

  private nombreSubject = new BehaviorSubject<string>(localStorage.getItem('nombre') || '');
  nombre$ = this.nombreSubject.asObservable();

  setNombre(nombre: string) {
    localStorage.setItem('nombre', nombre);
    this.nombreSubject.next(nombre);
  }
}
