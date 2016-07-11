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
            <div href="#" className="toDoItem">
                <div className="toDoItemTitle"> Title</div>
                <div className="toDoItemDetails">
                    details.....
                </div>
            </div>
        )
    }
});

module.exports = ToDoITem;