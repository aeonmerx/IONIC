import { Component, OnInit } from '@angular/core';
import { Interface } from 'readline';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Ingeniería Mecánica',
      reDirectTo: '/accion-sheet'
    },
    {
      icon: 'home',
      name: 'Programación',
      reDirectTo: '/alert'
    }
  ] ;
  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon:string;
  name:string ;
  reDirectTo: string;
}