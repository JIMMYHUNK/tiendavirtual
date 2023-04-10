import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'jimmy';
  age = 29;
  img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbpO46xzEaYc_qVh7_fDjzY_LglV0G0mdAZqn2j-9&s';
  btnDisabled = true;
  person ={
    name: 'julian',
    age: 36,
    avatar:'https://cdn-icons-png.flaticon.com/512/147/147144.png'
  }
  names:string[] =['jimmy','lorena','julian','mariela'];
  newName='';

  products =[
    {
      name:'el mejor juguete',
      price: 565,
      image:'https://http2.mlstatic.com/D_NQ_NP_682185-MCO48284472031_112021-O.jpg'
    },
    {
      name:'Bicicleta casi nueva',
      price: 356,
      image:'data:image/jpeg;base64,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'
    },
    {
      name:'Coleccion de albunes',
      price: 34,
      image:'https://www.futbolred.com/files/article_multimedia/uploads/2018/03/26/5ab89e375c1a0.jpeg'
    },
    {
      name:'mis libros',
      price: 23,
      image:'https://cnnespanol.cnn.com/wp-content/uploads/2021/06/tolkien.png'
    },

  ]



  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age+=1;
  }

  onScroll(event: Event){
    const element =event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element =event.target as HTMLInputElement;
    this.person.name= element.value;

  }

  addName(){
    this.names.push(this.newName);
    this.newName='';
  }

  deleteName(index: number){
    this.names.splice(index,1);
  }

}
