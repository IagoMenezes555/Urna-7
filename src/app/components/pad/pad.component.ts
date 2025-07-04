import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrnaService } from '../../services/urna.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pad',
  imports: [CommonModule],
  templateUrl: './pad.component.html',
  styleUrl: './pad.component.scss'
})
export class PadComponent {
  constructor(private urnaService: UrnaService, private router: Router) { }
  numeroAtual = "";

  numeros = [
    9, 8, 7, 6, 5, 4, 3, 2, 1, 0
  ]

  branco() {

    if (this.votouPraPrefeito == false) {
      this.urnaService.oNome = "BRANCO";
      this.urnaService.oPartido = "BRANCO";
      this.urnaService.aImagem = './not-found.png';
    } else if (this.votouPraPrefeito == true && this.votouPraVereador == false) {
      this.urnaService.oNome = "BRANCO";
      this.urnaService.oPartido = "BRANCO";
      this.urnaService.aImagem = './not-found.png';
    }
  }

  votouPraPrefeito: boolean = false;
  votouPraVereador: boolean = false;

  resetarCampos() {
    this.numeroAtual = '';
    this.urnaService.oNumero = '';
    this.urnaService.oNome = '';
    this.urnaService.oPartido = '';
    this.urnaService.aImagem = './not-found.png';
  }


  confirma() {

    if (this.urnaService.oNome == 'BRANCO' && this.votouPraPrefeito == false) {
      this.votouPraPrefeito = true;
      this.urnaService.votouPraPrefeito = this.votouPraPrefeito;
      this.resetarCampos();
      return;
    }

    if (this.urnaService.oNome == 'BRANCO' && this.votouPraPrefeito == true && this.votouPraVereador == false) {
      this.votouPraVereador = true;
      this.urnaService.votouPraVereador = this.votouPraVereador;
      this.resetarCampos();
      return;
    }

    if (this.urnaService.oNumero.length == 2 && this.votouPraPrefeito == false) {
      this.votouPraPrefeito = true;
      this.urnaService.votouPraPrefeito = true;
      this.resetarCampos();
      return;
    }

    if (this.urnaService.oNumero.length == 2 && this.urnaService.oNome == 'NULO' && this.votouPraPrefeito == false) {
      this.votouPraPrefeito = true;
      this.urnaService.votouPraPrefeito = true;
      this.resetarCampos();
      return;
    }

    if (this.urnaService.oNumero.length == 4 && this.votouPraPrefeito == true && this.votouPraVereador == false) {
      this.votouPraVereador = true;
      this.urnaService.votouPraVereador = true;
      this.resetarCampos();
      return;
    }

    if (this.urnaService.oNumero.length == 4 && this.urnaService.oNome == 'NULO' && this.votouPraPrefeito == true && this.votouPraVereador == false) {
      this.votouPraVereador = true;
      this.urnaService.votouPraVereador = true;
      this.resetarCampos();
      return;
    }

  }

  corrige() {
    this.numeroAtual = '';
    this.urnaService.oNumero = this.numeroAtual;
  }

  digitarNumero(numero: number) {

    if (this.votouPraPrefeito == false && this.numeroAtual.length < 2) {
      this.numeroAtual += numero;
      this.urnaService.oNumero = this.numeroAtual;
    } if (this.votouPraPrefeito == true && this.votouPraVereador == false && this.numeroAtual.length < 4) {
      this.numeroAtual += numero;
      this.urnaService.oNumero = this.numeroAtual;
    }
  }

}