import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImpressoraModel } from "src/app/_models/cadastro/impressoraModel";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class ImpressoraService{
  constructor(private http: HttpClient){}

  obterTodos(){
    return this.http.get<ImpressoraModel[]>(`${environment.apiUrl}/impressora`);
  }

  obterPorId(impressora: ImpressoraModel){
    return this.http.get<ImpressoraModel>(`${environment.apiUrl}/impressora/${impressora.id}`);
  }

  atualizar(id: number, impressora: ImpressoraModel){
    return this.http.put(`${environment.apiUrl}/impressora/${id}`, impressora);
  }

  adicionar(impressora: ImpressoraModel): Observable<ImpressoraModel[]>{
    return this.http.post<ImpressoraModel[]>(`${environment.apiUrl}/impressora`, impressora);
  }

  adicionarT(impressora: ImpressoraModel): Observable<ImpressoraModel>{
    return this.http.post(`${environment.apiUrl}/impressora`, impressora);
  }

  excluir(impressora: ImpressoraModel){
    return this.http.delete<ImpressoraModel>(`${environment.apiUrl}/impressora/${impressora.id}`);
  }
}
