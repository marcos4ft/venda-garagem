import { Routes } from "@angular/router";
import { DetalheProdutoComponent } from "./detalhe-produto/detalhe-produto.component";
import { ListagemProdutoComponent } from "./listagem-produto/listagem-produto.component";

export const ROUTES: Routes = [
  {path:'', component: ListagemProdutoComponent},
  {path:'detalhes/:id', component: DetalheProdutoComponent}
]
