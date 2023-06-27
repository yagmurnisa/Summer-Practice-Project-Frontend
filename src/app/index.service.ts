import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Index } from './shared/index/models/index.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getIndexbyIsin(isinCode: string): Observable<Index[]>{
    return this.http.get<Index[]>(`${this.apiUrl}/index/${isinCode}`);
  }
}
