import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper:HttpClient) { }

  select(){
    return this.helper.get("http://13.127.80.232/emps");
  }

  selectByNo(No){
    return this.helper.get("http://13.127.80.232/emps/" + No);
  }
 
  Update(empObj){
    return this.helper.put("http://13.127.80.232/emps/"+empObj.No,empObj);
  }

  Delete(No){
    return this.helper.delete("http://13.127.80.232/emps/" + No);
  }

  Insert(empObj){
    return this.helper.post("http://13.127.80.232/emps",empObj);
  }
  
}
