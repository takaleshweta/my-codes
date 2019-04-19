import decorateComponentWithProps from 'decorate-component-with-props';
import React, {Fragment} from "react";
import css from '../css/common.css';

export default class DecorateComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedComponent: props.selectedComponent,
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedComponent !== prevState.selectedComponent) {
      return {
        // selectedComponent: nextProps.selectedComponent,
      };
    }
    return null;
  }
  
  render() {
    const { selectedApp, selectedComponent, selectComponent } = this.props;
    return (
      <Fragment>
        {selectedComponent ? selectedApp.map(value => {
          let DecoratedPropsComponent =
            decorateComponentWithProps(value.componentName, 'shweta');
          
          return selectedComponent ===  value.componentTitle ? (
            <div key={value.id}>
              {<DecoratedPropsComponent />}
            </div>
          ) : null
        }) : null}
  
        {!selectedComponent ? selectedApp.map(value => {
          return  (
            <button
              key={value.id}
              type="button"
              className={css.componentButtons}
              onClick={() => selectComponent(value.componentTitle)}
              >
              {value.componentTitle}
            </button>
          )
        }) : null}
  
       
      </Fragment>
    )
  }
}