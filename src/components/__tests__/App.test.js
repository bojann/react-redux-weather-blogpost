import React, { Component } from 'react';
import { shallow } from 'enzyme';
import App from 'components/app';
import SearchInput from 'containers/SearchInput';
import WeatherList from 'containers/WeatherList';
import MyForm from 'components/MyForm';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('shows search input', () => {
  expect(wrapped.find(SearchInput).length).toEqual(1)
})

it('shows weather list', () => {
  expect(wrapped.find(WeatherList).length).toEqual(1)
})

it('shows weather list', () => {
  expect(wrapped.find(MyForm).length).toEqual(1)
})
