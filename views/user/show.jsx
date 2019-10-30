const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Index extends React.Component {
    render() {
        if (this.props.result[0].url==null) {
            var dp = "";
        } else {
            var dp = <img src={this.props.result[0].url} className="img-fluid"/>;
        };
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="container mt-5 d-flex justify-content-center align-items-center">
                    <h1 className="display-2">{this.props.result[0].username}</h1>
                </div>
                <div className="container mt-5 d-flex justify-content-center align-items-center">{dp}</div>
            </Layout>
        );
    };
};

module.exports = Index;