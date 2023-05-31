import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento6.3',
  templateUrl: './cuento6.3.page.html',
  styleUrls: ['./cuento6.3.page.scss'],
})
export class Cuento63Page implements OnInit {

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
