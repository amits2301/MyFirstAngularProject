import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

 getNumber : any;
 printValue : any;
 opSymbol: any;
 opNumber: any;
 output: any;
 symbol: any;
 

  constructor() {

    this.opNumber= this.getNumber;

   }

  ngOnInit(): void {
  }
  onAddition(){
    this.symbol= '+' ;
   this.opNumber= this.getNumber;
   this.printValue= this.opNumber + '+';
   console.warn(this.opNumber)
   
   this.getNumber='';
   console.warn(this.getNumber)

 }
 onSubtraction(){

  this.symbol= '-' ;
  this.opNumber= this.getNumber;
  this.printValue= this.opNumber + '-';
  console.warn(this.opNumber)
  
  this.getNumber='';
  console.warn(this.getNumber)

 }
 onMultiplication(){

  this.symbol= '*' ;
  this.opNumber= this.getNumber;
  this.printValue= this.opNumber + '*';
  console.warn(this.opNumber)
  
  this.getNumber='';
  console.warn(this.getNumber)

 }
 onDivisionn(){

  this.symbol= '/' ;
  this.opNumber= this.getNumber;
  this.printValue= this.opNumber + '/';
  console.warn(this.opNumber)
  
  this.getNumber='';
  console.warn(this.getNumber)

 }
 onEquals(){
 switch(this.symbol){

  case '+' :
      this.output= this.getNumber + this.opNumber
      this.printValue= this.output
      
      this.getNumber='';
      return this.getNumber
    break;
    case '-' :
      this.output= this.opNumber-this.getNumber
      this.printValue= this.output
      
      this.getNumber='';
      return this.getNumber

    break;
    case '*' :
      this.output= this.opNumber*this.getNumber
      this.printValue= this.output
      
      this.getNumber='';
      return this.getNumber

    break;
    case '/' :
      this.output= this.opNumber/this.getNumber
      this.printValue= this.output
      
      this.getNumber='';
      return this.getNumber

    break;
    


   }

 
 }

 


}
