import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  optionsArray = [
    {name:"Home" , link:""},
    {name:"CV" , link:"https://drive.google.com/file/d/1rIGjn7AkfjTzHH9Ab144qEfRjgy6Fm43/view?usp=drive_link"},
    {name:"Skills" , link:'languages'},
    {name:"Port Folio" ,  link:'portfolio'},
    {name:"Contact" , link:'contact'},
    {name: "About Me" , link:"about_me"},
  ]
}
