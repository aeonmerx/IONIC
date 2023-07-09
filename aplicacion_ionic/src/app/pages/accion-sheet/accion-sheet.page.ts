import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-accion-sheet',
  templateUrl: './accion-sheet.page.html',
  styleUrls: ['./accion-sheet.page.scss'],
  
})

export class AccionSheetPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  
  async presentActionSheet() {
    
    const actionSheet = await this.actionSheetController.create({
      header: 'Curso nombre',
      subHeader: 'Descripción',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          icon:'trash',
          cssClass: 'rojo',
          handler: () =>{
            console.log("Delete clicked");
          }
        },

        {
          text: 'Compartir',
          data: {
            action: 'share',
          },
          icon:'share',
          handler: () =>{
            console.log("Share clicked");
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          icon:'close-outline',
          handler: () =>{
            console.log("Cancel clicked");
          }
        },
      ],
    });

    await actionSheet.present();
    console.log("Ha sido clickeado");
   
  }
}
