import React from 'react'
import ReactDOM from 'react-dom';
import Button from './../button';
import { render, cleanup } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import TestRenderer from 'react-test-renderer';


it("renders without crashing", () => {
    const div = document.createElement("div");
     ReactDOM.render(<Button/>, div);
})
afterEach(cleanup);

it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("save")
})

afterEach(cleanup);

it("matches snapshot 1", () => {
    const tree = TestRenderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapshot 2", () => {
    const tree = TestRenderer.create(<Button label="click me please"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})