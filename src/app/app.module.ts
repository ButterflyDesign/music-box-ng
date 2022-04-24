import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from  '@angular/forms'
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import { MediaLibraryService } from './service/media-library.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {PanelModule} from 'primeng/panel';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SplitterModule} from 'primeng/splitter';
import {DialogModule} from 'primeng/dialog';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { NgAudioVisualizerModule } from 'ng-audio-visualizer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule,
    TableModule,
    TabViewModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    PanelModule,
    ScrollPanelModule,
    SplitterModule,
    DialogModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgAudioVisualizerModule
  ],
  providers: [MediaLibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
