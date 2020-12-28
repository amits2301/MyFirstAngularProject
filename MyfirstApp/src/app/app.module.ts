import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { from } from 'rxjs';
import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { FormsComponent } from './forms/forms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmitChildComponent } from './amit-child/amit-child.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SuccessalertComponent,
    FormsComponent,
    AmitChildComponent,
   // NgbModule.forRoot()
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
