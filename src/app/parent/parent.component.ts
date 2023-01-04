import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  userName: string = '';
  intial: string = 'chinnaru anusha';
  details: { name: string; age: number } = { name: 'anusha', age: 27 };
  @Output() addressEventEmit = new EventEmitter<string>();

  ngOnChanges() {
    console.log('ngonchanges called');
  }

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngonint called');
  }

  ngAfterViewInit() {
    console.log('ngafterview init called');
  }

  ngAfterViewChecked() {
    console.log('ngafterview checked called');
  }

  onClick() {
    this.details.name = 'anusha chinnaru';
    this.addressEventEmit.emit(this.intial);
  }
}
