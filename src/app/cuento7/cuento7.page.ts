import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento7',
  templateUrl: './cuento7.page.html',
  styleUrls: ['./cuento7.page.scss'],
})
export class Cuento7Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento7.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento7.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento7.3"])
  }

  ngOnInit() {
  }

}
