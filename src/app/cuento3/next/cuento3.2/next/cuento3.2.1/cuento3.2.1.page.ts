import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuento3.2.1',
  templateUrl: './cuento3.2.1.page.html',
  styleUrls: ['./cuento3.2.1.page.scss'],
})
export class Cuento321Page implements OnInit {

  constructor(public router: Router) { }

  back(){
    this.router.navigate(["/cuento3.2"])
  }

  back_main(){
    this.router.navigate(["/folder/Inicio"])
  }

  ngOnInit() {
  }

}
