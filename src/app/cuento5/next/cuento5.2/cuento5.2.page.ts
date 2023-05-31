import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento5.2',
  templateUrl: './cuento5.2.page.html',
  styleUrls: ['./cuento5.2.page.scss'],
})
export class Cuento52Page implements OnInit {

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
