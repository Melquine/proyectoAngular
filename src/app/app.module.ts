import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendinggifsComponent } from './components/trendinggifs/trendinggifs.component';
import { TrendingstickersComponent } from './components/trendingstickers/trendingstickers.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FirstletterPipe } from './pipes/firstletter.pipe';
import { SearchComponent } from './components/search/search.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GenericdataComponent } from './components/genericdata/genericdata.component';
import { DataInterceptor } from './interceptors/data.interceptor';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendinggifsComponent,
    TrendingstickersComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FirstletterPipe,
    SearchComponent,
    NotfoundComponent,
    GenericdataComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
