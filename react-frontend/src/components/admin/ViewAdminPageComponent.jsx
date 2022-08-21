import React, { useState } from 'react';
import AdminService from '../../services/AdminService';

const ViewAdminPageComponent = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [adminInfo, setAdminInfo] = useState({});

    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
    
    async function handleSubmit(event) {
        event.preventDefault();
    
        var { usern, pass } = document.forms[0];

        let user = {
            username: "karimajed",
            password: "123456"
        };
    
        try {
            await AdminService.authenticateUser(user).then(res => { setAdminInfo(JSON.stringify(res.data)) });
            console.log("1");
        } catch (error) {
            console.log(error);
        }

        if (adminInfo) {
            console.log(adminInfo);
            if (adminInfo.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
          setErrorMessages({ name: "usern", message: errors.usern });
        }
    };

    const renderErrorMessage = (name) =>  name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    const errors = {
        usern: "invalid username",
        pass: "invalid password"
    };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="usern" required />
              {renderErrorMessage("usern")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default ViewAdminPageComponent;