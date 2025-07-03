import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrnaService {
  oNumero: string = "";
  oPartido: string = "";
  aImagem: string = "./not-found.png";
  oNome: string = "";

  constructor() { }
}
