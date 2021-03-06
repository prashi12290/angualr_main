import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper:HttpClient) { }

  select(){
    return this.helper.get("http://localhost:9898/emps");
  }

  selectByNo(No){
    return this.helper.get("http://localhost:9898/emps/" + No);
  }
 
  Update(empObj){
    return this.helper.put("http://localhost:9898/emps/"+empObj.No,empObj);
  }

  Delete(No){
    return this.helper.delete("http://localhost:9898/emps/" + No);
  }

  Insert(empObj){
    return this.helper.post("http://localhost:9898/emps",empObj);
  }
  
}
