import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { dados } from '../modulo/landing-page/interface/dados.interface';

@Injectable({
  providedIn: 'root'
})
export class CuidarService {
    


  private readonly rootUrl: string = 'http://localhost:3000'
  private  myList: dados[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  public getDados(){
    const url = `${this.rootUrl}/items`;
    return  this.httpClient.get<dados[]>(url)
    .pipe(
      tap(console.log)
    );
  }

  public deleteItemAsync(item: dados): Observable<any>{
    const url = `${this.rootUrl}/items`;
    return this.httpClient.delete(url, { body: { item }})
  }

  public getItens(): dados[]{
    return this.myList
  }

  chamarDados(){
    this.getDados().subscribe(response => {
      console.log(response);
      this.myList = response
      console.log(this.myList);

    })
  }
}
