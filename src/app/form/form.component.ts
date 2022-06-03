import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  client: Contact | undefined;


  constructor() { }

  ngOnInit(): void {

    this.client = new Contact();

  }

  onSubmit() {
    console.log(this.client);
    this.client = new Contact();
  }
}
