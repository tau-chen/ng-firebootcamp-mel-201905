import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { tap, finalize, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
    ) { }

  API_BASE = environment.API_BASE;

  getCompanies(): Observable<Company[]> {
    //return this.httpClient.get<Company[]>(this.API_BASE + '/company');
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    //.pipe(catchError(this.errorHandler<Company>(e))
    //);
  }

  deleteCompany(company: Company): Observable<Company> {
    console.log("Delete Company", company.id);
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${company.id}`)
    .pipe(
      tap(c => console.log("HttpClient.delete called")),
      catchError(this.errorHandling),
    );
  }

  errorHandling(error: Error): Observable<any> {
    console.error('ERROR', error);
    return new Observable();
  }
}

