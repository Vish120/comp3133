import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../network/spacexapi.service';
import { mission } from '../models/missionmodels';



@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: mission[];

  constructor(private httpService: HttpService) { 
    this.missions = []
   }

  ngOnInit(): void {
    this.httpService.sendGetRequest()
      .subscribe((res: any) => {
        console.log(res);
        this.missions = res;
    }) 
  }

}
