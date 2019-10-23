const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Show extends React.Component {
    render() {
        let {id,name,type} = this.props[0]
        return (
            <Layout>
            <Navbar></Navbar>
            <div>
                <h6>{id}</h6>
                <h6>{name}</h6>
                <h6>{type}</h6>
            </div>
</Layout>
        );
    };
};

module.exports = Show;