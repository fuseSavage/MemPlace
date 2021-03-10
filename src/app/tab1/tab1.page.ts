import { crudapi } from './../crudapi';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tmpobj: any;

  constructor( private crud:crudapi, public navCtrl: NavController, public actRoute: ActivatedRoute ) {}

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


  readDetail(item : any) {
    this.navCtrl.navigateForward(['/detail', JSON.stringify(item)])
  }

}
