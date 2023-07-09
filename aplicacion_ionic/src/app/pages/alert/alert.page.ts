import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string |undefined ;
  constructor( public alertController: AlertController) { 

  }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Descargar Curso',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
          handler: (blah) =>{
            console.log('Cancelar');
          }
        },
        {
          text: 'Confirmar',
          cssClass: 'alert-button-confirm',
          handler: (blah) =>{
            console.log('Confirmar');
          }
        },
      ],
    });

    await alert.present();
  }
  async presentAlertTwo() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () =>{
          console.log('Confirm cancel');
        }
      },
    {
      text: 'OK',
      handler: (data) =>{
        console.log('Confirm OK',data);
        this.titulo = data.txtNombre ;
      }
    }],
      inputs: [
        {
          name: 'txtNombre',
          placeholder: 'Name',
          type:'text',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
  
}
   

