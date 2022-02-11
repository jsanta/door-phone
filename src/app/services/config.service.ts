import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  entrancePhone: string;
  exitPhone: string;

  async loadData() {
    this.entrancePhone = await this.storageService.getData('entrancePhone');
    this.exitPhone = await this.storageService.getData('entrancePhone');

    console.log(this.entrancePhone, this.exitPhone);
  }

  constructor(private storageService: StorageService) {
    this.loadData();
  }
}
