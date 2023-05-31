import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento5',
  templateUrl: './cuento5.page.html',
  styleUrls: ['./cuento5.page.scss'],
})
export class Cuento5Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento5.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento5.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento5.3"])
  }

  ngOnInit() {
  }

}
