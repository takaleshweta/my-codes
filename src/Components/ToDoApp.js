import React, {Component, Fragment} from 'react';
import css from '../css/todo.css';

export default class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      inputText: '',
    }
  }
  
  getInput(e) {
    e.preventDefault();
    this.setState({
      // toDoList: inputText,
      inputText:  e.target.value,
    })
  }
  
  addToList(e) {
    e.stopPropagation();
    e.preventDefault();
    const { inputText, toDoList } = this.state;
    const todo = {
      text: inputText,
      id: `${inputText}0`, //maprandom() use here
    };
    toDoList.push(todo);
    this.setState({
      toDoList,
    });
  }
  
  removeFromList(value) {
    console.log('remove', value);
  }
  
  render() {
    const { toDoList } = this.state;
    return (
      <div className={css.todoWrapper}>
        <form>
          <input type="text" className={css.inputWrapper} onChange={e => this.getInput(e)} />
          <button className={css.addButton} onClick={e => this.addToList(e)}>
            +
          </button>
        </form>
        <div className={css.todoListWrapper}>
          <ul>
            {toDoList && toDoList.length ?
                toDoList.map(value => (
                  <li key={value.id} onClick={() => this.removeFromList(value)}>{value.text}</li>
                ))
            : null}
          </ul>
        </div>
      </div>
    );
  }
}