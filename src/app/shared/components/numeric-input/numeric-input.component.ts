import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styles: [],
})
export class NumericInputComponent implements OnInit {
  @Input() value: number = 1;
  @Input() max: number = 99;
  @Output() valueEvent = new EventEmitter<number>();
  min: number = 1;

  constructor() {}

  ngOnInit(): void {}

  Up() {
    if (this.value < this.max) {
      this.value++;
      this.valueEvent.emit(this.value);
    }
  }

  Down() {
    if (this.value > 1) {
      this.value--;
      this.valueEvent.emit(this.value);
    }
  }
}
