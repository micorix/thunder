import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
hidden = false;
active = 'home';
sideBarHidden = false;

getLinkClass(element){
  if(element == this.active){ return 'active'; }else{ return ''; }
}
isSidebarHidden(){
  return this.sideBarHidden;
}
hideSidebar(){
  this.sideBarHidden = true;
}
  constructor() { }

}
