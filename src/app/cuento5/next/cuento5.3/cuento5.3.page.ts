import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento5.3',
  templateUrl: './cuento5.3.page.html',
  styleUrls: ['./cuento5.3.page.scss'],
})
export class Cuento53Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento5"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
