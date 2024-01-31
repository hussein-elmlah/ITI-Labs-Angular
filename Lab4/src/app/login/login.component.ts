import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    if (form.status === "INVALID") {
      return;
    }
    this.router.navigate(['/']);
    window.alert(`User [${form.form.value.email}] Successfully Logined`)
  }

}
