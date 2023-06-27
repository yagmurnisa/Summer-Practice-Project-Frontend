import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ChartData } from './shared/chart/models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

public getDailyData(): Observable<ChartData[]>{
  return this.http.get<ChartData[]>(`${this.apiUrl}/chart/daily`);
}

public getThreeMonths(): Observable<ChartData[]>{
  return this.http.get<ChartData[]>(`${this.apiUrl}/chart/threemonths`);
}

public getOneYear(): Observable<ChartData[]>{
  return this.http.get<ChartData[]>(`${this.apiUrl}/chart/oneyear`);
}

public getThreeYears(): Observable<ChartData[]>{
  return this.http.get<ChartData[]>(`${this.apiUrl}/chart/threeyears`);
}

public getFiveYears(): Observable<ChartData[]>{
  return this.http.get<ChartData[]>(`${this.apiUrl}/chart/fiveyears`);
}
}