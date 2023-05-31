import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento3',
  templateUrl: './cuento3.page.html',
  styleUrls: ['./cuento3.page.scss'],
})
export class Cuento3Page implements OnInit {

  constructor(public router: Router) { }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  op1c1(){
    this.router.navigate(["/cuento3.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento3.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento3.3"])
  }

  ngOnInit() {
  }

}
