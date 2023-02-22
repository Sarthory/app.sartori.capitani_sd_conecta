/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Tests correct rendering of GitHub search app features', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.viewport(1366, 768);
  });

  context('Some functional proves for GitHub users search app', () => {
    it('Should render home page with no results', () => {
      cy.findByTestId('noResults').should('exist');
    });

    it('Should be able to search for a user on search bar typing (Enter/Return) key', () => {
      cy.findByTestId('searchInput').type('Sarthory{enter}');
      cy.wait(1500);
      cy.findByTestId('userCard').should('have.length', 1);
    });

    it('Should be able to search for a user on search bar clicking on search button', () => {
      cy.findByTestId('searchInput').type('Sarthory');
      cy.findByTestId('searchBtn').click();
      cy.wait(1500);
      cy.findByTestId('userCard').should('have.length', 1);
    });

    it('Should open details modal on user card click', () => {
      cy.findByTestId('searchInput').type('Sarthory{enter}');
      cy.wait(1500);
      cy.findByTestId('userCard').first().click();
      cy.wait(1500);
      cy.findByTestId('userModal').should('exist');
      cy.get('#userName').should('have.text', 'Felipe Sartori');
    });

    it('Should close the modal and clear the search', () => {
      cy.findByTestId('searchInput').type('Sarthory{enter}');
      cy.wait(1500);
      cy.findByTestId('userCard').first().click();
      cy.wait(1500);
      cy.findByTestId('userModal').should('exist');
      cy.get('.closeBtn').click();
      cy.findByTestId('userModal').should('not.exist');
      cy.findByTestId('headerGitHubLogo').click();
      cy.wait(1500);
      cy.findByTestId('noResults').should('exist');
    });

    it('Should not render pagination component with less than 21 results', () => {
      cy.findByTestId('searchInput').type('Sarthory{enter}');
      cy.wait(1500);
      cy.findByTestId('userCard').should('have.length', 1);
      cy.findByTestId('pagePagination').should('not.exist');
    });

    it('Shoud use the pagination to flow between pages', () => {
      cy.findByTestId('searchInput').type('reactjs{enter}');
      cy.wait(1500);
      cy.findByTestId('pagePagination').should('exist');
      cy.findByTestId('nextPageBtn').click();
      cy.wait(1500);
      cy.findByTestId('actualPage').should('have.text', 'Page: 2');
      cy.findByTestId('prevPageBtn').click();
      cy.wait(1500);
      cy.findByTestId('actualPage').should('have.text', 'Page: 1');
    });
  });
});
