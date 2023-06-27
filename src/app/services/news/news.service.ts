import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/shared/news/models/news.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public getNews(): Observable<News[]>{
    return this.http.get<News[]>(`${this.apiUrl}/news/all`);
  }

  public getNewsbyIsin(isinCode: string): Observable<News[]>{
    return this.http.get<News[]>(`${this.apiUrl}/news/${isinCode}`);
  }
}
