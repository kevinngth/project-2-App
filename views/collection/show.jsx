const moment = require('moment');
const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Show extends React.Component {
    render() {
        let {id,user_id,liquor_id,date_bought,balance,name,type} = this.props.result[0];
        if (this.props.result2 !== null) {
            var {notes} = this.props.result2[0];
        } else {
            var notes = "";
        };
        const today = date_bought;
        const date = `${today.getFullYear()}-${(today.getMonth()+1)<10?"0"+(today.getMonth()+1):(today.getMonth()+1)}-${today.getDate()<10?"0"+today.getDate():today.getDate()}`;
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="col-12 d-flex justify-content-center">
                            <h1 className="my-5 display-4">{name}</h1>
                        </div>
                        <div className="col-6 p-5">
                            <form method="POST" action='/notes/addNote' id="noteFormSubmit">
                                <div className="d-none form-group">
                                    <label>User Id</label><br/>
                                    <input className="form-control" name="user_id" value={user_id} required/>
                                </div>
                                <div className="d-none form-group">
                                    <label>Liquor Id</label><br/>
                                    <input className="form-control" name="liquor_id" value={liquor_id} required/>
                                </div>
                                <div className="form-group">
                                    <label>Notes</label>
                                    <textarea className="form-control" rows="3" name="notes" value={notes} placeholder="Your notes here" required></textarea>
                                </div>
                                <div className="form-group">
                                    <input className="form-control btn btn-dark" type="submit" defaultValue="Submit"/>
                                </div>
                            </form>
                            <div role="alert" className="toast" data-delay="3000" data-autohide="false">
                                <div className="toast-header">
                                    <strong className="mr-auto text-dark">Jyggr</strong>
                                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="toast-body text-dark">
                                    Successfully updated!
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-5 border-left border-dark">
                            <form method="POST" action={"/collection/"+id+"?_method=patch"} id="collectionFormSubmit">
                                <div className="form-group">
                                    <label>Date Bought</label><br/>
                                    <input type="date" className="form-control" name="date_bought" defaultValue={date} required/>
                                </div>
                                <div className="form-group">
                                    <label>Balance</label><br/>
                                    <input type="range" className="custom-range" min="0" max="10" step="1" defaultValue={balance} name="balance"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control btn btn-dark" type="submit" defaultValue="Submit"/>
                                </div>
                            </form>
                            <div className="alert alert-warning" role="alert">
                                You can still keep this record when you finish the bottle. However, if you made an error while creating the entry, you can delete it <form method="POST" action={"/collection/"+id+"?_method=delete"}><input type="submit" className="btn btn-link text-danger btn-sm" defaultValue="HERE"/></form>.
                            </div>
                        </div>
                    </div>
                </div>
                <script src='../collectionPrompts.js'/>
            </Layout>
        );
    };
};

module.exports = Show;