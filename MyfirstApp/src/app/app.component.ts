import { Component } from '@angular/core';
import {UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  h1{
    color : dodgerblue;
  }`]
})
export class AppComponent {

  data=[]
  show2= false;
  eventPrint
  // Issbelow wale case me single object tha
  //dataToChild={
   //  message : "This data is Sent from Father",
   //  name: 'Amit Shahare',
   //  age: 25,
    // emailId: 'amitshahare@test.com'

  //  }
  dataToChild=[{
            message : "This data is Sent from Father",
            name: 'Amit Shahare',
            age: 25,
            emailId: 'amitshahare@test.com'

        },
        {
          message : "This data is Sent from Father",
          name: 'Devesh mehta',
          age: 26,
          emailId: 'Deveshe@test.com'

      },
      {
        message : "This data is Sent from Father",
        name: 'Nikhil',
        age: 25,
        emailId: 'nikjhil@test.com'

       }
      
      
      ]
          

  constructor(private user : UsersService)
   {
     
    //this.user.getData().subscribe((data:[])=>{
      //console.warn(data);
      //this.data=data;
    //})
    
   }
   getdataFromUrl(name){

    if(this.show2===true){

      this.show2= false;
    }
    else{

      this.show2= true;
    }

    alert(name)


     this.user.getData().subscribe((data:[])=>{
        console.warn(data);
        this.data=data;
      })
      // Above one is very importanat


    }
    clickEventTry(evt)
     {
      
      //alert(evt)
      console.warn(evt)

     }
     clickEventTry2(evt)
     {
      
      alert(evt)
      console.warn(evt)

     }
     
     keyDownEvent(evt){

      console.warn(evt)
      this.eventPrint= evt

     }
     handleDataFromChild(data){

      console.warn(data)

     }

    
 
}
