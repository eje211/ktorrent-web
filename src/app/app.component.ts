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
