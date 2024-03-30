import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @Input()
  public placeholder:string = '';

  @Output()
  public onValue = new EventEmitter<string>();


public emitKeyUp(txtInput:string):void{
    this.onValue.emit(txtInput);
    txtInput = "";
}




}
