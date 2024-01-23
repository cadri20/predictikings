import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnInit, OnDestroy{
  @Input() option1: string = ""
  @Input() option2: string = ""
  @Input() selected: string = ""
  @Output() selectedChange = new EventEmitter<string>()

  ngOnInit() {
    if(this.selected === ""){
      this.selected = this.option1
    }
    this.selectedChange.emit(this.selected)
  }

  ngOnDestroy() {
    this.selectedChange.emit("")
  }

  selectOption(option: string){
    this.selected = option
    this.selectedChange.emit(this.selected)
  }
}
