import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  private result = null;
  constructor(private Http:HttpClient) { }

  ngOnInit() {
    
    
  }
  handleSumit(cityValue){
    this.Http.get( `https://api.openweathermap.org/data/2.5/weather?q=${cityValue.value},uk&APPID=bf8fe02fb5288ea367500fa2eab2fd09`).
    subscribe(
      result=>{
        this.result=result;
      },

      error=>{
        console.log("ERROR");
        
      }
    )
  }

}
