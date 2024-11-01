import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/AlunoModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:8080/alunos';

  private requisicao?: string;

  constructor(private http : HttpClient) {}

  getAlunoPeloId(): Observable<Aluno> {

    return this.http.get<Aluno>(this.url+'/4');
  }

  postAluno(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.url, aluno);
  }

}