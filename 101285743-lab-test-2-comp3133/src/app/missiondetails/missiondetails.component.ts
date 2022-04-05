import { Component, OnInit , Input } from '@angular/core';
import { mission } from '../models/missionmodels';
import { HttpService } from '../network/spacexapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  mission!: mission;
  id: number = 1;

  constructor(private route: ActivatedRoute, private httpService: HttpService) { 
    this.route.params.subscribe(params => {
      this.id = parseInt(params["id"]);
    });
  }

  ngOnInit(): void {
    this.httpService.sendGetRequestByID(this.id).subscribe((data: any) => {
      console.log(data);
      this.mission = data;
    });
  }

}
