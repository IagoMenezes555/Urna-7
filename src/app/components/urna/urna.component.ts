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
  styleUrl: './urna.component.scss',
})
export class UrnaComponent implements DoCheck {
  prefeito: Prefeito;
  vereador: Vereador;
  numeroAnterior: string = '';
  verificadorAntigo: boolean = false;

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
  constructor(public urnaService: UrnaService) {}
  nome: string = '';
  imagem: string = '';
  partido: string = '';

  get numero() {
    return this.urnaService.oNumero;
  }
}

export class Prefeito extends Candidato {
  constructor(urnaService: UrnaService) {
    super(urnaService);
  }

  list = [
    {
      nome: 'Goku',
      imagem: './goku.png',
      partido: 'Planeta Vegeta',
      numero: '12',
    },
    {
      nome: 'Vader',
      imagem: './vader.png',
      partido: 'Estrela',
      numero: '57',
    },
    {
      nome: 'Homem Aranha',
      imagem: './homem-aranha.png',
      partido: 'Spiders',
      numero: '14',
    },
    {
      nome: 'Batman',
      imagem: './batman.png',
      partido: 'Gotham',
      numero: '83',
    },
    {
      nome: 'Naruto',
      imagem: './naruto.png',
      partido: 'Ninja',
      numero: '91',
    },
  ];

  public obterTodos() {
    const novosPrefeitos = JSON.parse(
      localStorage.getItem('prefeitos') || '[]'
    );
    const todos = [...this.list, ...novosPrefeitos];

    let encontrou = false;

    for (let i = 0; i < todos.length; i++) {
      if (this.numero == todos[i].numero && this.urnaService.votouPraPrefeito == false) {
        this.partido = todos[i].partido;
        this.imagem = todos[i].imagem;
        this.nome = todos[i].nome;
        this.urnaService.oPartido = this.partido;
        this.urnaService.aImagem = this.imagem;
        this.urnaService.oNome = this.nome;
        encontrou = true;
      }
    }

    if (encontrou == false) {
      this.imagem = './not-found.png';
      this.urnaService.aImagem = this.imagem;
      this.urnaService.oPartido = '';
      this.urnaService.oNome = '';
    }

    if(encontrou == false && this.numero.length == 2 && this.urnaService.votouPraPrefeito == false){
      this.imagem = './not-found.png';
      this.urnaService.aImagem = this.imagem;
      this.urnaService.oPartido = '';
      this.urnaService.oNome = 'NULO';
    }

    if(encontrou == false && this.numero.length == 4 && this.urnaService.votouPraVereador == false){
      this.imagem = './not-found.png';
      this.urnaService.aImagem = this.imagem;
      this.urnaService.oPartido = '';
      this.urnaService.oNome = 'NULO';
    }

    if(encontrou == false && this.urnaService.oNumero == ''){
      this.imagem = './not-found.png';
      this.urnaService.aImagem = this.imagem;
      this.urnaService.oPartido = '';
      this.urnaService.oNome = '';
    }
  }
}

export class Vereador extends Candidato {
  list = [
    {
      nome: 'Vegeta',
      imagem: './vegeta.png',
      partido: 'Planeta Vegeta',
      numero: '1212',
    },
    {
      nome: 'Yoda',
      imagem: './yoda.png',
      partido: 'Estrela',
      numero: '5757',
    },
    {
      nome: 'Venom',
      imagem: './venom.png',
      partido: 'Spiders',
      numero: '1414',
    },
    {
      nome: 'Coringa',
      imagem: './coringa.png',
      partido: 'Gotham',
      numero: '8383',
    },
    {
      nome: 'Gaara',
      imagem: './gaara.png',
      partido: 'Ninja',
      numero: '9191',
    },
  ];

  public obterTodos() {
    const novosVereadores = JSON.parse(
      localStorage.getItem('vereadores') || '[]'
    );
    const todos = [...this.list, ...novosVereadores];

    for (let i = 0; i < todos.length; i++) {
      if (this.numero == todos[i].numero) {
        this.partido = todos[i].partido;
        this.imagem = todos[i].imagem;
        this.nome = todos[i].nome;
        this.urnaService.oPartido = this.partido;
        this.urnaService.aImagem = this.imagem;
        this.urnaService.oNome = this.nome;
      }
    }
  }
}
