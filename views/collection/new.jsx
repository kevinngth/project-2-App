const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class New extends React.Component {
    render() {
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="mt-5 p-5 clearfix container d-flex align-content-center justify-content-center">
                    <div className="row">
                        <form method="POST" action="/collection/new">
                            <div className="d-none form-group">
                                <label>User Id</label><br/>
                                <input className="form-control" name="user_id" value={this.props.req.cookies.userId} required/>
                            </div>
                            <div className="form-group">
                                <label>Liquor</label><br/>
                                <div className="input-group">
                                    <select className="custom-select" size="10" id="liquorSelect" name="liquor_id">
                                        <option disabled>Choose...</option>
                                    </select>
                                    <div className="ml-3">

                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#newLiquor">TEST Create New</button>

                                        <a href='/liquor/new'><button className="btn btn-secondary" type="button">Create New</button></a>
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
                                <input className="form-control btn btn-secondary" type="submit" value="submit"/>
                            </div>

                            <div className="modal fade" id="newLiquor" tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add a new liquor</h5>
                                            <button type="button" className="close" data-dismiss="modal">
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label for="recipient-name" className="col-form-label">Recipient:</label>
                                                    <input type="text" className="form-control" id="recipient-name"/>
                                                </div>
                                          <div className="form-group">
                                            <label for="message-text" className="col-form-label">Message:</label>
                                            <textarea className="form-control" id="message-text"></textarea>
                                          </div>
                                        </form>
                                      </div>
                                      <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Send message</button>
                                      </div>
                                    </div>
                                  </div>
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