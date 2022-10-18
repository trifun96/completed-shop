import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModalComponent } from './shell/shared-modal/shared-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { NewsletterComponent } from './shell/newsletter/newsletter.component';
import { FooterInformationComponent } from './shell/footer-information/footer-information.component';
import { RaitingComponent } from './shell/raiting/raiting.component';
import { DeliveryInformationComponent } from './shell/delivery-information/delivery-information.component';
import { HeaderInfoComponent } from '../feature/product/components/header-info/header-info.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule, MatIconModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule],
  declarations: [SharedModalComponent, NewsletterComponent, FooterInformationComponent, FooterInformationComponent, RaitingComponent, DeliveryInformationComponent, HeaderInfoComponent],
  exports: [TranslateModule, CommonModule, FormsModule, RouterModule, SharedModalComponent, MatIconModule, NewsletterComponent, FooterInformationComponent, FormsModule, ReactiveFormsModule, RaitingComponent, DeliveryInformationComponent, HeaderInfoComponent, NgxSpinnerModule],
})
export class SharedModule {}