import { Component, OnInit } from '@angular/core';
import { ContactList } from './contact-list';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  contacts = [
    new ContactList(1, 'Dad', '/assets/images/avatar-pops.png', '303-777-6894'),
    new ContactList(2, 'Mom', '/assets/images/avatar-mom.png', '303-912-6658'),
    new ContactList(3, 'Poppy', '/assets/images/avatar-dad.png', '906-844-1332'),
    new ContactList(4, '911', '/assets/images/avatar-911.png', '911')
  ];
  // contactList = this.contacts[0];

  constructor() { }

  ngOnInit() {
  }

}
