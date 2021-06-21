import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { ThirdComponent } from './third/third.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ClassBindingComponent,
    ThirdComponent,
    ChildComponent,
    ContentprojectionComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
