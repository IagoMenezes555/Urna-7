import { Component } from '@angular/core';
import { UrnaService } from '../../services/urna.service';
import { DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screen',
  imports: [CommonModule],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss'
})
export class ScreenComponent implements DoCheck {
  constructor(private urnaService: UrnaService) { }
  numeroAntigo = "";
  votouPraPrefeito = false;
  votouPraVereador = false;

  get numero() {
    return this.urnaService.oNumero;
  }

  get partido() {
    return this.urnaService.oPartido;
  }

  get imagem() {
    return this.urnaService.aImagem;
  }

  get nome() {
    return this.urnaService.oNome;
  }

  tipoDeCandidato: string = "";

  checarCandidato() {
    if (this.urnaService.oNumero.length == 2 && this.urnaService.votouPraPrefeito == false) {
      this.tipoDeCandidato = "PREFEITO";
    } else if (this.urnaService.oNumero.length == 4 && this.urnaService.votouPraVereador == false) {
      this.tipoDeCandidato = "VEREADOR";
    } else {
      this.tipoDeCandidato = "";
    }
  }

  ngDoCheck() {
    this.votouPraPrefeito = this.urnaService.votouPraPrefeito;
    this.votouPraVereador = this.urnaService.votouPraVereador;
    
    let numeroAtual = this.urnaService.oNumero
    if (numeroAtual != this.numeroAntigo) {
      this.numeroAntigo = numeroAtual;
      this.checarCandidato();
    }
  }
}
