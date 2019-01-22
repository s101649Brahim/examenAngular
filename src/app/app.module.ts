import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductSearchComponent } from "./product-search/product-search.component";
import { EightballService } from "./eightball.service";

// define the routes
const appRoutes: Routes = [
  { path: "search", component: ProductSearchComponent }
  //{ path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, ProductSearchComponent],
  providers: [EightballService],
  bootstrap: [AppComponent]
})
export class AppModule {}
