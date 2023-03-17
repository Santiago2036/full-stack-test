import { Component, HostBinding, OnInit } from '@angular/core';
import { GetPersonsService } from 'src/app/services/get-persons.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  persons:any = [];
  personsKey:any = [];

  constructor( private personService: GetPersonsService){}

  ngOnInit(): void {
    this.getPersons()
  }

  getPersons()
  {
    return this.personService.getListPersons().subscribe(
      res => {
        this.persons = res,
        this.persons = this.persons.items,
        this.personsKey = Object.keys(this.persons[0])
      },
      err => console.error(err)
    )
  }
}
