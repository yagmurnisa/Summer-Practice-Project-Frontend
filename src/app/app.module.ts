import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './services/stock/stock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './services/news/news.service';
import { IndexComponent } from './index/index.component';
import { IndexService } from './index.service';
import { ChartComponent } from './chart/chart.component';
import { ChartService } from './chart.service';
@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    IndexComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [StockService, NewsService,  ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
