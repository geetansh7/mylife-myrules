import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { GameDataService } from '../game-data.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
  slides = [{
  	image: "https://www.newskarnataka.com/storage/photos/shares/2018DEC/carrom%20main.jpg"
  },
  {
  	image: "https://media.gettyimages.com/photos/cricket-batsman-hitting-ball-during-cricket-match-in-stadium-picture-id518022060?s=612x612"
  },
 // {
 // 	image: "https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01.png"
 // }
 ];


  constructor(private gameDataService: GameDataService) { }

  ngOnInit() {
  }

  fetchRules(){
    this.gameDataService.getAllRules().subscribe(rules => {
      console.log(rules); 
      debugger;
    });
  }

}
