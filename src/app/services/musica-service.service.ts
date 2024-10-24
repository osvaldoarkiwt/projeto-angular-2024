import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../models/MusicaModel';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private url = 'https://api.lyrics.ovh/v1/djavan/samurai';

  constructor(private http : HttpClient) {}

  getLetraMusica(): Observable<Musica> {
    return this.http.get<Musica>(this.url);
  }
}
