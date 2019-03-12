import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Categoria } from './Categoria';
import { MessageService } from './m'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CategoriaService {

  private categoriasUrl = 'api/categorias';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getCategorias (): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriasUrl)
      .pipe(
        tap(_ => this.log('fetched categorias')),
        catchError(this.handleError('getCategorias', []))
      );
  }

  

  /** GET hero by id. Return `undefined` when id not found */
  getCategoriaNo404<Data>(id: number): Observable<Categoria> {
    const url = `${this.categoriasUrl}/?id=${id}`;
    return this.http.get<Categoria[]>(url)
      .pipe(
        map(categorias => categorias[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Categoria>(`getCategoria id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getCategoria(id: number): Observable<Categoria> {
    const url = `${this.categoriasUrl}/${id}`;
    return this.http.get<Categoria>(url).pipe(
      tap(_ => this.log(`fetched categoria id=${id}`)),
      catchError(this.handleError<Categoria>(`getCategoria id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchCategorias(term: string): Observable<Categoria[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Categoria[]>(`${this.categoriasUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Categoria[]>('searchCategorias', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addCategoria (categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.categoriasUrl, categoria, httpOptions).pipe(
      tap((newCategoria: Categoria) => this.log(`added categoria w/ id=${newCategoria.id}`)),
      catchError(this.handleError<Categoria>('addCategoria'))
    );
  }

  /** DELETE: delete the hero from the server */
  /*
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  /*
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CategoriaService: ${message}`);
  }
}
