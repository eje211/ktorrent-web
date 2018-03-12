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

import { TorrentStatus } from './torrentstatus';

export class KTorrentData {
  torrents: Torrent[];
}

export class Torrent {
  name: string;
  infoHash: string;
  status: TorrentStatus;
  timeAdded: Date;
  bytesDownloaded: number;
  bytesUploaded: number;
  totalBytes: number;
  totalBytesToDownload: number;
  percentDone: number;
  downloadRate: number;
  uploadRate: number;
  numPeers: number;
  seeders: number;
  seedersTotal: number;
  leechers: number;
  leechersTotal: number;
  running: boolean;
  numFiles: number;

  static fromJson(json: any) {
    const result = new Torrent();
    result.name = json.name;
    result.infoHash = json.infoHash;
    result.status = TorrentStatus[TorrentStatus[json.status]];
    result.timeAdded = new Date(0);
    result.timeAdded.setUTCSeconds(json.timeAdded / 1000);
    result.bytesDownloaded = json.bytesDownloaded;
    result.bytesUploaded = json.bytesUploaded;
    result.totalBytes = json.totalBytes;
    result.totalBytesToDownload = json.totalBytesToDownload;
    result.percentDone = json.bytesDownloaded / json.totalBytesToDownload * 100;
    result.downloadRate = json.downloadRate;
    result.uploadRate = json.uploadRate;
    result.numPeers = json.numPeers;
    result.seeders = json.seeders;
    result.seedersTotal = json.seedersTotal;
    result.leechers = json.leechers;
    result.leechersTotal = json.leechersTotal;
    result.running = json.running;
    result.numFiles = json.numFiles;
    return result;
  }
}

