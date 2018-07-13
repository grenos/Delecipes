import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, Form } from 'reactstrap';

import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

const FormCard = styled.div`
  border: 1px solid white;
  border-radius: 0.25em;
  justify-content: center;
  background: url('/dashboard-bg.jpg') no-repeat center center;
  background-size: cover;
  margin-bottom: 1em;
`;

let formStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '1em'
};

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeInput: '',
      recipeStyle: ''
    };
  }

  //! set input value to component state
  recipeInputData = e => {
    const inputData = e.target.value;
    this.setState({ recipeInput: inputData });
  };

  //! set select value to component state
  recipeStyleData = e => {
    const selectData = e.target.value;
    this.setState({ recipeStyle: selectData });
  };

  //! Sent values to parent for dispatch to store
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      recipeInput: this.state.recipeInput,
      recipeStyle: this.state.recipeStyle
    });
    this.props.history.push(`/recipes/${this.state.recipeInput}`);
  };

  render() {
    return (
      <FormCard>
        <Form style={formStyle} onSubmit={this.onSubmit}>
          <FormGroup style={{ marginRight: '1em' }}>
            <Input
              type="text"
              name="search"
              placeholder="I want to make..."
              onChange={this.recipeInputData}
            />
          </FormGroup>
          <FormGroup style={{ marginRight: '1em' }}>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={this.recipeStyleData}
            >
              <option value="null">Pick a style (Optional)</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
              <option value="indian">Indian</option>
              <option value="french">French</option>
              <option value="italian">Italian</option>
              <option value="spanish">Spanish</option>
              <option value="greek">Greek</option>
              <option value="mexican">Mexican</option>
              <option value="african">African</option>
              <option value="middle eastern">Middle Eastern</option>
              <option value="caribean">Caribean</option>
              <option value="latin american">Latin American</option>
            </Input>
          </FormGroup>
          <FormGroup style={{ marginRight: '1em' }}>
            <Button color="success" type="submit">
              Search
            </Button>
          </FormGroup>
        </Form>
      </FormCard>
    );
  }
}

export default withRouter(Search);
