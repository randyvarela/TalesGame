import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento3.1',
  templateUrl: './cuento3.1.page.html',
  styleUrls: ['./cuento3.1.page.scss'],
})
export class Cuento31Page implements OnInit {

  constructor(public router: Router) { }

  op1c1(){
    this.router.navigate(["/cuento3.1.1"])
  }
  op1c2(){
    this.router.navigate(["/cuento3.1.2"])
  }
  op1c3(){
    this.router.navigate(["/cuento3.1.3"])
  }
  
  back_main(){
    this.router.navigate(["/cuento3"])
  }

  ngOnInit() {
  }

}
