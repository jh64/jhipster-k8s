import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MyAppWsSharedModule } from 'app/shared/shared.module';
import { MyAppWsCoreModule } from 'app/core/core.module';
import { MyAppWsAppRoutingModule } from './app-routing.module';
import { MyAppWsHomeModule } from './home/home.module';
import { MyAppWsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MyAppWsSharedModule,
    MyAppWsCoreModule,
    MyAppWsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MyAppWsEntityModule,
    MyAppWsAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MyAppWsAppModule {}
