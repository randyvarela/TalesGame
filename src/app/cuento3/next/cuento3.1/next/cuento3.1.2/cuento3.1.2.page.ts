import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento3.1.2',
  templateUrl: './cuento3.1.2.page.html',
  styleUrls: ['./cuento3.1.2.page.scss'],
})
export class Cuento312Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento3.1"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
