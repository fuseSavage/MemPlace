import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { crudapi } from './../crudapi';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tmpobj: any;

  constructor( private crud:crudapi, public navCtrl: NavController, public actRoute: ActivatedRoute, public alertCtrl: AlertController ) {}

  ngOnInit() {
    this.crud.readData().subscribe(data => {
      this.tmpobj = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          placename: e.payload.doc.data()['placename'.toString()],
          date: e.payload.doc.data()['date'.toString()],
          location: e.payload.doc.data()['location'.toString()],
          txtreview: e.payload.doc.data()['txtreview'.toString()],
          impressive: e.payload.doc.data()['impressive'.toString()],
          img: e.payload.doc.data()['img'.toString()],
        };
      });
    });

  }

  async delData(item: any) {
    const alert = await this.alertCtrl.create({
      message: 'ยืนยันการลบ',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            console.log('Delete Data');
            this.crud.delData(item.id);
          }
        }
      ]
    });
    (await alert).present();
  };

  editData(item : any) {
    this.navCtrl.navigateForward(['/edit',JSON.stringify(item)]);
  }

}
