import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento1.1',
  templateUrl: './cuento1.1.page.html',
  styleUrls: ['./cuento1.1.page.scss'],
})
export class Cuento11Page implements OnInit {

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
