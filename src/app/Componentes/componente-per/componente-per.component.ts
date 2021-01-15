import { Component, Input, OnInit } from '@angular/core';
import{Persona} from '../../Modelos/persona';

@Component({
  selector: 'app-componente-per',
  templateUrl: './componente-per.component.html',
  styleUrls: ['./componente-per.component.css']
})
export class ComponentePerComponent implements OnInit {

  public nombre: string;
  public apellidos: string;
  public edad: string;
  public sexo: string;

  public person = new Persona()

  constructor() {
    this.nombre = this.person.nombre = "Raul"
    this.apellidos = this.person.apellidos = "Anguiano"
    this.edad = this.person.edad = "19"
    this.sexo = this.person.Sexo = "Masculino"
   }

  ngOnInit(): void {
    
  }

}
