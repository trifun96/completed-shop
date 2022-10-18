import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedHeaderComponent } from './shared/shell/shared-header/shared-header.component';
import { SharedFooterComponent } from './shared/shell/shared-footer/shared-footer.component';
import { LoginComponent } from './shared/shell/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { SharedModule } from './shared/shared-module';
import { CategoryComponent } from './feature/admin/components/category/category.component';
import { CategoryFormComponent } from './feature/admin/components/category-form/category-form.component';
import { FilterCategoryComponent } from './feature/admin/components/filter-category/filter-category.component';







export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SharedHeaderComponent,
    SharedFooterComponent,
    LoginComponent,
    CategoryComponent,
    CategoryFormComponent,
    FilterCategoryComponent,
   
 
 

 
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    HttpClientModule,
    MatIconModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
