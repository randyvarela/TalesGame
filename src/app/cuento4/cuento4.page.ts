import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento4',
  templateUrl: './cuento4.page.html',
  styleUrls: ['./cuento4.page.scss'],
})
export class Cuento4Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento4.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento4.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento4.3"])
  }

  ngOnInit() {
  }

}
