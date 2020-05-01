import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get('http://localhost:8080/students'); // делает запрос по адресу и получает
                                                                // массив из объектов в виде JSON
  }
}
