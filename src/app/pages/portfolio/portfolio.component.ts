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
      description:'This project was made in my beginings in Christmas Holidays for my children. It´s full made with Javascript no other frameworks are used.', 
      link:'https://solracort.github.io/', 
      pic:'../assets/javascript-Screenshot.png',
      tech:'Javascript' },
    { title:'Pokemon Battle Squad' , 
      description:'A real battle squad where you can choose the team members to fight in a battle using their own skills. Full made in Angular using Pokemon API, no Backend needed.', 
      pic:'../assets/angular-Screenshot.png', 
      link:'https://pokebattlesquad.netlify.app/',  
      tech:'Angular, Typescript' },
    { title:'Maps Service' , 
      description:'This is a full app with several examples to watch the power of the API MapBox. It´s not deployed bacause of the pricing plans but you can see the full code project following the link.', 
      pic:'../assets/maps.png', 
      link:'https://github.com/Solracort/mapsApp', 
      tech:'Angular, Typescript' },
  ]

  worksCol2: MyPortfolio[]=[
    { title:'Pokemon with Web Components' , 
      description:'This a project where I consume the API Data building WebComponents using Lit Element.', 
      pic:'../assets/lit-screenshot.png', 
      link:'https://carlos-final-project.web.app/pokemon', 
      tech:'Lit Element, Javascript' },
    { title:'Encuentra el pokemon' , 
      description:'In this project I use the pokemon API to prepare other game. You must guess the hidden pokemon. I enjoyed the Vue framework when I was building this app.', 
      pic:'../assets/vue-Screenshot.png',
      link:'https://guessthehiddenpokemon.netlify.app/', 
      tech:'Vue, JavaScript' },
    { title:'Reservame' , 
      description:'This was one of my first projects. Some mates and I prepared an app to book a sport class, building a database with Flask and using React for the frontend development.', 
      pic:'../assets/react-Screenshot.png', 
      link:'https://sample-service-name-j2zz.onrender.com/', 
      tech:'React , Flask, Javascript' },
  ]
}
