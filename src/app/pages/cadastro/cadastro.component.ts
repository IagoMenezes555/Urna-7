import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UrnaService } from '../../services/urna.service';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  constructor(private urnaService: UrnaService) {}
  novoCandidato = { nome: '', partido: '', numero: '', imagem: '' };
  tudoCerto: boolean = false;

  onFileSelected(event:any){
    const file: File = event.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.novoCandidato.imagem = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  }

  adicionar() {
    if (
      (this.novoCandidato.nome == '' &&
      this.novoCandidato.partido == '' &&
      this.novoCandidato.numero == '') ||
      this.novoCandidato.numero.length == 1 ||
      this.novoCandidato.numero.length == 3
    ) {
      alert('Falta preencher algo');
      return;
    }
    if (
      this.novoCandidato.nome != '' &&
      this.novoCandidato.partido != '' &&
      this.novoCandidato.numero != '' &&
      this.novoCandidato.numero.length == 2
    ) {
      let candidatos = JSON.parse(localStorage.getItem('prefeitos') || '[]');

      candidatos.push({
        nome: this.novoCandidato.nome,
        partido: this.novoCandidato.partido,
        numero: this.novoCandidato.numero,
        imagem: this.novoCandidato.imagem || './not-found.png',
      });

      localStorage.setItem('prefeitos', JSON.stringify(candidatos));

      alert('Prefeito cadastrado!');
      this.novoCandidato = { nome: '', partido: '', numero: '', imagem: ''};
    }

    if (
      this.novoCandidato.nome != '' &&
      this.novoCandidato.partido != '' &&
      this.novoCandidato.numero != '' &&
      this.novoCandidato.numero.length == 4
    ) {
      let candidatos = JSON.parse(localStorage.getItem('vereadores') || '[]');

      candidatos.push({
        nome: this.novoCandidato.nome,
        partido: this.novoCandidato.partido,
        numero: this.novoCandidato.numero,
        imagem: this.novoCandidato.imagem || './not-found.png',
      });

      localStorage.setItem('vereadores', JSON.stringify(candidatos));

      alert('Vereador cadastrado!');
      this.novoCandidato = { nome: '', partido: '', numero: '' , imagem: ''};
    }
  }
  
}
