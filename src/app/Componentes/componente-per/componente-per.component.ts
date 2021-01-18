import { Component, Input, OnInit } from '@angular/core';
import{Persona} from '../../Modelos/persona';
import{PERSONAS} from '../../mocks/mock-personas'


@Component({
  selector: 'app-componente-per',
  templateUrl: './componente-per.component.html',
  styleUrls: ['./componente-per.component.css']
})
export class ComponentePerComponent implements OnInit {

  persona: Persona = {
    id:"",
    nombre: "Raul",
  };
  personas = PERSONAS;

  mostrar:boolean = true
  info:boolean = false
  
  constructor() {}

  ngOnInit(): void {
    
  }

}
