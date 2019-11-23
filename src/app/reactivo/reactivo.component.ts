import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registroForm = new FormGroup ({
    Nombre: new FormControl(),
    Apellido: new FormControl(),
    Email: new FormControl()
  })

}
