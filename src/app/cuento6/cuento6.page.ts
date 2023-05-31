import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento6',
  templateUrl: './cuento6.page.html',
  styleUrls: ['./cuento6.page.scss'],
})
export class Cuento6Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento6.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento6.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento6.3"])
  }

  ngOnInit() {
  }

}
