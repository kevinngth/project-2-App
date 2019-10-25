const moment = require('moment');
const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

// random cocktail
var unirest = require("unirest");

var req = unirest("GET", "https://the-cocktail-db.p.rapidapi.com/random.php");

req.headers({
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key": "e58b63a2c1mshe6929549bc8fde4p1fe576jsn26b5394fcf54"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});

class Index extends React.Component {
    render() {
        if (this.props.result===null) {
            return (
                <Layout>
                    <Navbar>{this.props.req.cookies.username}</Navbar>
                    <div className="row mt-5">
                        <a href="/collection/new" className="btn btn-dark my-5 mx-auto">Add to your collection</a>
                    </div>
                </Layout>
            );
        } else {
            let tableData = this.props.result.map((liquor,index)=>{
                let {id,user_id,liquor_id,date_bought,balance,name,type} = liquor;
                let string = balance*10+"%";
                return (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td><a className="text-white" href={"/liquor/"+liquor_id}>{name}</a></td>
                        <td>{type}</td>
                        <td>{moment(date_bought).format("Do MMM YY")}</td>
                        <td>
                            <div className="progress">
                                <div style={{width: string}} className="progress-bar progress-bar-striped bg-secondary" role="progressbar"></div>
                            </div>
                        </td>
                        <td><a className="text-white" href={"/collection/"+id}><i className="fas fa-edit"></i></a></td>
                    </tr>
                );
            });
            return (
                <Layout>
                    <Navbar>{this.props.req.cookies.username}</Navbar>
                    <div className="container">
                        <div className="row mt-5">
                            <a href="/collection/new" className="btn btn-dark m-5">Add to your collection</a>
                        </div>
                        <table className="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name <a href="/collection/index?col=name&order=ASC"><i className="fas fa-caret-up" name="sortby"></i></a> <a href="/collection/index?col=name&order=DESC"><i className="fas fa-caret-down"></i></a> </th>
                                    <th scope="col">Type <a href="/collection/index?col=type&order=ASC"><i className="fas fa-caret-up"></i></a> <a href="/collection/index?col=type&order=DESC"><i className="fas fa-caret-down"></i></a></th>
                                    <th scope="col">Date Bought <a href="/collection/index?col=date_bought&order=ASC"><i className="fas fa-caret-up"></i></a> <a href="/collection/index?col=date_bought&order=DESC"><i className="fas fa-caret-down"></i></a></th>
                                    <th scope="col">Balance <a href="/collection/index?col=balance&order=ASC"><i className="fas fa-caret-up"></i></a> <a href="/collection/index?col=balance&order=DESC"><i className="fas fa-caret-down"></i></a></th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData}
                            </tbody>
                        </table>
                    </div>
                </Layout>
            );
        };
    };
};

module.exports = Index;