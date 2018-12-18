import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TitleCasePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
// import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: any = [];
  savaData: any = [];
  todo="";
  color: string;
  buttonColor: boolean;
  mycolor: string;

  constructor(public navCtrl: NavController) {
    this.todos = JSON.parse(localStorage.getItem('todos'));
    if(this.todos == undefined) this.todos = [];
  }

  ngOnInit() {
    this.mycolor = "#ffffff";
  }

  add() {
    if (this.todo != '') {
      let newTodo: any = {task: this.todo, mark: false};
      this.todos.push(newTodo);
      this.saveTodos();
      console.log(this.todos);
      this.todo = "";
    }
  }

  delete(item) {
    var index = this.todos.indexOf(item, 0);
    if (index > -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }
  saveTodos(){
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.color = "red";
    console.log(this.color);
  }

  changeColor() {
    this.buttonColor = true;
    this.mycolor = '#add8e6';
    
  }
}
