const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class New extends React.Component {
    render() {
        return (
            <Layout>
                <Navbar></Navbar>
                <div className="mt-5">
                    <form method="POST" action="/liquor/new">
                        <div className="form-group">
                            <label>name:</label><br/>
                            <input name="name" required/><br/>
                        </div>
                        <div className="form-group">
                            <label>type:</label><br/>
                            <input name="type" required/><br/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="submit"/>
                        </div>
                    </form>
                </div>
            </Layout>
        );
    };
};

module.exports = New;