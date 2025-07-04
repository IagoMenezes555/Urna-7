import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { UrnaComponent } from './components/urna/urna.component';

export const routes: Routes = [
    {path: "", component: UrnaComponent},
    {path: "cadastro", component: CadastroComponent}
];
