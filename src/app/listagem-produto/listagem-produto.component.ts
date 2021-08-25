import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { PRODUTOS } from '../produtos';


@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit {

  produtos:Produto[] = PRODUTOS;

  categorias?:string[] = [
    'Quarto',
    'Sala',
    'Cozinha',
    'Banheiro'
  ]

  categoria:string = '';
  estado:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  filtrar(event: any):void {
    this.categoria = event.target.value;
  }

  filtrarEstado(event: any):void {
    this.estado = event.target.value;
  }


}
