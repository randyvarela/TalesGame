import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento1.2',
  templateUrl: './cuento1.2.page.html',
  styleUrls: ['./cuento1.2.page.scss'],
})
export class Cuento12Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento1"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
