import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento5.1',
  templateUrl: './cuento5.1.page.html',
  styleUrls: ['./cuento5.1.page.scss'],
})
export class Cuento51Page implements OnInit {

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
