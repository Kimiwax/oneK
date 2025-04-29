import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid'; 

@Injectable({
  providedIn: 'root'
})
export class GuardarVarsService {

  constructor() {
    if (!localStorage.getItem('userId')) {
      const newUserId = uuidv4(); // 👈 Generamos un UUID
      localStorage.setItem('userId', newUserId);
    }
  }

  private nombreSubject = new BehaviorSubject<string>(localStorage.getItem('nombre') || '');
  nombre$ = this.nombreSubject.asObservable();

  private userIdSubject = new BehaviorSubject<string>(localStorage.getItem('userId') || '');
  userId$ = this.userIdSubject.asObservable();

  setNombre(nombre: string) {
    localStorage.setItem('nombre', nombre);
    this.nombreSubject.next(nombre);
  }

  getUserId(): string {
    return localStorage.getItem('userId') || '';
  }
}
