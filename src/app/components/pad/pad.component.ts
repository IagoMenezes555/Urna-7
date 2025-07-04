import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrnaService } from '../../services/urna.service';

@Component({
  selector: 'app-pad',
  imports: [CommonModule],
  templateUrl: './pad.component.html',
  styleUrl: './pad.component.scss'
})
export class PadComponent {
  constructor(private urnaService: UrnaService) { }
  numeroAtual = "";

  numeros = [
    9, 8, 7, 6, 5, 4, 3, 2, 1, 0
  ]

  branco() {
    this.urnaService.oNome = "BRANCO";
    this.urnaService.oPartido = "BRANCO";
  }

  votouPraPrefeito: boolean = false;
  votouPraVereador: boolean = false;

  confirma() {
    if (this.urnaService.oNumero.length == 2 && this.urnaService.oNome != "BRANCO" && this.votouPraPrefeito == false) {
      this.votouPraPrefeito = true;
      this.urnaService.votouPraPrefeito = this.votouPraPrefeito;
      this.urnaService.aImagem = './not-found.png';
      this.urnaService.oNome = '';
      this.urnaService.oPartido = '';
      this.numeroAtual = '';
      alert("Você votou pra prefeito");
      this.urnaService.oNumero = this.numeroAtual;
    } else if (this.urnaService.oNumero.length == 4 && this.urnaService.oNome != "BRANCO" && this.votouPraVereador == false) {
      this.votouPraVereador = true;
      this.urnaService.votouPraVereador = this.votouPraVereador;
      this.urnaService.aImagem = './not-found.png';
      this.urnaService.oNome = '';
      this.urnaService.oPartido = '';
      this.numeroAtual = '';
      this.urnaService.oNumero = this.numeroAtual;
      alert("Você votou pra vereador");
    } else if (this.urnaService.oNome == "BRANCO" && this.votouPraPrefeito == false) {
      this.votouPraPrefeito = true;
      this.urnaService.votouPraPrefeito = this.votouPraPrefeito;
      this.urnaService.aImagem = './not-found.png';
      this.urnaService.oNome = '';
      this.urnaService.oPartido = '';
      this.numeroAtual = '';
      this.urnaService.oNumero = this.numeroAtual;
      alert("Você votou pra prefeito");
    } else if(this.urnaService.oNome == "BRANCO" && this.votouPraPrefeito == true && this.votouPraVereador == false){
      this.votouPraVereador = true;
      this.urnaService.votouPraVereador = this.votouPraVereador;
      this.urnaService.aImagem = './not-found.png';
      this.urnaService.oNome = '';
      this.urnaService.oPartido = '';
      this.numeroAtual = '';
      this.urnaService.oNumero = this.numeroAtual;
      alert("Você votou pra vereador");
    } else if(this.urnaService.oNumero.length == 2 && this.urnaService.oNome == 'NULO' && this.votouPraPrefeito == false){
      this.votouPraPrefeito = true;
      this.urnaService.votouPraPrefeito = this.votouPraPrefeito;
      this.urnaService.aImagem = './not-found.png';
      this.urnaService.oNome = '';
      this.urnaService.oPartido = '';
      this.numeroAtual = '';
      this.urnaService.oNumero = this.numeroAtual;
      alert("Você votou pra prefeito");
    }else if(this.urnaService.oNumero.length == 4 && this.urnaService.oNome == "" && this.votouPraPrefeito == true && this.votouPraVereador == false){
      this.votouPraVereador = true;
      this.urnaService.votouPraVereador = this.votouPraVereador;
      this.urnaService.aImagem = './not-found.png';
      this.urnaService.oNome = '';
      this.urnaService.oPartido = '';
      this.numeroAtual = '';
      this.urnaService.oNumero = this.numeroAtual;
      alert("Você votou pra vereador");
    }
  }

  corrige() {
    this.numeroAtual = '';
    this.urnaService.oNumero = this.numeroAtual;
  }

  digitarNumero(numero: number) {

    if(this.votouPraPrefeito == false && this.numeroAtual.length < 2){
      this.numeroAtual += numero;
      this.urnaService.oNumero = this.numeroAtual;
    }if(this.votouPraPrefeito == true && this.votouPraVereador == false && this.numeroAtual.length < 4){
      this.numeroAtual += numero;
      this.urnaService.oNumero = this.numeroAtual;
    }
  }

}