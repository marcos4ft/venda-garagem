import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';
import { SelectCategoriaPipe } from './select-categoria.pipe';
import { SelectEstadoPipe } from './select-estado.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import {ROUTES} from './app.routes'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetalheProdutoComponent,
    ListagemProdutoComponent,
    SelectCategoriaPipe,
    SelectEstadoPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(ROUTES,{ scrollPositionRestoration: 'enabled' })
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
