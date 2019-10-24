const React = require("react");
const Layout = require("./layout");
const Navbar = require("./navbar");

class New extends React.Component {
    render() {
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="mt-5 p-5 clearfix container">
                    <div className="row">
                        <h1 className="display-1">ERROR404</h1>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = New;