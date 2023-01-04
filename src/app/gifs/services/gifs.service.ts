import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsRespone, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey : string='21J2THoy8dOrIntpSOsoaAWaBwVC3mww';
  private api :string = 'http://api.giphy.com/v1/gifs';
  private _historial:string[] = [];
  //TODO: cambiar tipado
  public results: Gif[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){
    
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
      this.results = JSON.parse(localStorage.getItem('results')!) || [];
    
  }
  
  buscarGifts(query:string){
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q', query)


    this.http.get<SearchGifsRespone>(`${this.api}/search`,{params}).
    subscribe(resp=>{
      console.log(resp.data);
      this.results = resp.data;
      localStorage.setItem('results',JSON.stringify(this.results))

    });
  }
}
