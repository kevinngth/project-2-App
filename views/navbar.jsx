const React = require('react');

class Nav extends React.Component {
    render() {
        if (this.props.children === undefined) {
            // personalised = <a className="my-2 my-sm-0 text-white" href="/users/login">Log in</a>;
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <span className="navbar-brand">Jyggr | {this.props.children}</span>
                        <div>
                            <a href="/logout" className="btn btn-link text-white">logout</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/collection/index">Collection</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/liquor/index">Liqour</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/users/index">Users</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        };
    };
};

module.exports = Nav;