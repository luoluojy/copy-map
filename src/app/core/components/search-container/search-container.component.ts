import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('#search-container').style.height=window.innerHeight.toString()+'px';
  }

}
