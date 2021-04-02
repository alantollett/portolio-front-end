import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render = () => {
        const {setToken, displayError, displaySuccess} = this.props;

        return (
            <div className="account wrapper">
                <div className="grid">
                    <LoginForm setToken={setToken} displayError={displayError} displaySuccess={displaySuccess}/>
                    <RegisterForm displayError={displayError} displaySuccess={displaySuccess}/>
                </div>
            </div>
        );
    }
}