import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressora-form',
  templateUrl: './impressora-form.component.html',
  styleUrls: ['./impressora-form.component.css']
})
export class ImpressoraFormComponent implements OnInit {

  @Input() impressoraToEdit?: false;

  constructor() { }

  ngOnInit(): void {
  }

}
