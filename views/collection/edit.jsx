const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Edit extends React.Component {
    render() {
        let {id,user_id,liquor_id,date_bought,balance} = this.props[0];
        return (
            <Layout>
                <Navbar></Navbar>
                <div className="mt-5 p-5 clearfix container">
                    <div className="row">
                        <form method="POST" action={"/collection/"+id+"?_method=patch"}>
                            <fieldset disabled>
                                <div className="form-group">
                                    <label>User Id</label><br/>
                                    <input className="form-control" name="user_id" value={user_id} required/>
                                </div>
                                <div className="form-group">
                                    <label>Liquor</label><br/>
                                    <div className="input-group">
                                        <input className="form-control" name="liquor_id" value={liquor_id} required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Date Bought</label><br/>
                                    <input type="date" className="form-control" name="date_bought" value={date_bought.toLocaleDateString()} required/>
                                </div>
                            </fieldset>
                            <div className="form-group">
                                <label>Balance</label><br/>
                                <input type="range" className="custom-range" min="0" max="10" step="1" defaultValue={balance} name="balance"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control btn btn-dark" type="submit" value="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Edit;