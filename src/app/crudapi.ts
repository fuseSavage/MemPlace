import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable ({
  providedIn: 'root',
})

export class crudapi {

  constructor( private fs: AngularFirestore ) {}

  //read
  readData() {
    return this.fs.collection('reviews').snapshotChanges();
  }

  //delete
  delData(docId : any) {
    return this.fs.doc('reviews/' + docId).delete();
  }

  //cerate
  cerateData(tmpdoc : any) {
    return this.fs.collection('reviews').add(tmpdoc);
  }

  updateData(docId: any, tempdoc: any){
    return this.fs.doc('reviews/' + docId).update(tempdoc);
  }
}
