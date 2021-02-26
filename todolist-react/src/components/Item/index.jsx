import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse:false};

    // 鼠標移入、移出的回調
    handleMouse = (flag) =>{
        return ()=>{
            console.log(flag);
            this.setState({mouse:flag});
        }
    }

    // 勾選、取消勾選某一個todo的回調
    handleCheck = (id)=>{
        return (event)=>{
            console.log(id,event.target.checked);
            this.props.updateTodo(id,event.target.checked);
        }
    }

    // 刪除一個todo的回調
    handleDelete = (id)=>{
        if(window.confirm('確定刪除嗎?')){
            this.props.deleteTodo(id);
        }
    }

    render() {
        const {id,name,done} = this.props;
        const {mouse} = this.state;

        return (
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{ display:mouse?'block':'none' }}>删除</button>
            </li>
        )
    }
}
