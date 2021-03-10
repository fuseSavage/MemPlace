import { crudapi } from './../crudapi';
import { NavController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  placename: String;
  date: String;
  location: String;
  txtreview: String;
  impressive: String;
  img: String;

  constructor(public navCtrl: NavController, private crud: crudapi, public toastCtrl: ToastController) { }

  async saveData() {
    // console.log(this.placename);

    const toast = await this.toastCtrl.create({
      message: 'บันทึกเรียบร้อย ',
      duration: 2000,
    });

    let tmpobj = {
      placename: this.placename,
      date: this.date,
      location: this.location,
      txtreview: this.txtreview,
      impressive: this.impressive,
      img: this.img,
    };
    this.crud.cerateData(tmpobj).then(() => {
      toast.present();
      this.navCtrl.navigateForward(['tabs/tab1']).then(() => {
        location.reload();
      })
    });
  }



}
