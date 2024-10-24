import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../models/MusicaModel';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private url = 'https://api.lyrics.ovh/v1/';

  private requisicao?: string;

  constructor(private http : HttpClient) {}

  getLetraMusica(banda: string, musica: string): Observable<Musica> {

    this.requisicao = `${this.url}${banda}/${musica}`;

    console.log(this.requisicao);

    return this.http.get<Musica>(this.requisicao);
  }
}
