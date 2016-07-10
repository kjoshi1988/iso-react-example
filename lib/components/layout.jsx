var React = require("react");
var Header = require("./header.jsx");

var Layout = React.createClass({
    render: function () {
        return <div className="layout">
            <Header/>
            {this.props.children}
        </div>
    }
});

module.exports = Layout;