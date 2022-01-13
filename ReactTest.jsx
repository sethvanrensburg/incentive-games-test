/**
 * If you want to prove your React skills, please try this test.
 *
 * TIPS:
 * - These are a theoretical questions, there is no need to install packages or run the code.
 */

/* eslint-disable */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * TEST 1
 * 
 * This test is a simple one with conditional rendering.
 * 
 * This component has to return:
 *  The name in blue if the age is greater than or equal than 18.
 *  The name in red otherwise.
 */

/* eslint-enable */

export const Test1Component = props => {
  const { name, age } = props;

  return (
    <>
      <div>Name:</div>
      <div style={{ color: `${age >= 18 ? 'blue' : 'red'}` }}>
        {name}
      </div>
    </>
  );
};

Test1Component.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

/* eslint-disable */

/**
 * TEST 2
 * 
 * This is test is about handling changes of the data from an API.
 * 
 * Like test 1, this component has to return:
 *  The name in blue if the age is greater than or equal than 18.
 *  The name in red otherwise.
 * 
 * The difference is we don't have the age, we need to use the function below to get it.
 * The name from the parent can change any time, we have ensure the component rerenders if it happens
 * Getting data from an API (we simulate it with a timeout) is async, please be sure the code updates when we get the response back from the API
 */

/**
 * This function accepts a name and simulates and API call to get the age of the person
 * Please use it in the component
 * @param name Name of the person we want to find the age
 * @returns random integer from 0 to 39
 */

const getAge = async (name) => {
  // This function calls an API and returns
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(Math.floor(Math.random() * 40));
    }, 500);
  })
}

/* eslint-enable */

export const Test2Component = props => {
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState(0);
  const { name } = props;

  useEffect(() => {
    const fetchAge = async () => {
      const featchedAge = await getAge(name);
      setAge(featchedAge);
      setLoading(false);
    };

    setLoading(true);
    fetchAge();
  }, [name]);

  return !loading && <Test1Component name={name} age={age} />;
};

Test2Component.propTypes = {
  name: PropTypes.string.isRequired
};
