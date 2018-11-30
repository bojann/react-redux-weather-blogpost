import React from 'react';
import { mount } from 'enzyme';

import MyForm from 'components/MyForm';

let wrapped;

beforeEach(() => {
  wrapped = mount(<MyForm />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has submit and cancel button', () => {
  expect(wrapped.find('button').length).toEqual(2);
});

it('has select category options', () => {
  expect(wrapped.find('#formSelect').length).toEqual(1);
});

it('has input title and textarea', () => {
  expect(wrapped.find('#formTitle').length).toEqual(1);
  expect(wrapped.find('#formTextarea').length).toEqual(1);
});

describe('Input title and textarea', () => {
  beforeEach(() => {
    wrapped.find('#formTitle').simulate('change', {
      target: {
        value: 'added title',
        id: 'formTitle' }
    });
    wrapped.find('#formTextarea').simulate('change', {
      target: {
        value: 'added textarea text',
        id: 'formTextarea' }
    });
    wrapped.update();
  })

  it('simulates input title update with text', () => {
    expect(wrapped.find('#formTitle').prop('value')).toEqual('added title');
  });

  it('simulates input textarea update with text', () => {
    expect(wrapped.find('#formTextarea').prop('value')).toEqual('added textarea text');
  });

  it('has submitted form and input fileds got cleared', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update();
    expect(wrapped.find('#formTitle').prop('value')).toEqual('');
    expect(wrapped.find('#formTextarea').prop('value')).toEqual('');
  });

})
