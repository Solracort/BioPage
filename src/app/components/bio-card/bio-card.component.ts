import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-card',
  templateUrl: './bio-card.component.html',
  styleUrls: ['./bio-card.component.css']
})
export class BioCardComponent implements OnInit{
  ngOnInit(): void {
    this.flowItem(800, '.avatar-pic-container')
    this.flowItem(1500,'.my-text')
  }

  flowItem(delaySec:number, classItem:string){
    setTimeout( ()=>{
      const bioPic = document.querySelector<HTMLElement>(classItem)
      if (bioPic){
        bioPic.style.opacity='1';
      }
    },delaySec)
  }
}
