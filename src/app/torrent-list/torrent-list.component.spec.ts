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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentListComponent } from './torrent-list.component';

describe('TorrentListComponent', () => {
  let component: TorrentListComponent;
  let fixture: ComponentFixture<TorrentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorrentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
