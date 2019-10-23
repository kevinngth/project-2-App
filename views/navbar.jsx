const React = require('react');

class Nav extends React.Component {
    render() {
        let personalised;
        // if (this.props.children === undefined) {
        //     personalised = <a className="my-2 my-sm-0 text-white" href="/users/login">Log in</a>;
        // } else {
        //     personalised = this.props.children;
        // };
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <span className="navbar-brand">Jyggr | username</span>
                    <div>
                        <button className="btn btn-link text-white">logout</button>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
};

module.exports = Nav;