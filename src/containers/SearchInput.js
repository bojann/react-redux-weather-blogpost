import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  state = {
    city: ''
  }

  handleChange = (ev) => {
    this.setState({
      city: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.fetchWeather(this.state.city);
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          value={this.state.city}
          id="formControlsText"
          type="text"
          label="Search city:"
          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

SearchInput.propTypes = {
  fetchWeather: PropTypes.func
}

export default connect(null, mapDispatchToProps)(SearchInput);
