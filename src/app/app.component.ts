import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, DoCheck } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sampleassdadad';
  namee = 'anusha';
  username = 'anusha chinnaru';
  componentDecidingVal: boolean = true;
  @ViewChild('parentRef') parentRef: TemplateRef<any>;
  @ViewChild(ParentComponent) parentcomponent: ParentComponent;

  // ngOnInit() {
  //   console.log(this.namee, 'this.namee');
  //   console.log(this.parentRef, 'this.viewchild');
  // }

  // adddressEventEmitted(eventData: string) {
  //   console.log(eventData, 'eventData');
  // }

  // ngAfterViewInit(): void {
  //   // console.log(this.parentRef, 'this.ViewChild');
  //   console.log(this.parentcomponent, 'this.parentcomponent');
  // }
  // ngDoCheck() {
  //   console.log(this.parentRef, 'this.ViewChild in ng do check');
  // }

  onClick() {
    // this.componentDecidingVal = !this.componentDecidingVal;
    this.username = 'anusha';
  }
}
