/// <reference types="cypress" />
import 'cypress-axe';

describe('Home page accessibility', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should have no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });
});
