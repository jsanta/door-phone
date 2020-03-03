import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  entrancePhone: string;
  exitPhone: string;

  constructor(private storageService: StorageService, public alertController: AlertController) { }

  saveConfig() {
    console.log('saveConfig: ', this.entrancePhone, this.exitPhone);
    this.storageService.setData('entrancePhone', this.entrancePhone);
    this.storageService.setData('exitPhone', this.exitPhone);

    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Configuración guardada exitosamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async ngOnInit() {
    this.entrancePhone = await this.storageService.getData('entrancePhone');
    this.exitPhone     = await this.storageService.getData('exitPhone');
  }

}
