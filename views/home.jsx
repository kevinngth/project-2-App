const React = require("react");
const Layout = require("./layout");
const Navbar = require("./navbar");

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <main role="main">
                    <div className="mt-5 jumbotron bg-secondary">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="display-3">Jyggr <i className="text-warning fas fa-wine-bottle"></i></h1>
                                    <p>Jyggr is alcohol stock taking app that is named after that popular bartending tool jigger.</p>
                                    <p><a className="btn btn-dark btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid" src="https://s3-ap-southeast-2.amazonaws.com/www.theshout.com.au/wp-content/uploads/2019/08/19115533/BartenderJigger.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-light">
                                <h2>Keep track of your collection</h2>
                                <p>Ever wondered how much alcohol left you have back at home? Ever bought a new bottle only to realised that you still have an unopened one on the shelf?</p>
                                <p><a className="btn btn-secondary" href="/collection/new" role="button">Start tracking &raquo;</a></p>
                            </div>
                            <div className="col-md-4 text-light">
                                <h2>Keep notes</h2>
                                <p>Saw a familiar bottle but forgot how it tasted? Want to find a drink that matches your cravings?</p>
                                <p><a className="btn btn-secondary" href="#" role="button">Refer to your notes &raquo;</a></p>
                            </div>
                            <div className="col-md-4 text-light">
                                <h2>Check out other's notes</h2>
                                <p>Suffered from buyer's remorse? Check out what other's notes say before committing to the purchase</p>
                                <p><a className="btn btn-secondary" href="#" role="button">See others &raquo;</a></p>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        );
    };
};

module.exports = Home;