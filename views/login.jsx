const React = require("react");

class Login extends React.Component {
    render() {
        return (
            <div className="text-center">
                <form className="form-signin">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Username</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="username" required autofocus/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
            </div>
        );
    };
};

module.exports = Login;