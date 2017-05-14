import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service'
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public nav:NavigationService, public location:Location) { }

  getLinkClass(element){
    element = ['/'+element];
    let route = this.location.path();
  if(element.indexOf(route) > -1){ return 'active'; }else{ return ''; }
  }
  isSidebarHidden(){
    let list = ["/login"],
        route = this.location.path();

    return (list.indexOf(route) > -1);
  }



}
