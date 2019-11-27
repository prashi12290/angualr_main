import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   emps:any;
  constructor(private service:DataService) 
  { }

  ngOnInit() {

    let observableResult = this.service.select();
    
    observableResult.subscribe((result)=>{
      
      console.log(result);
      this.emps=result;
      //[
        //{"no":1,"name":"abc","age":25},
        //{"no":2,"name":"abc","age":25},
        //{"no":3,"name":"abc","age":25}
      //];
  
      
    });

     }

}
