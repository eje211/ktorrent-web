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

