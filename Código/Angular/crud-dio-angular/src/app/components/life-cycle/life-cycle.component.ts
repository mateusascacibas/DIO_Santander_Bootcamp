import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, SimpleChanges, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, AfterViewInit {
  @Input() number = 10;
  
  constructor() {
    console.log("CHAMOU O CONSTRUTOR")
   }

   ngOnChanges(): void {
      console.log("CHAMOU O ON CHANGES")
  }
  ngOnInit(): void {
    console.log("CHAMOU O ON INIT")
  }
  ngDoCheck(): void {
    console.log("CHAMOU O ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("CHAMOU O ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("CHAMOU O ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("CHAMOU O  ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("CHAMOU O  ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("CHAMOU O ngOnDestroy")
  }


}
