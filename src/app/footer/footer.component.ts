import { Component, OnInit } from '@angular/core';
declare let require;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public loadImage(path) {
    return require(`../../../files/${path}`);
  }

}
