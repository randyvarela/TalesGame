import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento3.3.1',
  templateUrl: './cuento3.3.1.page.html',
  styleUrls: ['./cuento3.3.1.page.scss'],
})
export class Cuento331Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento3.3"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
