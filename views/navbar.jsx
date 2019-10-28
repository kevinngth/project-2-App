const React = require('react');

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <span className="navbar-brand text-warning">Jyggr <i className="fas fa-wine-bottle"></i></span>
                    <div>
                        { this.props.children === undefined ? <span className="text-white"><a href="/logout">Sign up </a> | <a href="/logout">login </a></span> : <span className="text-white">{this.props.children} | <a href="/logout">logout </a></span>}
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
                                <a className="nav-link" href="/liquor/all">Liquor</a>
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

module.exports = Nav;