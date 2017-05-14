import { Component, OnInit, NgZone } from '@angular/core';
import { LibrusDataService } from '../librus-data.service';
declare var electron: any;

@Component({
  selector: 'grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
public grades;
  constructor(private LibrusData: LibrusDataService) {

  }

  ngOnInit() {

  }

  getGrades(){
  this.grades = this.LibrusData.getAllGrades();

  }

}
