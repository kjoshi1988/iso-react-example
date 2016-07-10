const React = require('react');

var ToDoITem = React.createClass({

    //contextTypes: {
    //    router: React.PropTypes.func
    //},

    loadToDo: function (e) {
        alert("clicked");
    },

    render: function () {
        return (
            <a href="#" className="toDoItem" onClick={this.loadToDo}>
                <div className="toDoItemTitle">title....</div>
                <div className="toDoItemDetails">
                    details.....
                </div>
            </a>
        )
    }
});

module.exports = ToDoITem;