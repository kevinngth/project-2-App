const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Index extends React.Component {
    render() {
        if (this.props.result===null) {
            var table = "";
        } else {
            let tableData = this.props.result.map((user,index)=>{
                let {username,user_id,notes_count,collection_count} = user;
                return (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td><a className="text-white" href={"/user/"+user_id}>{username}</a></td>
                        <td>{notes_count}</td>
                        <td>{collection_count}</td>
                    </tr>
                );
            });
            var table = (
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Notes Contributed</th>
                            <th scope="col">Collection Size</th>
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
                <div className="container mt-5 d-flex justify-content-center align-items-center">
                    <h1 className="display-2">Users</h1>
                </div>
                <div className="container mt-5 d-flex justify-content-center align-items-center">
                    {table}
                </div>
            </Layout>
        );
    };
};

module.exports = Index;