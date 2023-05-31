import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento6.1',
  templateUrl: './cuento6.1.page.html',
  styleUrls: ['./cuento6.1.page.scss'],
})
export class Cuento61Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento6"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
