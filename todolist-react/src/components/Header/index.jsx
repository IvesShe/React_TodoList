import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    // 對接收的props進行: 類型、必要性的限制
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    // 鍵盤事件的回調
    handleKeyUp = (event)=>{
        const {keyCode,target} = event;

        // 判斷是否為Enter按鍵
        if(keyCode !== 13) return;

        // 添加的todo名字不能為空
        if(target.value.trim() === ''){
            alert('輸入不能為空');
        }

        // 打印所按的值、按鍵的值
        console.log(target.value, keyCode);

        // 準備好一個todo對象
        const todoObj = {id:nanoid(),name:target.value,done:false};
        console.log(todoObj);

        // 將todoObj傳遞給App
        this.props.addTodo(todoObj);
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
