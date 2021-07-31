import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  judul: any;
  newss: any = [];
  userData: any = {};
  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.judul = 'Detail Berita';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getNewss();
    });
  }

  loading: boolean | undefined;
  getNewss() {
    this.loading = true;
    this.db.collection('newss', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.newss = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }
  productDetail(data: any, idx: number) {
    let dialog = this.dialog.open(ProductDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe((res: any) => {
      return;
    })
  }
  loadingDelete: any = {};
  deleteProduct(id: string, idx: any) {

    var conf = confirm('Delete item?');
    if (conf) {
      this.db.collection('newss').doc(id).delete().then(res => {
        this.newss.splice(idx, 1);
        this.loadingDelete[idx] = false;
      }).catch(err => {
        this.loadingDelete[idx] = false;
        alert('Tidak dapat menghapus data');
      })
    }
  }
}
