import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DeletebuttonComponent } from './components/deletebutton/deletebutton.component';
import { EditbuttonComponent } from './components/editbutton/editbutton.component';
import { AddbuttonComponent } from './components/addbutton/addbutton.component';
import { EducacionModalComponent } from './components/modales/educacion-modal/educacion-modal.component';
import { ExperienciaModalComponent } from './components/modales/experiencia-modal/experiencia-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ProfileComponent,
    SocialLinkComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    BannerComponent,
    SkillsComponent,
    FooterComponent,
    HomeComponent,
    DeletebuttonComponent,
    EditbuttonComponent,
    AddbuttonComponent,
    EducacionModalComponent,
    ExperienciaModalComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({"responsive": true}),
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EducacionModalComponent, ExperienciaModalComponent] //habilia al componente para que se pueda usar en un modal
})
export class AppModule { }
