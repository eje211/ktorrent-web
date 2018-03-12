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

/**
 * This enum is directly copied from the C++. It will be out of sync if the C++ is modified.
 */
export enum TorrentStatus {
    NOT_STARTED,
    SEEDING_COMPLETE,
    DOWNLOAD_COMPLETE,
    SEEDING,
    DOWNLOADING,
    STALLED,
    STOPPED,
    ALLOCATING_DISKSPACE,
    ERROR,
    QUEUED,
    CHECKING_DATA,
    NO_SPACE_LEFT,
    PAUSED,
    SUPERSEEDING,
    INVALID_STATUS
}
