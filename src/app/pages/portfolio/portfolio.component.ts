import { Component } from '@angular/core';

interface MyPortfolio {
  title: string;
  description: string;
  link: string;
  pic: string;
  tech: string;
}

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  
  worksCol1: MyPortfolio[]=[
    { title:'Quien es Quien' , 
      description:'', 
      link:'https://solracort.github.io/', 
      pic:'../assets/javascript-Screenshot.png',
      tech:'Javascript' },
    { title:'Pokemon Battle Squad' , 
      description:'', 
      pic:'../assets/angular-Screenshot.png', 
      link:'https://pokebattlesquad.netlify.app/',  
      tech:'Angular, Typescript' },
    { title:'Maps Service' , 
      description:'', 
      pic:'../assets/', 
      link:'', 
      tech:'Angular, Typescript' },
  ]

  worksCol2: MyPortfolio[]=[
    { title:'Pokemon with Web Components' , 
      description:'', 
      pic:'../assets/lit-screenshot.png', 
      link:'https://carlos-final-project.web.app/pokemon', 
      tech:'Lit Element, Javascript' },
    { title:'Encuentra el pokemon' , 
      description:'', 
      pic:'../assets/vue-Screenshot.png',
      link:'https://guessthehiddenpokemon.netlify.app/', 
      tech:'Vue, JavaScript' },
    { title:'Reservame' , 
      description:'', 
      pic:'../assets/react-Screenshot.png', 
      link:'https://sample-service-name-j2zz.onrender.com/', 
      tech:'React , Flask, Javascript' },
  ]
}
