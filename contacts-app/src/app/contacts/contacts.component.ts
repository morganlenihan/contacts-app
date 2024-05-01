import { Component } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent  {

  contact: Contact = {
    id: 1,
    name: 'Morgan'
  };
}
