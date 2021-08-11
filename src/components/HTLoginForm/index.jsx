import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './HTLoginForm.module.scss';


class HTLoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName:'',
            lastName:'',
            isNameValid:false,
            birthDay:'',
            userPhone:'',
            isUserPhoneValid: false,
            login:'',
            passw:'',
            isPasswValid: false,
            email:'',
            isLoginValid:false,
            
        };
    };
    
    handleNameChange=({target:{value, name}})=>{
        this.setState({[name]:value,
        isNameValid:/^[A-Z]{1,18}/.test(value),});
    };

    handleLoginChange=({target:{value}})=>{
        this.setState({
            login:value,
            isLoginValid:/^\D*\w{6,18}/.test(value),
        });
    };

    handlePhoneChange=({target:{value}})=>{
        this.setState({
            userPhone:value,
            isUserPhoneValid:/^380\d{9}$/.test(value),
        });
    }

    handlePasswChange=({target:{value}})=>{
        this.setState({
            passw:value,
            isPasswValid:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(value),
        })
    }

    handleChange=({target:{value,name}})=>{
        this.setState({[name]:value});
    };

    submitHandler=e=>{
        e.preventDefault()
    };

    render() {
        const {firstName, lastName,  birthDay, userPhone, login, passw, email, isNameValid, isLoginValid, isUserPhoneValid, isPasswValid }=this.state;

//=====Попытался так сделать, но оно меняет класс всем трем инпутам в зависимости от валидации последнего введенного. Как то же можно написать одно условие для всех инпутов, что  бы под каждый не писать свой конст...
//?
// И получается один паттерн для проверки isNameValid я не могу использовать в двух инпутах firstName и lastName?

// const inputClassValidation = classNames({
//     [isNameValid ? styles.valid : styles.invalid]: firstName,},
//     {[isUserPhoneValid ? styles.valid : styles.invalid]: userPhone,
//     }
// ) 

const inputClassFirstNameValidation = classNames({
        [isNameValid ? styles.valid : styles.invalid]: firstName}
)  

const inputClassLastNameValidation = classNames({
    [isNameValid ? styles.valid : styles.invalid]: lastName}
)

const inputClassUserPhoneValidation = classNames({
    [isUserPhoneValid ? styles.valid : styles.invalid]: userPhone}
)

const inputClassLoginValidation = classNames({
    [isLoginValid ? styles.valid : styles.invalid]: login}
)

const inputClassPasswValidation = classNames({
    [isPasswValid ? styles.valid : styles.invalid]: passw}
)

        return (
            <container >
                <form className={styles.container} onSubmit={this.submitHandler}>
                    <label className={styles.label}>
                        First Name
                        <input
                        className={inputClassFirstNameValidation}
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={this.handleNameChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Surname
                        <input
                        className={inputClassLastNameValidation}
                        type="text"
                        name="lastName"
                        placeholder="Surname"
                        value={lastName}
                        onChange={this.handleNameChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Date of birth
                        <input
                        type="date"
                        name="birthDay"
                        value={birthDay}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Phone
                        <input 
                        className={inputClassUserPhoneValidation}
                        type="tel" 
                        name="userPhone" 
                        value={userPhone}
                        placeholder="38 012 12345678"
                        maxLength="12"
                        onChange={this.handlePhoneChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Login
                        <input
                        className={inputClassLoginValidation}
                        type="text"
                        name="login"
                        placeholder="login"
                        value={login}
                        onChange={this.handleLoginChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Password
                        <input
                        className={inputClassPasswValidation}
                        type="password"
                        name="passw"
                        value={passw}
                        onChange={this.handlePasswChange}

                        />
                    </label>
                    <label className={styles.label}>
                        Email
                        <input className={styles.input}type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Create account</button>
                </form>
            </container>
        )
    }
}

export default HTLoginForm