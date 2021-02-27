import React, { Component } from 'react'

import {nanoid} from 'nanoid'
import Header from './components/Header'
import Footer from './components/Footer';
import List from './components/List';
import './App.css';

export default class App extends Component {
  // 狀態在哪裡，操作狀態的方法就在哪裡

  // 初始化狀態
  state = {
    todos:[
      {id:nanoid(),name:'吃飯',done:true},
      {id:nanoid(),name:'睡覺',done:true},
      {id:nanoid(),name:'打代碼',done:false},
      {id:nanoid(),name:'逛街',done:false},
    ]
  }

  // addTodo用於添加一個todo，接收的參數是todo對象
  addTodo = (todoObj)=>{
    // 獲取原todos
    const {todos} = this.state;

    // 追加一個todo
    const newTodos = [todoObj,...todos];

    // 更新狀態
    this.setState({todos:newTodos});
  }

  // updateTodo用於更新一個todo對象
  updateTodo = (id,done)=>{
    // 獲取狀態中的todos
    const {todos} = this.state;

    // 匹配處理數據
    const newTodos = todos.map((todoObj)=>{
      // 判斷id是自己的話，則更新done的值
      if(todoObj.id === id) return{...todoObj,done}
      else return todoObj
    })

    this.setState({todos:newTodos})
  }

  // deleteTodo用於刪除一個todo對象
  deleteTodo = (id)=>{
    const {todos} = this.state;

    // 獲取指定id的todo對象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })

    // 更新狀態
    this.setState({todos:newTodos});
  }

  // checkAllTodo用於全選
  checkAllTodo = (done)=>{
    // 獲取原來的todos
    const {todos} = this.state;

    // 加工數據
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })

    // 更新狀態
    this.setState({todos:newTodos});
  }

  // clearAll用於清除所有已完成的
  clearAllDone = ()=>{
    // 獲取原來的todos
    const {todos}  = this.state;

    // 過濾數據
    const newTodos = todos.filter((todoObj)=>{
        return !todoObj.done;
    });

    // 更新狀態
    this.setState({todos:newTodos});
  }

  render() {

    const {todos} = this.state

    return (
      <div className="App" >
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    );
  }
}

//export default App;
