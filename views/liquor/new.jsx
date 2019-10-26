const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class New extends React.Component {
    render() {
        return (
            <Layout>
                <Navbar></Navbar>
                <div className="mt-5 p-5 clearfix container d-flex align-content-center justify-content-center">
                    <form method="POST" action="/liquor/new">
                        <div className="form-group">
                            <label>name:</label>
                            <input className="form-control form-control-lg" name="name" required/><br/>
                        </div>
                        <div className="form-group">
                            <label>type:</label>
                            <input className="form-control form-control-lg" list="types" type="text" name="type" required/>
                            <datalist id="types">
                                <option value="Brandy"></option>
                                <option value="Whisky"></option>
                                <option value="Gin"></option>
                                <option value="Wine"></option>
                                <option value="Vodka"></option>
                                <option value="Tequila"></option>
                                <option value="Rum"></option>
                            </datalist>
                        </div>
                        <div className="form-group">
                            <input className="form-control btn btn-secondary" type="submit" value="submit"/>
                        </div>
                    </form>
                </div>
            </Layout>
        );
    };
};

module.exports = New;