import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dataUsers = [];
  dataVideos = [];
  dataPeople = [];
  dataDocuments = [];
  dataActivity = [];
  dataChannels = [];

  constructor(private scService: AppService){}

  ngOnInit(){
    this.scService.getDataUser().subscribe(
      dataUser => {
        this.dataUsers = dataUser;
      }
    );

    this.scService.getDataPx().subscribe(
      dataPx => {
        this.dataVideos = dataPx.slice(0,5);
        this.dataActivity = dataPx.slice(5,11);
        this.dataPeople = dataPx.slice(11,16);
        this.dataChannels = dataPx.slice(16,26);
        this.dataDocuments = dataPx.slice(16,21);
      }
    );
    
  }
}
