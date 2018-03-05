import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';


import { AppComponent, MagnetDialogComponent } from './app.component';
import { TorrentListComponent } from './torrent-list/torrent-list.component';
import { TorrentsService } from './torrents.service';


@NgModule({
  declarations: [
    AppComponent,
    MagnetDialogComponent,
    TorrentListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [
    TorrentsService,
  ],
  entryComponents: [
    MagnetDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
