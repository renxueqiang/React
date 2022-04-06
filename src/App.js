
import React, { Component } from 'react';
import './style.css';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number:20,
            textString:"我是占位文字",
            num:1
        }
    }
    
    btnClick(){
        console.log("按钮点击了");
        this.setState({
           number : this.state.number+1
        })
    }
    inputClick(e){
    let textF = e.target
    this.setState({
        textString:textF.value
    })

    }

    handleClick(number,tar){
        console.log(tar.target);
        console.log(number);

        this.setState({
            num:number
        })
        
    }
    

    render() {
        // console.log('====================================');
        let doc = document.createElement('div',{name:'class_doc'},"123456");
        let react_doc = React.createElement('div')
        var index = 0;
        for (const obj in doc) {
            // console.log(obj);
            index++;
        }

        let index1 = 0;
        for (const obj in react_doc) {
            // console.log(obj);
            index1++;
        }

        // console.log(doc);
        // console.log("原生doc的属性数量:",index);
        // console.log("React 虚拟doc的属性数量:",index1);
        
        // console.log('====================================');
       
        let array = [10,20,30,40,50];
        return (
            <div className = 'color'>
                Hellow Word 1234
                <div style={{color:'red'}}>
                我是行内样式 我是原生doc的属性数量:{index}
                </div>
                <div style={{color:'red'}}>
                我是行内样式 我是React 虚拟doc的属性数量:{index1}
                </div>
                <div>
                <ul>
                {
                    array.map((v,key)=>{
                    return <li>{v}</li>
                    }) 
                }
                </ul>
                </div>
                <button onClick = {this.btnClick.bind(this)}>我是按钮</button>
                <p>{this.state.number}</p>
                <input type="text" value={this.state.textString} onChange={this.inputClick.bind(this)}/>
                <p>{this.state.textString}</p>
                
                <div className="tab_con">
                <div className="tab_btns">
                    <input type="button"  className={ this.state.num===1?"active":""} value="按钮1" onClick={this.handleClick.bind(this, 1)}/>
                    <input type="button"  className={ this.state.num===2?"active":""} value="按钮2" onClick={this.handleClick.bind(this, 2)}/>
                    <input type="button"  className={ this.state.num===3?"active":""} value="按钮3" onClick={this.handleClick.bind(this, 3)}/>
                </div>
                <div className="tab_cons">
                    <div className={this.state.num===1?"current":""} >按钮1对应的内容</div>
                    <div className={this.state.num===2?"current":""} >按钮2对应的内容</div>
                    <div className={this.state.num===3?"current":""}>按钮3对应的内容</div>
                </div>
            </div>




            </div>

           
            
        );
    }
}
