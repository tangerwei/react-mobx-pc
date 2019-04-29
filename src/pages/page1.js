import * as React from 'react';
import { inject, observer } from 'mobx-react';

@inject("user")
@observer
class Page1 extends React.Component{
    handleAdd = () => {
        this.props.user.age = this.props.user.age + 1;
    }
    render(){
        return (
            <div>
                <div>name: {this.props.user.name}</div>
                <div>age: {this.props.user.age}</div>
                <div onClick={this.handleAdd}>加号</div>
            </div>
        )
    }
}

export default Page1