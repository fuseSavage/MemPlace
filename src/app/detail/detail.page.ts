import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { crudapi } from '../crudapi';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  tmpobj: any;

  constructor( public navCtrl: NavController, public actRoute: ActivatedRoute, private crud: crudapi ) { }

  ngOnInit() {


    let sendobj = this.actRoute.snapshot.paramMap.get('sendobj');
    this.tmpobj = JSON.parse(sendobj);
  }

  backpop() {
    this.navCtrl.pop();
  }

}
