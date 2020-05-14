import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jsonUrl = './../assets/data/data.json';
  arr = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.list();
    $('.buttonX:before').css('content', '');
  }
  list() {
    // tslint:disable-next-line: ban-types
    this.http.get(this.jsonUrl).subscribe((data: { data: [{ id: Number, type: String, content: any }] }) => {
      console.log('data', data);
      this.arr = data.data;
      // if (data.data) {
      //   if (data.data[0].content.length > 1) {
      //     console.log('');
      //   }
      // }
    });
  }
  getWidth(el) {
    if (this.arr.length > 4) {
      switch (el.content.length) {
        case 1:
          return `col-lg-${(el.content.length) + 1} col-md-2`;
        case 2:
          return `col-lg-${(el.content.length) + 2} col-md-4`;
        case 3:
          return `col-lg-${(el.content.length) + 3} col-md-6`;
        case 4:
          return `col-lg-${(el.content.length) + 4} col-md-8`;
        case 5:
          return `col-lg-${(el.content.length) + 5} col-md-10`;
        case 6:
          return `col-lg-${(el.content.length) + 6}`;
        case 7:
          return `col-lg-12`;
        case 8:
          return `col-lg-12`;
        default:
          return 'col-lg-3 col-md-6';
      }
    } else {
      // return 'col-md-6';
    }
  }

  getContentWidth(item) {
    if (item) {
      switch (item.content.length) {
        case 2:
          return 'col-md-6';
        case 3:
          return 'col-md-4';
        case 4:
          return 'col-md-3';
        case 5:
          return 'col-md-2';
        case 6:
          return 'col-md-2';
        default:
          return 'col-md-12';
      }
    }
  }
}
