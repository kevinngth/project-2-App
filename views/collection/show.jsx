const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Show extends React.Component {
    render() {
        let {id,user_id,liquor_id,date_bought,quantity} = this.props[0];
        return (
            <Layout>
                <Navbar></Navbar>
                <div>
                    <h6>{id}</h6>
                    <h6>{user_id}</h6>
                    <h6>{liquor_id}</h6>
                    <h6>{date_bought.toLocaleDateString()}</h6>
                    <h6>{quantity}</h6>
                </div>
            </Layout>
        );
    };
};

module.exports = Show;