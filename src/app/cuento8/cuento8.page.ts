import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento8',
  templateUrl: './cuento8.page.html',
  styleUrls: ['./cuento8.page.scss'],
})
export class Cuento8Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento8.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento8.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento8.3"])
  }

  ngOnInit() {
  }

}
