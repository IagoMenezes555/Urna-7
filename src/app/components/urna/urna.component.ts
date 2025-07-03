import { Component } from '@angular/core';
import { ScreenComponent } from '../screen/screen.component';
import { PadComponent } from '../pad/pad.component';
import { UrnaService } from '../../services/urna.service';
import { DoCheck } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-urna',
  imports: [ScreenComponent, PadComponent, RouterLink],
  templateUrl: './urna.component.html',
  styleUrl: './urna.component.scss'
})
export class UrnaComponent implements DoCheck {
  prefeito: Prefeito;
  vereador: Vereador;
  numeroAnterior: string = "";

  constructor(private urnaService: UrnaService) {
    this.prefeito = new Prefeito(this.urnaService);
    this.vereador = new Vereador(this.urnaService);
  }

  ngDoCheck() {
    let numeroAtual = this.urnaService.oNumero;
    if (this.numeroAnterior != numeroAtual) {
      this.numeroAnterior = numeroAtual;
      this.prefeito.obterTodos();
      this.vereador.obterTodos();
    }
  }
}

export class Candidato {
  constructor(public urnaService: UrnaService) { }
  nome: string = "";
  imagem: string = "";
  partido: string = "";

  get numero() {
    return this.urnaService.oNumero;
  }

}

export class Prefeito extends Candidato {
  constructor(urnaService: UrnaService) {
    super(urnaService);
  }

  public obterTodos() {

    const list = [
      { nome: "Goku", imagem: "./goku.png", partido: "Planeta Vegeta", numero: "12" },
      { nome: "Vader", imagem: "./vader.png", partido: "Estrela", numero: "57" },
      { nome: "Homem Aranha", imagem: "./homem-aranha.png", partido: "Spiders", numero: "14" },
      { nome: "Batman", imagem: "./batman.png", partido: "Gotham", numero: "83" },
      { nome: "Naruto", imagem: "./naruto.png", partido: "Ninja", numero: "91" }
    ]

    let encontrou: boolean = false;

    for (let i = 0; i < list.length; i++) {
      if (this.numero == list[i].numero) {
        this.partido = list[i].partido;
        this.imagem = list[i].imagem;
        this.nome = list[i].nome;
        this.urnaService.oPartido = this.partido;
        this.urnaService.aImagem = this.imagem;
        this.urnaService.oNome = this.nome;
        encontrou = true;
      }
    }

    if (encontrou == false) {
      this.imagem = "./not-found.png";
      this.urnaService.aImagem = this.imagem;
      this.urnaService.oPartido = "";
      this.urnaService.oNome = "NULO";
    }

  }

}

export class Vereador extends Candidato {

  public obterTodos() {

    const list = [
      { nome: "Vegeta", imagem: "./vegeta.png", partido: "Planeta Vegeta", numero: "1212" },
      { nome: "Yoda", imagem: "./yoda.png", partido: "Estrela", numero: "5757" },
      { nome: "Venom", imagem: "./venom.png", partido: "Spiders", numero: "1414" },
      { nome: "Coringa", imagem: "./coringa.png", partido: "Gotham", numero: "8383" },
      { nome: "Gaara", imagem: "./gaara.png", partido: "Ninja", numero: "9191" }
    ]

    for (let i = 0; i < list.length; i++) {
      if (this.numero == list[i].numero) {
        this.partido = list[i].partido;
        this.imagem = list[i].imagem;
        this.nome = list[i].nome;
        this.urnaService.oPartido = this.partido;
        this.urnaService.aImagem = this.imagem;
        this.urnaService.oNome = this.nome;
      }
    }

  }
}
