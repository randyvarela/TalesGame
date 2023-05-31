import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento3.2',
  templateUrl: './cuento3.2.page.html',
  styleUrls: ['./cuento3.2.page.scss'],
})
export class Cuento32Page implements OnInit {

  constructor(public router: Router) { }

  op1c1(){
    this.router.navigate(["/cuento3.2.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento3.2.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento3.2.3"])
  }

  back_main(){
    this.router.navigate(["/cuento3"])
  }

  ngOnInit() {
  }

}