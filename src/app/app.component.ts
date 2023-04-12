import { Component } from '@angular/core';
import {Product} from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg=10;
  name = 'jimmy';
  age = 29;
  img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbpO46xzEaYc_qVh7_fDjzY_LglV0G0mdAZqn2j-9&s';
  btnDisabled = false;
  title='';
  register={
    name:'',
    email:'',
    password:'',
  }
  person ={
    name: 'julian',
    age: 36,
    avatar:'https://cdn-icons-png.flaticon.com/512/147/147144.png'
  }
  names:string[] =['jimmy','lorena','julian','mariela'];
  newName='';

  box={
    width:100,
    height:100,
    background:'red'
  }

  products:Product[] =[
    {
      name:'el mejor juguete',
      price: 565,
      image:'https://i.ytimg.com/vi/YNEqsiiOQ20/maxresdefault.jpg',
      category: "Pokemons",
    },
    {
      name:'Bicicleta casi nueva',
      price: 356,
      image:'https://i.ytimg.com/vi/YNEqsiiOQ20/maxresdefault.jpg'
    },
    {
      name:'Coleccion de albunes',
      price: 34,
      image:'https://www.futbolred.com/files/article_multimedia/uploads/2018/03/26/5ab89e375c1a0.jpeg'
    },
    {
      name:'mis libros',
      price: 23,
      image:'https://hotmart.s3.amazonaws.com/product_contents/dd226ada-8df7-439e-8d61-d3f688b9ab49/libros2_2118499843.jpg'
    },
    {
      name:'mis libros',
      price: 23,
      image:'https://cnnespanol.cnn.com/wp-content/uploads/2021/06/tolkien.png'
    },
    {
      name:'mis libros',
      price: 23,
      image:'https://cnnespanol.cnn.com/wp-content/uploads/2021/06/tolkien.png'
    },
    {
      name:'mis libros',
      price: 23,
      image:'https://cnnespanol.cnn.com/wp-content/uploads/2021/06/tolkien.png'
    },
    {
      name:'mis libros',
      price: 23,
      image:'https://cnnespanol.cnn.com/wp-content/uploads/2021/06/tolkien.png'
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
