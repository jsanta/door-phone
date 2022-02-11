import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { CallService } from '../services/call.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  entrancePhone: string;
  exitPhone: string;

  constructor(
    private callService: CallService,
    public storageService: StorageService) {

    }

  async ngOnInit() {
    this.entrancePhone = await this.storageService.getData('entrancePhone');
    this.exitPhone = await this.storageService.getData('exitPhone');
  }

  callEntrance() {
    console.log('callEntrance');
    this.callService.callPhone(this.entrancePhone);
  }
  callExit() {
    console.log('callExit');
    this.callService.callPhone(this.exitPhone);
  }

}
