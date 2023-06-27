import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news/news.service';
import { News } from '../shared/news/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  isinCode!: string;
  public news: News[];

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { 
    this.news=[];
  }

  ngOnInit(): void {
    this.isinCode = this.activatedRoute.snapshot.paramMap.get('isinCode') || '';
    this.getNews(this.isinCode);
  }

  public getNews(isinCode: string): void{
    this.newsService.getNewsbyIsin(isinCode).subscribe(
      (response: News[]) => {
        this.news = response;
        console.log(this.news)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }
  changeIsoDateToCustomDate(date: string): string {
    
    const clockText: string = "Uhr";

    let dateList: string[] = date.split("T", 2);
    let dateWithDots: string = this.getDateWithDotFormat(dateList[0]);
    let timeWithoutMilisec: string = this.getDateTime(dateList[1].split("+", 1)[0]);

    let formattedDate = dateWithDots + " " + timeWithoutMilisec + " " + clockText;
    return formattedDate;
  }

  getDateWithDotFormat(parsedDate: string): string {
    let tempDateList: string[] = parsedDate.split("-", 3);

    let day = tempDateList[2];
    let month = tempDateList[1];
    let year = tempDateList[0];

    let date = day + "." + month + "." + year;
    return date;
  }

  getDateTime(parsedTime: string): string{
    let dateTime: string = parsedTime.split(".", 1)[0];
    let dateTimeList: string[] = dateTime.split(":",3);

    let hour = dateTimeList[0];
    let minute = dateTimeList[1];

    let time: string = hour + ":" + minute;
    return time;
  }

}
