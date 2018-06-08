import React,{Component} from "react";
import { connect } from "react-redux";


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            btn: false,
        };
        this.change = this.change.bind(this);
    }
    render(){
        let {
            num, add, reduce
        } = this.props;

        return (
            <div>
                <div onClick={this.change}>
                    {this.state.btn?"取消":"点赞"}👍
                </div>
                <button onClick={ add }>+</button>
                <span style={{margin: "10px"}}>{ num } </span>
                <button onClick={ reduce }>-</button>
            </div>
        );
    }
    change() {
        this.setState({
            btn: !this.state.btn
        });
    }
    componentDidMount(){
        // console.log(this.props);
    }
}

const mapStateToProps = (state)=>{
    return {
        num: state.num
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
        add: ()=>{
            dispatch({type: "ADD"});
        },
        reduce: ()=>{
            dispatch({type: "REDUCE"});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

