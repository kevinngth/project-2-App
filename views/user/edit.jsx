const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Index extends React.Component {
    render() {
        if (this.props.result[0].url==null) {
            var dp = "";
        } else {
            var dp = <img src={this.props.result[0].url} className="img-fluid"/>;
        };
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="container mt-5 d-flex justify-content-center align-items-center">
                    <h1 className="display-2">{this.props.req.cookies.username}</h1>
                </div>
                <div className="container mt-5 d-flex justify-content-center align-items-center">{dp}</div>
                <div className="container mt-5 d-flex justify-content-center align-items-center">
                    <form encType="multipart/form-data" action={"/user/"+this.props.req.cookies.userId} method="POST">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="file" name="dp"/>
                            <label className="custom-file-label" htmlFor="file">Choose file</label><br/><br/>
                            <input type="submit" className="btn btn-secondary btn-block"/>
                        </div>
                    </form>
                </div>
            </Layout>
        );
    };
};

module.exports = Index;