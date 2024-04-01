import { Country } from './../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) {
   }

   searchCapital( term: string): Observable<Country[]>{

    const url = `${ this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError(() =>  of ([]))
    );
  }

  searchCountry( term: string): Observable<Country[]>{

    const url = `${ this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of ([]))
    );

  }

  searchRegion( term: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${term}`;

    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of ([]))
    );
  }

}
