import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetPersonsService {

  private URL = 'https://api.github.com/search/users?q=YOUR_NAME'

  constructor(private http:HttpClient) { }

  getListPersons()
  {
    return this.http.get(this.URL)
  }
}
