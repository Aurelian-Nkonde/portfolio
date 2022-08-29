import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent, title: "Aurelian-Nkonde-porfolio"},
  {path: '', redirectTo: 'portfolio', pathMatch: "full", title: "Aurelian-Nkonde-portfolio"},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
