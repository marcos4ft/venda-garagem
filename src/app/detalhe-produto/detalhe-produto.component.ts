import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/models/produto.model';
import { PRODUTOS } from '../produtos';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {


  idProduto?:string;
  produto?:Produto;
  fotoAtual?:string;

  constructor(private route:ActivatedRoute,private config: NgbCarouselConfig,private _location: Location) {

    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngOnInit(): void {
     this.idProduto = this.route.snapshot.params['id'];
     this.produto = PRODUTOS.find(P => P.id === this.idProduto);
     this.fotoAtual = this.produto?.foto;
     console.log(this.produto?.nome);
  }

  exibe(foto:string):void{
    console.log(foto);
    this.fotoAtual = foto;
  }

  backClicked() {
    this._location.back();
  }

}
