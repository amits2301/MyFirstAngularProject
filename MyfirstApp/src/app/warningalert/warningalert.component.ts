import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  templateUrl: './warningalert.component.html',
  styles: [`
  p {
    padding: 20px;
    border: 2px solid red;
    background-color: dodgerblue;
  }`]
})
export class WarningalertComponent implements OnInit {

  printValue : any
  name ="Amit shahare"
  disabledBox= true
  show=false
  show2= "No"
  show3="yellow"
  color= "golden"

  constructor() { }

  ngOnInit(): void {
  }
  getValueFromTextBox(val){
   
      console.warn(val)
      this.printValue=val

   }
   ebaleTaxtBox(){

     this.disabledBox=false

   }
}
