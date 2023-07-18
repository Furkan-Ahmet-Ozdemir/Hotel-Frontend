import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string='';
  lastName: string='';
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
  }
}
