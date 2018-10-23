import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  ladyLogo:string;
  gentLogo:string;

  contacts:Contact[];

  constructor( private contactService:ContactService) {
    this.ladyLogo="/assets/images/female.png";
    this.gentLogo="/assets/images/male.png";
   }

  ngOnInit() {
    this.contactService.getAllContacts().subscribe(
      (data)=>this.contacts=data
    );
  }

}
