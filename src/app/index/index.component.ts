import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { ActivatedRoute } from '@angular/router';
import { Index } from '../shared/index/models/index.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isinCode!: string;
  public index: Index[];

  constructor(private indexService: IndexService, private activatedRoute: ActivatedRoute) {
    this.index=[];
   }

  ngOnInit(): void {
    this.isinCode = this.activatedRoute.snapshot.paramMap.get('isinCode') || '';
    this.getIndex(this.isinCode);
  }


  public getIndex(isinCode: string): void{
   this.indexService.getIndexbyIsin(isinCode).subscribe(
      (response: Index[]) => {
        this.index = response;
        console.log(this.index)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }}