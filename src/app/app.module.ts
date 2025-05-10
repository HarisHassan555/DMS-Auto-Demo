import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';

// Material Imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CountryComponent } from './components/master/country/country.component';
import { CityComponent } from './components/master/city/city.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { BookingTypeComponent } from './components/master/booking-type/booking-type.component';
import { CustomerCategoryComponent } from './components/master/customer-category/customer-category.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'home', 
    component: LandingPageComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'master/country', 
    component: CountryComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'master/city', 
    component: CityComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'master/booking-type', 
    component: BookingTypeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'master/customer-category', 
    component: CustomerCategoryComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

// Initialize Firebase
const app = initializeApp(environment.firebase);
const auth = getAuth(app);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingPageComponent,
    CountryComponent,
    CityComponent,
    LoginComponent,
    HeaderComponent,
    BookingTypeComponent,
    CustomerCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
