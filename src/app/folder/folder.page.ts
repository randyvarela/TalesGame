import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(public router: Router) {}

  imagenClick(){
    this.router.navigate(["/tale"])
  }
  imagenClick1(){
    this.router.navigate(["/cuento1"])
  }
  imagenClick2(){
    this.router.navigate(["/cuento2"])
  }
  imagenClick3(){
    this.router.navigate(["/cuento3"])
  }
  imagenClick4(){
    this.router.navigate(["/cuento4"])
  }
  imagenClick5(){
    this.router.navigate(["/cuento5"])
  }
  imagenClick6(){
    this.router.navigate(["/cuento6"])
  }
  imagenClick7(){
    this.router.navigate(["/cuento7"])
  }
  imagenClick8(){
    this.router.navigate(["/cuento8"])
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
