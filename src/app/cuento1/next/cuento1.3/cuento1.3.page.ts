import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento1.3',
  templateUrl: './cuento1.3.page.html',
  styleUrls: ['./cuento1.3.page.scss'],
})
export class Cuento13Page implements OnInit {

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
