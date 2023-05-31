import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento2.3',
  templateUrl: './cuento2.3.page.html',
  styleUrls: ['./cuento2.3.page.scss'],
})
export class Cuento23Page implements OnInit {

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
