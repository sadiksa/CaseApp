import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = new FormControl("")
  password = new FormControl("")
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {    
  }
  ngOnInit(): void {
    if (this.authService.isSignedIn()) {
      this.router.navigate(["/main"])
    }
  }

  signIn(){
    this.authService.signIn(this.email.value as string, this.password.value as string).subscribe(response => {
      if (response.status == 0) {
        this.router.navigate(["/main"])
      }
    })
  }
}
