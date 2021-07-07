import React, { Component } from 'react';
import Todos from './Todos';
import { Link } from 'react-router-dom';

import AddToDo from './AddToDo';
import ProfileInfo from './ProfileInfo';
import newId from '../utils';


export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'Do The Dishes',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Clean room',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Laundry',
                    completed: false
                },
                {
                    id: 4,
                    title: 'Clean Car',
                    completed: false
                },
                {
                    id: 5,
                    title: 'Cut Grass',
                    completed: false
                }
            ],
            exp: 0,
            level: 1
    }
    }

    

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }) });
    }

    addToDo = (title) => {
        const newTodo = {
            id: newId(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]})
    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)], exp: this.state.exp - 20 });
    }

    completedTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)], exp: this.state.exp + 20 });
        if(this.state.exp === 80) {
            this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)],
                level:this.state.level + 1,
                exp: 0
            })
        }
    }

    render() {
        
        return (
        <div>
            <ProfileInfo completedCount={this.state.exp} level={this.state.level}/>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>___________________________________________________</h1>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Quests</h1>
            {/* <Link to='/rewards'>Rewards</Link> */}
            {/* {' | '} */}
            {/* <Link to='/'>Log out</Link> */}
            <div className="ToDo" style={{ marginLeft: '25%', marginRight: '25%' }}>
                <AddToDo addToDo={this.addToDo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} addExp={this.addExp} delTodo={this.delTodo} completedTodo={this.completedTodo}/>
            </div>
        </div>
        )
    }
}

export default Profile;
