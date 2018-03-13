import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('section').style.height=window.innerHeight.toString()+'px';
    let elem =this.elementRef.nativeElement.querySelector('section').getElementsByTagName('*');
    this.elementRef.nativeElement.onclick=function(e){
      console.log(elem,e.target)
    }
  }

}
