import React, { Component } from 'react';
import "./app.css";

class App extends Component {
    constructor(){
        super();
        this.state = {
            msg:"我是app的msg"
        };
    }
  render() {
    return (
      <div className="app">
          我是app组件
          <h3>这是app的内容</h3>
          <Parent msg={this.state.msg}></Parent>
      </div>
    );
  }
};

class Parent extends  Component{
    constructor(){
        super();
        this.state = {
            msg:"我是空的",
            test:"我也是空的"
        };
        this.change = this.change.bind(this);
        this.getStrong = this.getStrong.bind(this);
    }
    render(){
        return (
            <div className="parent">
                我是parent组件
                <h3>这里是parent的内容</h3>
                <p>我是msg:{this.state.msg}</p>
                <p>我是test:<span dangerouslySetInnerHTML={{__html:this.state.test}}></span></p>
                <button onClick={this.change}>点我改变msg</button>
                <Child getStrong={this.getStrong}></Child>
            </div>
        )
    }
    change(){
        this.setState({
            msg:this.props.msg
        })
    }
    getStrong(data){
        this.setState({
            test:data
        });
    }
};

class Child extends  Component{
    constructor(){
        super();
        this.state = {
            strong:"<strong>强壮</strong>"
        };
    }
    render(){
        return (
            <div className="child">
                我是child组件
                <button onClick={this.props.getStrong.bind(null,this.state.strong)}>让你变壮</button>
            </div>
        )
    }
};

export default App;
