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

import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMapTo';
import 'rxjs/add/observable/timer';

import { KTorrentData, Torrent } from '../ktorrentdata';
import { TorrentsService } from '../torrents.service';
import { TorrentStatus } from '../torrentstatus';

@Component({
  selector: 'app-torrent-list',
  templateUrl: './torrent-list.component.html',
  styleUrls: ['./torrent-list.component.css']
})
export class TorrentListComponent implements OnInit {
  /**
   * How often the data should auto-refresh, in miliseconds.
   */
  static REFRESH_RATE = 8000;

  torrents: Torrent[];

  securityToken = '';

  displayedColumns = [
      'actions',
      'name',
      'infoHash',
      'status',
      'timeAdded',
      'bytesDownloaded',
      'bytesUploaded',
      'totalBytes',
      'totalBytesToDownload',
      'downloadRate',
      'uploadRate',
      'numPeers',
      // 'seeders',
      // 'seedersTotal',
      // 'leechers',
      // 'leechersTotal',
      // 'running',
      // 'numFiles',
  ];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private torrentsService: TorrentsService
  ) { }

  ngOnInit() {
    Observable.timer(0, TorrentListComponent.REFRESH_RATE).mergeMapTo(this.torrentsService.getTorrents())
      .subscribe(t => this.torrents = t);
    const securityToken =
        (document as any).cookie.split('; ').map(c => c.split('=')).filter(c => c[0] === 'token')[0][1] || '';
    this.torrentsService.setSecurityHeaders(new HttpHeaders({
      'Session-Token': securityToken,
    }));
  }

  status(torrent: Torrent): string {
    return TorrentStatus[torrent.status];
  }

  /**
   * Returns a human readable version of a number.
   */
  humanReadable(num: number, suffix: string[] = ['', 'k', 'M', 'G', 'T']): string {
    if (num < 900) {
      return this.fixed(num) + suffix[0];
    } else if (suffix.length > 1) {
      return this.humanReadable(num / 1000, suffix.slice(1));
    }
    return this.fixed(num) + suffix[0];
  }

  /**
   * This function works in a similar way to JavaScript's toFixed method except it also cuts trailing zeros.
   */
  fixed(num: number): number {
    return Math.round(num * 100) / 100;
  }

  startTorrent(hash: string): void {
    this.torrentsService.startTorrent(hash);
  }

  pauseTorrent(hash: string): void {
    this.torrentsService.stopTorrent(hash);
  }

  removeTorrent(hash: string): void {
    this.torrentsService.removeTorrent(hash);
  }
}
