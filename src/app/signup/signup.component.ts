import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  positions: object;
  token: string;

  constructor( private fb: FormBuilder,
    private userService: UserService) { }
    registration = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(60)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
       ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('[\+]{0,1}380([0-9]{9})$')
      ]],
      position: [ '', [
        Validators.required
      ]],
      image: [ '' , [
        Validators.required
      ]]    });
  ngOnInit() {
    this.getPos();
    this.getToken();
    this.registration.valueChanges.subscribe(console.log);
    console.log(this.registration);
  }
  public getPos() {
    this.userService.getPositions()
    .subscribe((data: any) => {
      this.positions = data.positions;
      console.log(this.positions[0].id);
    });
  }
  public getToken() {
    this.userService.getToken()
    .subscribe((data: any) => {
      this.token = data.token;
      console.log(this.token);
    });
  }
  public onFileSelected(event) {
    console.log(event);
    console.log(event.target.files[0]);
    this.registration.controls['image'].setValue(event.target.files[0]);
  }
  public postUser() {
    this.userService.postUser(this.token, this.registration.value)
    .subscribe(responce =>
      console.log(responce));
  }


}
