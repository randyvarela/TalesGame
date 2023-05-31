import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento2',
  templateUrl: './cuento2.page.html',
  styleUrls: ['./cuento2.page.scss'],
})
export class Cuento2Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento2.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento2.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento2.3"])
  }

  ngOnInit() {
  }

}
