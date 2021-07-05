import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  form !: FormGroup;

  formConfig() : void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.formConfig()
  }

  createUser(form: FormGroup) : void {
    this.userService.createUser(this.form.value).subscribe(res=> {
      console.log(this.form);
    });
  }

}
