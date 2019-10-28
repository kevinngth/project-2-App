const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class Show extends React.Component {
    render() {
        let title = this.props.result[0].name;
        let subtitle = this.props.result[0].type;
        if (this.props.result[0].notes !== null) {
            var cards = this.props.result.map(note=>{
                let {notes,username,name,type,user_id} = note;
                return (
                    <div className="card p-3 bg-secondary">
                        <blockquote className="blockquote mb-0">
                            <p>{notes}</p>
                            <footer className="blockquote-footer text-light">
                                <small>{username}</small>
                            </footer>
                        </blockquote>
                    </div>
                );
            });
        };
        return (
            <Layout>
                <Navbar>{this.props.req.cookies.username}</Navbar>
                <div className="mt-5 pt-5 clearfix container d-flex align-content-center justify-content-center">
                    <div className="row mt-5">
                        <div className="col-12 d-flex justify-content-center">
                            <h1 className="my-5 display-4">{title}</h1>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="lead">{subtitle}</div>
                        </div>
                        <div className="card-columns mt-5">
                            {cards}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    };
};

module.exports = Show;