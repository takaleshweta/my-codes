import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import DecorateComponent from './DecoratedComponent';
import CalcApp from '../Components/Calculator/CalcApp';
import ToDoApp from '../Components/ToDo/ToDoApp';
import LoanCalculator from '../Components/LoanCalculator/LoanCalculator';
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
        {
          id: '3',
          componentName: LoanCalculator,
          componentTitle: 'Loan Calculator',
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
            <button
              className={css.backArrow}
              type="button"
              onClick={() => this.selectComponent('')}
            >
              {'<'}
            </button>
          ) : null}
          <h1> {selectedComponent ? selectedComponent : 'Home'} </h1>
        </header>
        <div className={css.mainWrapper}>
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