import React, { useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import "./about.css";

import { BrowserRouter as Router, useHistory } from "react-router-dom";

function About() {
  const { register, handleSubmit, errors, watch, reset } = useForm({});

  const [value, setValues] = useState();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    // c1: data.phone = value
    alert(JSON.stringify({ ...data, phone: value }));
  };

  const onReset = () => {
    setValues("");
    reset("");
  };

  const history = useHistory();

  // history.replace: from page3 to page1,
  // history.goBack: come back 1 page <==> history.go(-1),
  // history.goForward(): go to 1 page <==> history.go(1)

  // const navigationToHomePage = () => {
  //   history.push("/");
  // };
  // const navigationToHomePage = () => {
  //   history.replace("/");
  // };
  const navigationToHomePage = () => {
    history.goBack();
  };

  const navigationToDashboardPage = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <Router>
        {/* <div className="wrapper-about">
          <div className="container-about">
            <div className="required-infor-about">
              <div className="register-user-about">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Rain"
                    ref={register({
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/,
                    })}
                  />
                  {_.get("firstName.type", errors) === "required" && (
                    <p className="p-tag-of-input">This field is required</p>
                  )}
                  {_.get("firstName.type", errors) === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                  )}
                  {_.get("firstName.type", errors) === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Ho"
                    ref={register({
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/,
                    })}
                  />
                  {_.get("lastName.type", errors) === "required" && (
                    <p className="p-tag-of-input">This field is required</p>
                  )}
                  {_.get("lastName.type", errors) === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                  )}
                  {_.get("lastName.type", errors) === "pattern" && (
                    <p>Alphabetical characters only</p>
                  )}

                  <button
                    type="submit"
                    defaultValue="Submit"
                    className="btn-submit"
                  >
                    SEND
                  </button>
                  <button type="button" className="btn-reset" onClick={onReset}>
                    RESET
                  </button>
                  <button
                    type="button"
                    className="btn-goAbout-about"
                    onClick={navigationToHomePage}
                  >
                    Go Home
                  </button>

                  <button
                    type="button"
                    className="btn-dashboard-about"
                    onClick={navigationToDashboardPage}
                  >
                    Go Dashboard
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <Box className="Box-about">
          <Box pt="30px" className="Box-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl onSubmit={handleSubmit(onSubmit)}>
                <FormLabel
                  style={{ fontFamily: "Verdana, sans-serif" }}
                  ml="50px"
                >
                  First Name
                </FormLabel>
                <Input
                  className="box-input"
                  placeholder="Rain"
                  size="md"
                  type="text"
                  name="firstName"
                  w="80%"
                  ml="50px"
                  bg="white"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {_.get("lastName.type", errors) === "required" && (
                  <p style={{ marginLeft: "50px" }}>This field is required</p>
                )}
                {_.get("lastName.type", errors) === "maxLength" && (
                  <p style={{ marginLeft: "50px" }}>
                    First name cannot exceed 20 characters
                  </p>
                )}
                {_.get("lastName.type", errors) === "pattern" && (
                  <p style={{ marginLeft: "50px" }}>
                    Alphabetical characters only
                  </p>
                )}
                <FormLabel ml="50px">Last Name</FormLabel>
                <Input
                  box-input
                  placeholder="Be"
                  size="md"
                  type="text"
                  name="lastName"
                  w="80%"
                  ml="50px"
                  bg="white"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/,
                  })}
                />
                {_.get("lastName.type", errors) === "required" && (
                  <p style={{ marginLeft: "50px" }}>This field is required</p>
                )}
                {_.get("lastName.type", errors) === "maxLength" && (
                  <p style={{ marginLeft: "50px" }}>
                    Last name cannot exceed 20 characters
                  </p>
                )}
                {_.get("lastName.type", errors) === "pattern" && (
                  <p style={{ marginLeft: "50px" }}>
                    Alphabetical characters only
                  </p>
                )}
                <Box mt="60px">
                  <Button
                    colorScheme="teal"
                    variant="solid"
                    ml="50px"
                    defaultValue="Submit"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    colorScheme="yellow"
                    ml="5px"
                    variant="solid"
                    onClick={onReset}
                  >
                    Reset
                  </Button>
                </Box>

                <Box mt="60px">
                  <Button
                    colorScheme="red"
                    variant="solid"
                    ml="50px"
                    onClick={navigationToHomePage}
                  >
                    Go Home Page
                  </Button>
                  <Button
                    colorScheme="blue"
                    ml="5px"
                    variant="solid"
                    onClick={navigationToDashboardPage}
                  >
                    Go Dashboard
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Router>
    </>
  );
}
export default About;
