import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
  static REFRESH_RATE = 5000;


  torrents: Torrent[];

  torrentObserver: Observable<Torrent[]>;

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
    this.torrentObserver =
      this.torrentsService.getTorrents().map(kt => kt.torrents.map(torrent => Torrent.fromJson(torrent)));
    this.getTorrents();
    setInterval(() => this.getTorrents(), TorrentListComponent.REFRESH_RATE);
  }

  getTorrents(): void {
    this.torrentObserver.subscribe(k => this.torrents = k);
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
    this.torrentsService.pauseTorrent(hash);
  }

  removeTorrent(hash: string): void {
    this.torrentsService.removeTorrent(hash);
  }
}
