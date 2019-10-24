const React = require("react");
const Layout = require('../layout');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div className="mt-5 container d-flex align-content-center justify-content-center">
                    <div className="text-center">
                        <form className="form-signin" method="POST" action="/register">
                            <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                                <input type="text" className="form-control" placeholder="username" name="username" required autoFocus/>
                                <input type="password" className="form-control" placeholder="Password" name="password" required/>
                            <br/>
                            <button className="btn btn-lg btn-secondary btn-block" type="submit">Sign Up</button>
                            <br/>
                            <label className="text-muted">Already have an account with us?</label>
                            <a href="/login" className="btn btn-lg btn-secondary btn-block">Login</a>
                        </form>
                    </div>
                </div>
           </Layout>
        );
    };
};

module.exports = New;