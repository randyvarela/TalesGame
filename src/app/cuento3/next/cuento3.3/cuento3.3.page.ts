import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento3.3',
  templateUrl: './cuento3.3.page.html',
  styleUrls: ['./cuento3.3.page.scss'],
})
export class Cuento33Page implements OnInit {

  constructor(public router: Router) { }

  op1c1(){
    this.router.navigate(["/cuento3.3.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento3.3.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento3.3.3"])
  }

  back_main(){
    this.router.navigate(["/cuento3"])
  }

  ngOnInit() {
  }

}
