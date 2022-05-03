import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public show:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  reload(){
    window.location.reload()
  }

  toggle(){
    this.show = !this.show


  }

  back(){
    window.history.go(-1)
  }

}
