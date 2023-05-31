import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento2.1',
  templateUrl: './cuento2.1.page.html',
  styleUrls: ['./cuento2.1.page.scss'],
})
export class Cuento21Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento2"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
