import { UsersService } from '../../users.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  //Funcion para enviar datos del hijo al padre, para pushear a la tabla
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private dialogRef: DialogRef<UserFormComponent>,
    private activatedRoute: ActivatedRoute
  ) {

  }

  get currentUser(): User {
    const user = this.userForm.value as User;
    return user;
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      "firstName": new FormControl(""),
      "lastName": new FormControl(""),
      "email": new FormControl(""),
      "role": new FormControl(""),
      "password": new FormControl(""),
    });
  }

  onSave(): void {
    this.dialogRef.close(this.userForm.value);
  }
  //Funcion para evitar que no se mande el formulario sin haber completado y cuando se envia, con reset, reseteamos los campos
  onSubmit(): void {
    if (this.userForm.invalid) return;

    if ( this.currentUser.id) {
      this.userService.updateUser( this.currentUser)
      .subscribe( user => {
        // TODO: mostrar snackbar
      });
      return;

    }
      this.userService.addUser( this.currentUser )
      .subscribe( hero => {
        //TODO: mostrar snackbar y navegar a /users/
      })
  }
}
