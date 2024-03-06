import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizar-moradores',
  templateUrl: './visualizar-moradores.component.html',
  styleUrls: ['./visualizar-moradores.component.scss']
})
export class VisualizarMoradoresComponent {
  mostrarInfo: boolean = false
  d?: any;
  dados = [
    {nome: 'Wesley'},
    {nome: 'Fab Pena'},
    {nome: 'Gabriel'},
    {nome: 'Igor Almeida'}
  ]

  constructor() {
  }

  visualizarMoradores(){
    this.mostrarInfo = true;
    this.d = {position: 1, name: 'Hydrogen', weight: 1.0079};
    this.dados.push(this.d)
  }

  // ngOnInit(){
  //   console.log(this.dados)
  // }

}
