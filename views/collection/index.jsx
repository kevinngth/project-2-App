const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Index extends React.Component {
    render() {
        if (this.props.result===null) {
            return (
                <Layout>
                    <Navbar>{this.props.req.cookies.username}</Navbar>
                    <div className="row mt-5">
                        <a href="/collection/new" className="btn btn-dark m-5">Add to your collection</a>
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
                        <td><a className="text-white" href={"/liquor/"+liquor_id}><i className="fas fa-eye"></i></a> {name}</td>
                        <td>{type}</td>
                        <td>{date_bought.toLocaleDateString()}</td>
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Date Bought</th>
                                    <th scope="col">Balance</th>
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