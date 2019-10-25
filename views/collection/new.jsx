const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class New extends React.Component {
    render() {
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="mt-5 p-5 clearfix container">
                    <div className="row">
                        <form method="POST" action="/collection/new">
                            <div className="d-none form-group">
                                <label>User Id</label><br/>
                                <input className="form-control" name="user_id" value={this.props.req.cookies.userId} required/>
                            </div>
                            <div className="form-group">
                                <label>Liquor</label><br/>
                                <div className="input-group">
                                    <select className="custom-select" id="liquorSelect" name="liquor_id">
                                        <option>Choose...</option>
                                    </select>
                                    <div className="input-group-append">
                                        <a href='/liquor/new'><button className="btn btn-dark" type="button">Create New</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Date Bought</label><br/>
                                <input type="date" className="form-control" name="date_bought" required/>
                            </div>
                            <div className="form-group">
                                <label>Balance</label><br/>
                                <input type="range" className="custom-range" min="0" max="10" step="1" value="10" name="balance"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control btn btn-dark" type="submit" value="submit"/>
                            </div>
                            <script src="../liquorSelect.js"/>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = New;