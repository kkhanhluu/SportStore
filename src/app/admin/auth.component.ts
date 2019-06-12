import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../model/auth.service";

@Component({
  selector: "auth-component",
  templateUrl: "auth.component.html"
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform authentication
      this.auth
        .authenticate(this.username, this.password)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          } else {
            this.errorMessage = "Authentication failed";
          }
        });
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
