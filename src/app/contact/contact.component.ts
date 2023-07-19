import { Component } from '@angular/core';
import { ContactForm } from '../models/contactform.model';
import { ContacFormServiceService } from '../contac-form-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: ContactForm;

  constructor(
    private route: ActivatedRoute, 
     private router: Router, 
        private contactFormService: ContacFormServiceService) {
    this.contactForm = new ContactForm();
  }

  name: string='';
  surName: string='';
  email: string= '';
  phoneNumber: string='';
  message: string ='';


  submitForm() {
    // Form verilerini burada işleyebilirsiniz.
    // Örneğin, HTTP talebi göndermek için bir servisi kullanabilirsiniz.
    // this.http.post('backend-url', { firstName, lastName, email, phoneNumber, message })
    //   .subscribe(response => {
    //     console.log('İstek gönderildi!');
    //   });

    console.log(this.name)

    this.contactForm.name = this.name;
    this.contactForm.surName = this.surName;
    this.contactForm.email = this.email;
    this.contactForm.phoneNumber = this.phoneNumber;
    this.contactForm.message = this.message;
    

    this.contactFormService.save(this.contactForm);
    // this.userService.findAll();
    // console.log(this.phoneNumber);
    // this.userService.findRooms2();
    // console.log("karpuz");
    // console.log(this.rooms);
  }



}
