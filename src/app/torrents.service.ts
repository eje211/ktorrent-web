import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KTorrentData, Torrent } from './ktorrentdata';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TorrentsService {

  private static securityHeaders: HttpHeaders;

  private authorized: HttpClient;

  constructor(
    private http: HttpClient
  ) { }

  setSecurityHeaders(securityHeaders: HttpHeaders): void {
    TorrentsService.securityHeaders = securityHeaders;
  }

  getTorrentData(): Observable<KTorrentData> {
    return this.http.get(`http://${location.hostname}:8880/ktorrentdata`) as Observable<KTorrentData>;
  }

  getTorrents(): Observable<Torrent[]> {
    return this.getTorrentData().map(td => td.torrents.map(t => Torrent.fromJson(t)));
  }

  startTorrent(hash: string): void {
    this.http.post(`http://${location.host}/ktorrentaction`, {
      type: 'start',
      hash: hash,
    },
    {
      headers: TorrentsService.securityHeaders,
    }).subscribe();
  }

  stopTorrent(hash: string): void {
    this.http.post(`http://${location.host}/ktorrentaction`, {
      type: 'stop',
      hash: hash,
    },
    {
      headers: TorrentsService.securityHeaders,
    }).subscribe();
  }

  removeTorrent(hash: string): void {
    this.http.post(`http://${location.host}/ktorrentaction`, {
      type: 'remove',
      hash: hash,
    },
    {
      headers: TorrentsService.securityHeaders,
    }).subscribe();
  }

  startFromMagnetLink(magnetLink: string): void {
    this.http.post(`http://${location.host}/ktorrentaction`, {
      type: 'magnet',
      magnet: magnetLink,
    },
    {
      headers: TorrentsService.securityHeaders,
    }).subscribe();
  }
}
