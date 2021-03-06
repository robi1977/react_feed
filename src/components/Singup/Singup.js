import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

class Singup extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            username: '',
            password: '',
            email: '',
            name: '',
            redirectToReferrer: false
        };
        this.singup = this.singup.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    singup(){
        if(this.state.username && this.state.password && this.state.email && this.state.name){
            PostData('singup', this.state).then((result)=>{
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }else{
                    alert(result.error);
                }
            });
        }
    }
    
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    render(){
        if(this.state.redirectToReferrer || sessionStorage.getItem('userData')){
            return (<Redirect to={'/home'} />);
        }
        return(
            <div className="row" id="sBody">
                <div className="medium-5 columns left">
                    <h4>Singup</h4>
                    <input type="text" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email} />
                    <input type="text" name="name" placeholder="Name" onChange={this.onChange} value={this.state.name}/>
                    <input type="text" name="username" placeholder="Username" onChange={this.onChange} value={this.state.username}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password}/>
                    <input type="submit" className="button" value="Sing UP" onClick={this.singup} />
                    <a href="/login">Login</a>
                </div>
            </div>
        );
    }
}

export default Singup;