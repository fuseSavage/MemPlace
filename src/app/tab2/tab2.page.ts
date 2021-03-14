import { crudapi } from './../crudapi';
import { NavController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

import { tap } from 'rxjs/Operators'


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
  fileimg: any;
  img: String;
  imgURL: String;

  //main task
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;

  downloadURL: Observable<string>;
  isUploaded: boolean = false;


  constructor(public navCtrl: NavController, private crud: crudapi, public toastCtrl: ToastController, private storage: AngularFireStorage) { }

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
    this.crud.createData(tmpobj).then(() => {
      toast.present();
      this.navCtrl.navigateForward(['tabs/tab1']).then(() => {
        location.reload();
      })
    });


  }

  uploadFile(event) {
    const file = event.item(0);
    console.log("hello", this.downloadURL);


    if (file.type.split('/')[0] !== 'image') {
      console.log('unsupported file type :( ')
      return;
    }

    const path = `upload/${new Date().getTime()}_${file.name}`;
    console.log('upload path : ', path);

    const customMetadata = { app: 'ionic.com' }

    this.task = this.storage.upload(path, file, { customMetadata });



    // this.percentage = this.task.percentageChanges();
    // this.snapshot = this.task.snapshotChanges().pipe(
    //   tap(snap => {
    //     console.log(snap);
    //     if (snap.bytesTransferred === snap.totalBytes) {

    //     this.downloadURL.subscribe((url) => {
    //         this.imgURL = url.toString();
    //         console.log("hello how are you", this.imgURL)
    //       });

    //     }

    //   })
    // )
    // this.snapshot.subscribe();


    // console.log('hello', this.imgURL)

  }





}
