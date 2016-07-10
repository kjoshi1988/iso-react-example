var Route = require('react-router').Route;
//var IndexRoute = require('react-router').IndexRoute;
var React = require('react');
var ToDoListView = require('../lib/components/todoList.jsx');
var ToDoItemView = require('../lib/components/toDoItem.jsx');
var Layout = require('../lib/components/layout.jsx');
var toDoItems = [
    {
        label: "Item 1",
        id: "1"
    },
    {
        label: "Item 2",
        id: "2"
    },
    {
        label: "Item 3",
        id: "3"
    }
];

var routes = (
    <Route name='home' component={Layout}>
        <Route name="toDoListView" path="/" component={ToDoListView} todoItems={toDoItems}/>
        <Route name="toDoItemView" path="/todo/:id" component={ToDoItemView} />
    </Route>
);

module.exports = routes;