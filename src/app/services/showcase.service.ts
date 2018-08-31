import Showcase from '../model/showcase.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class ShowcaseService {

  api_url = 'http://localhost:3000';
  showcaseUrl = `${this.api_url}/api/showcasecarousel`;

  constructor(
    private http: HttpClient
  ) { }
//Create todo, takes a ToDo Object
  createShowcase(showcase: Showcase): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.showcaseUrl}`, showcase);
  }

  //Read todo, takes no arguments
  getShowcases(): Observable<Showcase[]> {
    return this.http.get(this.showcaseUrl)
      .pipe(
        map(res  => {
        //Maps the response object sent from the server

        return res["data"].docs as Showcase[];
      });
      )

  }
  //Update todo, takes a ToDo Object as parameter
  editShowcase(showcase:Showcase){
    let editUrl = `${this.showcaseUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, showcase);
  }

  deleteShowcase(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.showcaseUrl}/${id}`;
    return this.http.delete(deleteUrl)
      .map(res  => {
        return res;
      });
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
