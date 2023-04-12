import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  register={
    name:'',
    email:'',
    password:'',
  }
  onRegister(){
    const registro = this.register
    if (registro.name=="" ){
      alert("llene el formulario");
    }
    else
      alert("Bienvenido "+ registro.name);
      console.log(this.register);
  }
}
