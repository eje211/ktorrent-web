import { Injectable } from '@angular/core';
import { KTorrentData, Torrent } from './ktorrentdata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TorrentsService {

  constructor(
    private http: HttpClient
  ) { }

  getTorrents(): Observable<KTorrentData> {
    return this.http.get('http://localhost:8880/ktorrentdata') as Observable<KTorrentData>;
  }

  startTorrent(hash: string): void {
    this.http.post('http://localhost:8880/ktorrentaction', {
      type: 'start',
      hash: hash
    }).subscribe();
  }

  pauseTorrent(hash: string): void {
    this.http.post('http://localhost:8880/ktorrentaction', {
      type: 'pause',
      hash: hash
    }).subscribe();
  }

  removeTorrent(hash: string): void {
    this.http.post('http://localhost:8880/ktorrentaction', {
      type: 'remove',
      hash: hash
    }).subscribe();
  }

  startFromMagnetLink(magnetLink: string) {
    this.http.post('http://localhost:8880/ktorrentaction', {
      type: 'magnet',
      magnet: magnetLink
    }).subscribe();
  }
}
