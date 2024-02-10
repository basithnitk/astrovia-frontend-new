import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrokerComponent } from './broker/broker.component';
import { HistoryComponent } from './admin/history/history.component';
import { StatementComponent } from './admin/statement/statement.component';
import { DetailsComponent } from './investor/details/details.component';
import { TradesComponent } from './investor/trades/trades.component';
import { HoldingsComponent } from './investor/holdings/holdings.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { BackendService } from './shared/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { InvestorComponent } from './investor/investor.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BrokerComponent,
    HistoryComponent,
    StatementComponent,
    DetailsComponent,
    TradesComponent,
    HoldingsComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdminComponent,
    ConfirmDialogComponent,
    InvestorComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
