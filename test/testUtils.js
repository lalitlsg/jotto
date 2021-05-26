import { ShallowWrapper } from "enzyme";
import checkPropsTypes from "check-prop-types";
import React from "react";
import { createStore } from "redux";
import rootReducer from "../src/store/reducers";

/**
 * Create a testing store with imported reducers, middlewares and initial state.
 * @param {object} initialState - Initial state of store.
 * @returns {Store} - redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - data-test attribute value for search.
 * @returns {ShallowWrapper}
 */
export const findbyAttrTest = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

/**
 * Function to check valid props
 * @param {React.FC} component
 * @param {object} conformingProps
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
