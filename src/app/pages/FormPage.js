import React from 'react';
import SelectInput from '../components/form/SelectInput';
import TextInput from '../components/form/TextInput';
import TextAreaInput from '../components/form/TextAreaInput';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      selectValue: '',
      textareaValue: '',
      error: '', //expect empty string, it length > 0 then error will show
      options: [{value:'0', text:'option 1'}, {value:1, text:'option 2'}, {value:2, text:'option 3'}, {value:3, text:'option 4'}]
    };

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(valueName, event) {
      let change = {};
      change[valueName] = event.target.value;
      this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
  let {textareaValue, textValue, selectValue, error,options} = this.state;
  return (
    <div>
      <h1>Form Page</h1>
      <form>
        <TextAreaInput name="text" label="Sample Text Area Input" value={textareaValue} placeholder="Placeholder Text" error={error} onChange={this.handleChange.bind(this, 'textareaValue')}/>
        <TextInput name="text" label="Sample Text Input" value={textValue} placeholder="Placeholder Text" error={error} onChange={this.handleChange.bind(this, 'textValue')}/>
        <SelectInput name="select" label="Sample Select Input" value={selectValue} defaultOption="Select Input"  error={error} options={options} onChange={this.handleChange.bind(this, 'selectValue')}/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

}

export default FormPage;
