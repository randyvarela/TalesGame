import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento4.2',
  templateUrl: './cuento4.2.page.html',
  styleUrls: ['./cuento4.2.page.scss'],
})
export class Cuento42Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento4"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
