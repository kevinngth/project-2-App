const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Index extends React.Component {
    render() {
        let tableData = this.props.result.map((liquor,index)=>{
            let {id,user_id,liquor_id,date_bought,quantity} = liquor;
            return (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{id}</td>
                    <td>{user_id}</td>
                    <td>{liquor_id}</td>
                    <td>{date_bought.toLocaleDateString()}</td>
                    <td>{quantity}</td>
                </tr>
            );
        });
        return (
            <Layout>
                <Navbar></Navbar>
                <div>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">id</th>
                                <th scope="col">user_id</th>
                                <th scope="col">liquor_id</th>
                                <th scope="col">date_bought</th>
                                <th scope="col">quantity</th>
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

module.exports = Index;