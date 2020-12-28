import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  show = false;
  myName ="Amit from Success Alert"

  ngOnInit(): void {
  }
  // data= [ ' Amit', 'nikhil', 'Tulsi']
    data= [
      {
        name : 'Anila ',
        age : '29',
        email : 'amitshahare2301@gmail.com'
      },
      {
        name : 'Rakesh ',
        age : '23',
        email : 'amitshahare2301@gmail.com'
      },
      {
        name : 'Ritesh ',
        age : '89',
        email :'amitshahare2301@gmail.com'
      },
      {
        name : 'Suraj ',
        age : '65',
        email :'amitshahare2301@gmail.com'
      }

    ]

    showTableData(name){
      if(this.show===true){
        this.show= false;
      }
      else{
        this.show= true;
      }
      alert(name)


    }

   

}
