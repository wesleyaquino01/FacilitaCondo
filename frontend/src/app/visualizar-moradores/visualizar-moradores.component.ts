import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizar-moradores',
  templateUrl: './visualizar-moradores.component.html',
  styleUrls: ['./visualizar-moradores.component.scss']
})
export class VisualizarMoradoresComponent {
  mostrarInfo: boolean = false;

  dados = [
    {nome: 'Wesley'},
    {nome: 'Fab Pena'},
    {nome: 'Gabriel'},
    {nome: 'Igor Almeida'}
  ]

  dadosTabela: [] = [];

  constructor() {
  }

  visualizarMoradores(){
    this.mostrarInfo = true;
    // this.dadosTabela.push()
    console.log(this.dadosTabela);
  }

  // ngOnInit(){
  //   console.log(this.dados)
  // }

}
