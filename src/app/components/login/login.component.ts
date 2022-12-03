import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario:['', Validators.required ],
      password:['', Validators.required ]
    })
  }

  ngOnInit(): void {
  }
  ingresar(){  
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'admin' && password == 'admin123') {
      //Redireccionamos al dashboard
      this.fakeLoading();
    } else {
      //Mensaje de error
      this.error();
      this.form.reset();
    }
  }
    error() {
      this._snackBar.open('Usuario o contraseña invalidos WEBAS!!! (admin/admin123)', '' , {
        duration: 4500,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
  }

  fakeLoading (){
    this.loading = true;
    setTimeout(() => {

      //Redireccionamos al dashboard
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
