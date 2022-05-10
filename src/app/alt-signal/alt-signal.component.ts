import { Component, EventEmitter, Input, Output } from '@angular/core';
 
@Component({
  selector: 'app-alt-signal',
  templateUrl: './alt-signal.component.html'
})
export class AltSignalComponent {
  @Output() altSig = new EventEmitter<string>();
  alert(x){
    alert("TEST");
  }
}