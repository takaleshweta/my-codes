import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import DecorateComponent from './DecoratedComponent';
import CalcApp from '../Components/CalcApp';
import ToDoApp from '../Components/ToDoApp';
import css from '../css/common.css';

export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: '',
      selectedApp: [
        {
          id: '1',
          componentName: CalcApp,
          componentTitle: 'Calculator',
        },
        {
          id: '2',
          componentName: ToDoApp,
          componentTitle: 'ToDo',
        },
      ],
    }
    this.selectComponent = this.selectComponent.bind(this);
  };
  
  selectComponent(componentTitle) {
    this.setState({
      selectedComponent: componentTitle,
    });
  };
  
  render() {
    const { selectedApp, selectedComponent } = this.state;
    return (
      <Fragment>
        <header>
          {selectedComponent ? (
            <button type="button" onClick={() => this.selectComponent('')}>
              {'<'}
            </button>
          ) : null}
          <h1> {selectedComponent ? selectedComponent : 'Home'} </h1>
        </header>
        <div className={classNames(css.mainWrapper, selectedComponent ? css.padding16px : '')}>
          <DecorateComponent
            selectedApp={selectedApp}
            selectComponent={this.selectComponent}
            selectedComponent={selectedComponent}
          />
        </div>
      </Fragment>
    )
  }
}