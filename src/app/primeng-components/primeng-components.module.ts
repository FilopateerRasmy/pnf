import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {GalleriaModule} from 'primeng/galleria';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import {CarouselModule} from 'primeng/carousel';
import {BadgeModule} from 'primeng/badge';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';

import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DividerModule} from 'primeng/divider';
import {TimelineModule} from 'primeng/timeline';

import {StepsModule} from 'primeng/steps';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    GalleriaModule,
    MessageModule,
    MessagesModule,
    CardModule,
    ProgressSpinnerModule,
    ButtonModule,
    PaginatorModule,
    FormsModule,
    PasswordModule,
    CarouselModule,
    BadgeModule,
    SidebarModule,
    ToastModule,
    TimelineModule,
    ToolbarModule,
    SplitButtonModule,
    DividerModule,
    CheckboxModule,
    StepsModule,
  ]
})
export class PrimengComponentsModule { }
