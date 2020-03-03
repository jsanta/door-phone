import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  entrancePhone: string;
  exitPhone: string;

  constructor() {
    this.entrancePhone = '+12345687900';
    this.exitPhone = '+12345687900';
  }
}
