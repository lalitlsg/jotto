import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { checkProps, findbyAttrTest } from "../../../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for Congrats component.
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders congrats component without error", () => {
  const wrapper = setup({ success: false });
  const component = findbyAttrTest(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findbyAttrTest(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findbyAttrTest(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected prop", () => {
  const expectedProp = { success: false };
  checkProps(Congrats, expectedProp);
});
