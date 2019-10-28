const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Index extends React.Component {
    render() {
        let typeArray = [];
        let listHeaders = this.props.result.map(liquor=>{
            let {id,name,type} = liquor;
            // if category does not exist, create a new category
            if (typeArray.includes(type)==false) {
                typeArray.push(type);
                return <a className="list-group-item list-group-item-action bg-secondary text-light" data-toggle="list" href={"#list-"+type} role="tab">{type}</a>
            };
        });
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="mt-5 pt-5 clearfix container d-flex align-content-center">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            {listHeaders}
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content text-light" id="nav-tabContent">
                        </div>
                    </div>
                </div>
                <script src="../liquorIndex.js"/>
            </Layout>
        );
    };
};

module.exports = Index;