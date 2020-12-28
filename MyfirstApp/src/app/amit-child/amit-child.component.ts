import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-amit-child',
  templateUrl: './amit-child.component.html',
  styleUrls: ['./amit-child.component.css']
})
export class AmitChildComponent implements OnInit {

  @Input() dataFromParent : any;
  @Output() messageEvent = new EventEmitter<string>();
  //@Output() messageEvent :  EventEmitter<any>= new EventEmmiter()

  constructor() { }

  ngOnInit(): void {
    
    console.warn(this.dataFromParent)

   // this.messageEvent.emit("I am data from child")
  }

  SendDataToParent(){

    this.messageEvent.emit("I am data from child")

  }

}
