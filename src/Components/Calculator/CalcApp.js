import React, {Component} from 'react';
import css from './calculator.css';

export default class CalcApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      formValue: '',
    }
  }
  getInputValues(e, inputVal) {
    e.stopPropagation();
    forms.input.value += inputVal;
    // this.setState({
    //   formValue: inputVal
    // });
  }
  
  calculateAnswer(e) {
    e.stopPropagation();
    forms.input.value = eval(forms.input.value);
    // const { formValue } = this.state;
    // const tempFormValue = eval(formValue);
    // this.setState({
    //   formValue: tempFormValue,
    // });
  }
  
  clearInput(e) {
    e.stopPropagation();
    forms.input.value = '';
    // this.setState({
    //   formValue: ''
    // });
  }
  
  singleClear(e) {
    e.stopPropagation();
    console.log('single clear');
  }
  
  // uniKeyCode(e) {
  //   if (e >= 48 && e <= 57) {
  //     forms.input.value = e.keyCode;
  //   }
  //   if (e.keyCode === 13 && forms.input.value) {
  //     this.calculateAnswer();
  //   }
  // }
  
  render() {
    // const { formValue } = this.state;
    return (
      <div className={css.calculatorWrapper}>
        <form className={css.enterInputWrapper} name="forms">
          <input
            type="text"
            name="input"
            className={css.inputText}
            // value={formValue}
          />
        </form>
    
        <input
          type="button"
          value="CE"
          onClick={e => this.clearInput(e)}
        />
        <input
          type="button"
          value="C"
          onClick={e => this.singleClear(e)}
        />
        <input
          type="button"
          value="/"
          onClick={e => this.getInputValues(e, '/')}
        />
        <input
          type="button"
          value="*"
          onClick={e => this.getInputValues(e,'*')}
        />
    
        <input
          type="button"
          value="7"
          onClick={e => this.getInputValues(e,'7')}
        />
        <input
          type="button"
          value="8"
          onClick={e => this.getInputValues(e,'8')}
        />
        <input
          type="button"
          value="9"
          onClick={e => this.getInputValues(e,'9')}
        />
        <input
          type="button"
          value="-"
          onClick={e => this.getInputValues(e,'-')}
        />
    
        <input
          type="button"
          value="4"
          onClick={e => this.getInputValues(e,'4')}
        />
        <input
          type="button"
          value="5"
          onClick={e => this.getInputValues(e,'5')}
        />
        <input
          type="button"
          value="6"
          onClick={e => this.getInputValues(e,'6')}
        />
        <input
          type="button"
          value="="
          className={css.equalToButton}
          onClick={e => this.calculateAnswer(e)}
        />
    
        <input
          type="button"
          value="+"
          onClick={e => this.getInputValues(e,'+')}
        />
        <input
          type="button"
          value="1"
          onClick={e => this.getInputValues(e,'1')}
        />
        <input
          type="button"
          value="2"
          onClick={e => this.getInputValues(e,'2')}
        />
        <input
          type="button"
          value="3"
          onClick={e => this.getInputValues(e,'3')}
        />
    
        <input
          type="button"
          value="."
          onClick={e => this.getInputValues(e,'.')}
        />
        <input
          type="button"
          value="0"
          className={css.zeroButton}
          onClick={e => this.getInputValues(e,'0')}
        />
      </div>
    )
  }
}