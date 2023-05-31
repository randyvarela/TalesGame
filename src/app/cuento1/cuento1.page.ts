import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento1',
  templateUrl: './cuento1.page.html',
  styleUrls: ['./cuento1.page.scss'],
})
export class Cuento1Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento1.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento1.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento1.3"])
  }

  ngOnInit() {
  }

}
