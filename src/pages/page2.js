import * as React from 'react';
import { inject, observer } from 'mobx-react';
import "./page2.css";

@inject("user")
@observer
class Page1 extends React.Component{
    handleAdd = () => {
        this.props.user.age = this.props.user.age + 1;
    }
    render(){
        return (
            <div className="page2">
                <div>name2: {this.props.user.name}</div>
                <div>age: {this.props.user.age}</div>
                <div onClick={this.handleAdd}>加号</div>
            </div>
        )
    }
}

export default Page1