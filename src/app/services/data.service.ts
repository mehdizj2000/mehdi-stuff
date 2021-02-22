import { ErrorDto } from './../dto/error.dto';
import { catchError } from 'rxjs/operators';
import { Base } from './../dto/base.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService<T extends Base> {

  constructor(private url: string, private client: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.client.get<T[]>(this.url).pipe(catchError(this.handleError));
  }

  create(resource: T): Observable<T> {
    return this.client.post<T>(this.url, resource).pipe(catchError(this.handleError));
  }

  update(resource: T): Observable<T> {
    return this.client.put<T>(this.url + '/' + resource.id, resource).pipe(catchError(this.handleError));
  }

  delete(resource: T): Observable<T> {
    return this.client.delete<T>(this.url + '/' + resource.id).pipe(catchError(this.handleError));
  }

  private handleError(err: Response): Observable<any> {
    if (err.status === 404)
      return throwError(new ErrorDto(err, err.status, 'the resource is not avialable'));
    if (err.status === 400)
      return throwError(new ErrorDto(err, err.status, 'bad request'));
    if (err.status === 403)
      return throwError(new ErrorDto(err, err.status, 'permission issue'));
    return throwError(new ErrorDto(err, err.status, 'Unchecked issue'));
  }


}
