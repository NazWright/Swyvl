import React from "react";
import AuthenticationSelector from "./AuthenticationSelector";
import * as cy from "cypress/react18";

describe("<AuthenticationSelector />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AuthenticationSelector />);
  });
});
