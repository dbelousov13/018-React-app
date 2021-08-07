import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './HTLoginForm.module.css'

class HTLoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loginValue:'',
             isLoginValid:false,
             passwValue:'',
             firstName:'',
             lastName:'',
             birthDay:'',
             newLogin:'',
             newPassw:'',
             confirmPassw:'',
             email:'',
             confirmEmail:'',

        };
    }
    
    handleLoginChange=({target:{value}})=>{
        this.setState({loginValue:value, 
        isLoginValid: /^\S+$/.test(value),
        });
    };
    handlePasswordChange=({target:{value}})=>{
        this.setState({passwValue:value})
    }

// handleChange=({target:{value, name}})=>{
//     this.setState({[name]:value});
// };

submitHandler=e=>{
    e.preventDefault()
};

    render() {
        const{loginValue, passwValue, isLoginValid}=this.state;
        //====v1=====
        // const loginClassName = classNames(styles.input, {
        //     [styles.valid]:isLoginValid,
        //     [styles.invalid]:!isLoginValid,}
        //     );
        //=====v2======
        const loginClassName = classNames(styles.input,{
            [isLoginValid ? styles.valid : styles.invalid]: loginValue,
                }
            );

        return (
            <container>
                <form className={styles.container} onSubmit={this.submitHandler}>
                    <label className={styles.inputLabel}>
                       Login
                        <input  
                        className={loginClassName}
                        type="text"
                        name="loginValue"
                        placeholder="login"
                        value={loginValue}
                        onChange={this.handleLoginChange}
                        />
                    </label>
                    <br/>
                    <label className={styles.inputLabel}>
                        Password
                        <input 
                        className={styles.input}
                        name="passwValue"
                        type="password" 
                        placeholder="password"
                        value={passwValue}
                        onChange={this.handlePasswordChange} />
                    </label>
                    <br/>
                    <button type='submit'>Login</button>
                </form>
                
            </container>
        )
    }
}

export default  HTLoginForm