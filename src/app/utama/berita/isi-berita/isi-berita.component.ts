import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isi-berita',
  templateUrl: './isi-berita.component.html',
  styleUrls: ['./isi-berita.component.scss']
})
export class IsiBeritaComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
