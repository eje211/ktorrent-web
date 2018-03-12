/*
 * KTorrent HTML Interface, html app.
 * Copyright (C) 2018 Emmanuel Eytan
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import { TorrentsService } from './torrents.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public dialog: MatDialog,
    private torrentsService: TorrentsService,
  ) {}

  openMagnet() {
    const dialogRef = this.dialog.open(MagnetDialogComponent, {
      height: '220px',
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.torrentsService.startFromMagnetLink(result);
      }
    });
  }
}

@Component({
  selector: 'app-magnet-dialog',
  templateUrl: 'magnet-dialog.html',
  styles: [`
mat-form-field {
 width: 100%;
}
  `]
})
export class MagnetDialogComponent {
  public magnet: string;
  constructor(
    private renderer: Renderer2
  ) {}
  submit(event) {
    if (event.keyCode === 13) {
      const start: HTMLElement = document.getElementById('start') as HTMLElement;
      start.click();
    }
  }
}
