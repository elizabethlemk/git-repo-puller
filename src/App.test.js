import React from "react";
import { configure, shallow } from "enzyme";
import App from "./App";
import Form from "./components/Form";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

test("The form button text to equal 'Submit'", () => {
  const formButton = shallow(<Form />);
  expect(formButton.text()).toEqual("Submit");
});
