import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento8.2',
  templateUrl: './cuento8.2.page.html',
  styleUrls: ['./cuento8.2.page.scss'],
})
export class Cuento82Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento8"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
