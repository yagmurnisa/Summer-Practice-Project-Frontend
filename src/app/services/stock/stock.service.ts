import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/shared/stock/models/stock.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.apiUrl}/stock/all`);
  }

  public getStock(isinCode: string): Observable<Stock>{
    return this.http.get<Stock>(`${this.apiUrl}/stock/${isinCode}`);
  }
}
