import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private authService: AuthenticationService) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    // this.authService.authenticate(this.username, this.password).subscribe(data => {
    //   alert("Response : " + JSON.stringify(data));
    var data = true;

      if (data == true)
        this.router.navigate(["user"]);
      else 
        alert("Invalid credentials");
   // });
  }
}


