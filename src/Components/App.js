import React, {Component} from 'react';
import css from './react_style.css';

class CalcApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  };
  
  componentDidMount() {
  
  }
  
  getInputValues(inputVal) {
    forms.input.value += inputVal;
  }
  
  calculateAnswer() {
    forms.input.value = eval(forms.input.value)
    console.log('Answer',);
  }
  
  clearInput() {
    forms.input.value = '';
    console.log('all clear');
  }
  
  singleClear() {
    console.log('single clear');
  }
  
  uniKeyCode(e) {
    if (e >= 48 && e <= 57) {
      forms.input.value = e.keyCode;
    }
    if (e.keyCode === 13 && forms.input.value) {
      this.calculateAnswer();
    }
  }
  
  render() {
    return (
      <section>
        <h1>Calculator</h1>
        <div className={css.mainWrapper}>
          <form className={css.enterInputWrapper} name="forms">
            <input
              type="text"
              name="input"
              className={css.inputText}
              autoFocus
            />
          </form>
  
          <input
            type="button"
            value="CE"
            onClick={() => this.clearInput()}
          />
          <input
            type="button"
            value="C"
            onClick={() => this.singleClear()}
          />
          <input
            type="button"
            value="/"
            onClick={() => this.getInputValues('/')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="X"
            onClick={() => this.getInputValues('X')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          
          <input
            type="button"
            value="7"
            onClick={() => this.getInputValues('7')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="8"
            onClick={() => this.getInputValues('8')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="9"
            onClick={() => this.getInputValues('9')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="-"
            onClick={() => this.getInputValues('-')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          
          <input
            type="button"
            value="4"
            onClick={() => this.getInputValues('4')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="5"
            onClick={() => this.getInputValues('5')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="6"
            onClick={() => this.getInputValues('6')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="+"
            className={css.equalToButton}
            onClick={() => this.getInputValues('+')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          
          <input
            type="button"
            value="1"
            onClick={() => this.getInputValues('1')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="2"
            onClick={() => this.getInputValues('2')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="3"
            onClick={() => this.getInputValues('3')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="="
            onClick={() => this.calculateAnswer()}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          
          <input
            type="button"
            value="."
            onClick={() => this.getInputValues('.')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
          <input
            type="button"
            value="0"
            className={css.zeroButton}
            onClick={() => this.getInputValues('0')}
            onKeyPress={e => this.uniKeyCode(e)}
          />
        </div>
      </section>
    )
  }
}

export default CalcApp;