import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploaderService {
  constructor(private http: HttpClient) {}

  uploadF1(f1) {
    console.log(f1);

    //this.http.post('', f1);
  }
  uploadF2(f2) {
    this.http.post('', f2);
  }
  uploadF3(f3) {
    this.http.post('', f3);
  }
}
