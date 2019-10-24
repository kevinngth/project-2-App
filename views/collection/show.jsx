const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Show extends React.Component {
    render() {
        let {id,user_id,liquor_id,date_bought,balance,name,type} = this.props.result[0];
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="container mt-5">
                    <div className="row mt-5">
                        <div className="col-12 d-flex justify-content-center">
                            <h1 className="my-5 display-4">{name}</h1>
                        </div>
                        <div className="col-6 p-5">
                            <form>
                                <div className="form-group">
                                    <label>Notes</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-6 p-5 border-left border-dark">
                            <form method="POST" action={"/collection/"+id+"?_method=patch"}>
                                <div className="form-group">
                                    <label>Date Bought</label><br/>
                                    <input className="form-control" name="date_bought" defaultValue={date_bought.toLocaleDateString()} required/>
                                </div>
                                <div className="form-group">
                                    <label>Balance</label><br/>
                                    <input type="range" className="custom-range" min="0" max="10" step="1" defaultValue={balance} name="balance"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control btn btn-dark" type="submit" defaultValue="submit"/>
                                </div>
                            </form>
                            <div className="alert alert-warning" role="alert">
                                You can still keep this record when you finish the bottle. However, if you made an error while creating the entry, you can delete it <form method="POST" action={"/collection/"+id+"?_method=delete"}><input type="submit" className="btn btn-link text-danger btn-sm" defaultValue="HERE"/></form>.
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Show;