import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiUrl = '/src/app/img';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'apllication/json'
    })
  };

  constructor() { }

  public getLiveWithFlag(flag: ImageBitmap) {
    return this.apiUrl
  }

}
