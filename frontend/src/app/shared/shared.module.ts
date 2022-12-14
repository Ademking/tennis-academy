import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserlayoutComponent } from './components/userlayout/userlayout.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { allIcons, HeroIconModule } from 'ng-heroicon';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { QuillModule } from 'ngx-quill';
import { ModalComponent } from './components/modal/modal.component';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputMaskModule } from 'primeng/inputmask';
import { HotToastModule } from '@ngneat/hot-toast'
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { SanitizeHtmlPipe } from './pipes/sanitizehtml.pipe';
import { NgxEchartsModule } from 'ngx-echarts';
import { AvatarModule } from 'primeng/avatar';
import {RatingModule} from 'primeng/rating';
import { TableModule } from 'primeng/table';
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    NavbarComponent,
    UserlayoutComponent,
    CourseCardComponent,
    TruncatePipe,
    SanitizeHtmlPipe,
    ModalComponent,
    ModalComponent,
    AdminlayoutComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MarkdownModule.forRoot(),
    HeroIconModule.forRoot({
      ...allIcons
    }, {
      defaultHostDisplay: 'inlineBlock', // default 'none'
      attachDefaultDimensionsIfNoneFound: true // default 'false'
    }),
    QuillModule.forRoot(),
    CalendarModule,
    DialogModule,
    InputTextModule,
    SkeletonModule,
    BreadcrumbModule,
    InputMaskModule,
    AvatarModule,
    HotToastModule.forRoot(),


    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    ProgressSpinnerModule,
    NgxPageScrollCoreModule,
    RatingModule,
    TableModule,

    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),

  ],

  exports: [
    UserlayoutComponent,
    AdminlayoutComponent,
    CourseCardComponent,
    NavbarComponent,
    MarkdownModule,
    TruncatePipe,
    SanitizeHtmlPipe,
    QuillModule,
    ModalComponent,
    CalendarModule,
    DialogModule,
    SkeletonModule,
    InputTextModule,
    BreadcrumbModule,
    InputMaskModule,
    HotToastModule,
    NgxPageScrollCoreModule,
    NgxEchartsModule,
    ProgressSpinnerModule,
    AvatarModule,
    RatingModule,
    TableModule,
  ]

})
export class SharedModule { }
