/// <reference types="cypress" />
import 'cypress-axe';

describe('Contact page accessibility', () => {
  beforeEach(() => {
    cy.visit('/contact');
    cy.injectAxe();
  });

  it('should have no detectable accessibility violations on contact page', () => {
    cy.checkA11y();
  });
});
