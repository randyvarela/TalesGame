import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento4.3',
  templateUrl: './cuento4.3.page.html',
  styleUrls: ['./cuento4.3.page.scss'],
})
export class Cuento43Page implements OnInit {

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
