import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento7.2',
  templateUrl: './cuento7.2.page.html',
  styleUrls: ['./cuento7.2.page.scss'],
})
export class Cuento72Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento7"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
