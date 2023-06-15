import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    date_of_birth: new FormControl(''),
    note: new FormControl(''),
  });
  constructor(private _contactService: ContactService) {}
  handleSubmit() {
    this._contactService.post(this.contactForm.value).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          confirmButtonColor: '#bdbdbd',
        });
        this.contactForm.reset();
        console.log(res);
        this.contactForm.value.name = '';
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message,
          confirmButtonColor: 'red',
        });
        console.log(err.error.errors);
      },
    });
  }
}
