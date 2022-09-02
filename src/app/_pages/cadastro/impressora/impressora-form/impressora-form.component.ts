import { ImpressoraModel } from 'src/app/_models/cadastro/impressoraModel';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ImpressoraService } from 'src/app/_services/cadastro/impressora.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-impressora-form',
  templateUrl: './impressora-form.component.html',
  styleUrls: ['./impressora-form.component.css']
})
export class ImpressoraFormComponent implements OnInit {


  @Input() impressora: any;
  @Output() retornarListaImpressora = new EventEmitter();
  @Output() listaAtualizada = new EventEmitter<ImpressoraModel[]>();

  constructor(
    private impressoraService: ImpressoraService
              ) { }

  ngOnInit(): void {
    // console.log(this.impressora.id)
    // console.log(this.impressora)
  }

  adicionarImpressora(impressora: ImpressoraModel){
    this.impressoraService.adicionar(impressora)
      .subscribe((impressoras: ImpressoraModel[]) => this.listaAtualizada
      .emit(impressoras));

      // this.impressoraService.adicionarT(impressora)
      // .subscribe(()=> this.listaImpressoras());

      // location.reload();

    // var impressoraAdd = {

    //   nome: impressora.nome,
    //   marca: impressora.marca,
    //   modelo: impressora.modelo,
    //   ip: impressora.ip
    // }

    // this.impressoraService.adicionarT(impressora).subscribe(res =>{this.listaImpressoras()});
  }

  editarImpressora(id: number,impressora: ImpressoraModel){
    console.log(this.impressora.id)
    console.log(this.impressora)
    this.impressoraService.atualizar(id, impressora).subscribe(() => this.listaImpressoras())
    this.impressora = false;
  }

  listaImpressoras(){
    this.retornarListaImpressora.emit();
  }

}
