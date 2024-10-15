import { Injectable } from '@angular/core';
import { Task } from '../Task';
// import { TASKS } from '../mock-tasks';
import { Observable,of } from 'rxjs';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    // const tasks=of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task):Observable<Task>{
    const Url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(Url);
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }
}
