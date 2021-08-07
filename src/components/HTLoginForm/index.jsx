import React, { Component } from 'react'

class HTLoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName:'',
            lastName:'',
            birthDay:'',
            userPhone:'',
            login:'',
            passw:'',
            confirmPassw:'',
            email:'',
            confirmEmail:'',
            isLoginValid:false,
            
        }
    }
    
    handleChange=({target:{value, name, }})=>{
        this.setState({[name]:value,});
    };

    handleLoginChange=({target:{value}})=>{
        this.setState({
            login:value,
            isLoginValid:/^\S+$/.test(value),
        });
    };

       

    submitHandler=e=>{
        e.preventDefault()
    };

    render() {
        const {firstName, lastName, isLoginValid, birthDay, userPhone, login, passw, confirmPassw, email, confirmEmail}=this.state;
        
        emailCheck {
            (this.email.value!=this.confirmEmail.value) 
        } 
        return (
            <container>
                <form onSubmit={this.submitHandler}>
                    <label>
                        First Name
                        <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={this.handleChange}
                        />
                    </label>
                    
                    <label>
                        Surname
                        <input
                        type="text"
                        name="lastName"
                        placeholder="Surname"
                        value={lastName}
                        onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Date of birth
                        <input
                        type="date"
                        name="birthDay"
                        value={birthDay}
                        onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Phone
                        <input 
                        type="tel" 
                        name="userPhone" 
                        value={userPhone}
                        placeholder="38 012 12345678"
                        onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Login
                        <input 
                        type="text"
                        name="login"
                        placeholder="login"
                        value={login}
                        onChange={this.handleLoginChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Password
                        <input
                        type="password"
                        name="passw"
                        value={passw}
                        onChange={this.handleChange}

                        />
                    </label>
                    <label>
                        confirm password
                        <input 
                        type="password" 
                        name="confirmPassw"
                        value={confirmPassw}
                        onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Email
                        <input type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    confirm email
                        <input type="email"
                        name="confirmEmail"
                        value={confirmEmail}
                        onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <button type="submit">Create account</button>




                </form>
            </container>
        )
    }
}

export default HTLoginForm