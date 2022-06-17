import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InvalidComponent } from './invalid/invalid.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'books',component:BooksComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'',component:TechnologyComponent},
  {path:'**',component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
