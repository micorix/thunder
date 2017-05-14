import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class LibrusDataService {
private loggedIn;

  constructor() {
    this.loggedIn = true;
  }


  isLoggedIn(){
    return false;
  }

getAllGrades(){
  return 'elo';
}
}
  //      electron.ipcRenderer.send('getGrades');
  //      return electron.ipcRenderer.on('gradesResponse', function(event, arg){
  //        console.log(event);
  //            // console.log(arg);
  //          //  let grades = null;
  //        return this.zone.run(function(){
  //              return ['elo'];
  //             });
  //  //
  //  // this.grades = grades;
  //        console.log(this.grades);
  //     }
  // }
