const React = require('react');
var Link = require('react-router').Link;

var ToDoList = React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    loadToDoItem: function (id, e) {
        e.preventDefault();
        this.context.router.push(`/todo/${id}`);
    },

    render: function () {
        var todoItems = [], self = this;
        this.props.route.todoItems.forEach(function (item) {
            todoItems.push(
                <a className='toDoItemLabel' href={`/todo/${item.id}`} onClick={self.loadToDoItem.bind(self, item.id)}>
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