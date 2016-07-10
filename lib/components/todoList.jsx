const React = require('react');

var ToDoList = React.createClass({

    //contextTypes: {
    //    router: React.PropTypes.func
    //},

    loadToDoItem: function (id, e) {
        alert("clicked");
    },

    render: function () {
        var todoItems = [], self = this;
        this.props.route.todoItems.forEach(function (item) {
            todoItems.push(
                <a className='toDoItemLabel' href={"/todo/" + item.id} onClick={self.loadToDoItem.bind(self, item.id)}>
                    {item.label}
                </a>
            )
        });
        return (
            <div className="toDoListView">{todoItems}</div>
        )
    }
});

module.exports = ToDoList;