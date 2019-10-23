const React = require("react");
const Layout = require("../layout");
const Navbar = require("../navbar");

class New extends React.Component {
    render() {
        return (<Layout>
            <Navbar></Navbar>
            <form method="POST" action="/collection/new">
                <label>User Id</label>
                <br/>
                <input name="user_id" required/>
                <br/>
                <label>Liquor</label>
                <br/>
                <select id="liquorSelect" name="liquor_id">
                    <option id="firstChild" value="">Select a liquor</option>
                </select>
                <br/>
                <label>Date Bought</label>
                <br/>
                <input name="date_bought" required/>
                <br/>
                <label>Quantity</label>
                <br/>
                <input name="quantity" required/>
                <br/>
                <input type="submit" value="submit"/>
                <script src="../liquorSelect.js"/>
            </form>
</Layout>
        );
    };
};

module.exports = New;