import { Component, OnInit,  Output } from '@angular/core';
import { ImpressoraService } from 'src/app/_services/cadastro/impressora.service';
import { ImpressoraModel } from 'src/app/_models/cadastro/impressoraModel';

@Component({
  selector: 'app-impressora',
  templateUrl: './impressora.component.html',
  styleUrls: ['./impressora.component.css']
})
export class ImpressoraComponent implements OnInit {

  lista=true;
  confirmacaoExclusao:boolean = false;
  // impressora?: ImpressoraModel;
  impressoras?: ImpressoraModel[];
  impressoraParaExcluir: any;
  impressoraParaAtualizar? : ImpressoraModel;
  editarImpressoraBool = false;


  constructor(
    private impressoraService: ImpressoraService) { }

  ngOnInit(): void {
    this.obterTodos();
  }

  obterTodos(){
    this.lista = true;
    this.confirmacaoExclusao = false;

    this.impressoraService.obterTodos().subscribe(
      impressora => {
        this.impressoras = impressora
      });

  }

  editarImpressora(impressora: ImpressoraModel){

    this.lista = false;
    this.confirmacaoExclusao = false;
    this.editarImpressoraBool = true;
    this.impressoraParaAtualizar = impressora;
  }

  mensagemExclusao(impressora: ImpressoraModel){
    this.confirmacaoExclusao = true;
    this.lista = false;

    this.impressoraParaExcluir = impressora;
  }

  excluirImpressora(){
    let impressora = this.impressoraParaExcluir;

    this.impressoraService.excluir(impressora)
      .subscribe(() => this.obterTodos());

  }

  atualizarLista(impressoras: ImpressoraModel[]){
    this.impressoras = impressoras;
  }

  adicionarImpressora(){
    this.lista = false;
    this.confirmacaoExclusao = false;
    this.editarImpressoraBool = true;
    this.impressoraParaAtualizar = new ImpressoraModel();
  }

}
