import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-servers',  
  //selector: '[app-servers]', using app-servers element as its attribute
  //  selector: '.app-servers', // using it like as class

  template: `<app-server></app-server>
             <h2> This is in severs ts inline </h2>
            <p>How to write html code in typescript using inline </p> 
            <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
