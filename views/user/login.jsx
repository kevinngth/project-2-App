const React = require("react");
const Layout = require("../layout");

class Login extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="text-center">
                        <form className="form-signin" method="POST" action="/login">
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <label className="sr-only">Username</label>
                            <input type="text" className="form-control" placeholder="username" name="username" required autoFocus/>
                            <label className="sr-only">Password</label>
                            <input type="password" className="form-control" placeholder="Password" name="password" required/>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <a href="/register"><button className="btn btn-lg btn-primary btn-block">Register</button></a>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Login;