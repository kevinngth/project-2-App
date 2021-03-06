const moment = require('moment');
const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Index extends React.Component {
    render() {
        if (this.props.result===null) {
            var table = "";
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
            var table = (
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
            );
        };
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4 mt-5 pl-5">
                            <a href="/collection/new" className="btn btn-light m-2"><i className="fas fa-wine-bottle"></i><i className="fas fa-plus"></i></a>
                        </div>
                    </div>
                    {table}
                    <div className="row mt-5">
                        <div className="col-md-4 my-5 pl-5">
                            <img id="cocktailImg" className="img-fluid rounded"/>
                        </div>
                        <div className="col-md-4 my-5 card bg-secondary">
                            <div className="card-body">
                                <h5 className="card-title" id="cocktailTitle"></h5>
                                <ul className="card-text" id="cocktailIngredients"></ul>
                            </div>
                            <div className="card-body">
                                <p id="cocktailInstructions"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="../randomCocktail.js"/>
            </Layout>
        );
    };
};

module.exports = Index;