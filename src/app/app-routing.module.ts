import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SearchComponent } from './components/search/search.component';
import { TrendinggifsComponent } from './components/trendinggifs/trendinggifs.component';
import { TrendingstickersComponent } from './components/trendingstickers/trendingstickers.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "gifsmoda", component:TrendinggifsComponent},
  {path: "stickersmoda", component:TrendingstickersComponent},
  {path: "buscar", component:SearchComponent},
  {path: "**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
