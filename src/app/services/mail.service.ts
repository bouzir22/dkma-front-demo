import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(body) {
    this.http
      .post('http://localhost:8080/mail', body)
      .subscribe((data) => console.log(data));
    console.log('sent');
  }
}
