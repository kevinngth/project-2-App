const React = require("react");

class New extends React.Component {
    render() {
        return (
            <form method="POST" action="/liquor/new">
                <textarea name="content" required/>
                <input type="submit" value="submit"/>
            </form>
        );
    };
};

module.exports = New;