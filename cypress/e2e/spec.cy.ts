/* eslint-disable prefer-arrow-callback */
describe('test for testing', () => {
  it('shows team links', () => {
    cy.visit('http://localhost:5173');
    cy.get('a').first().should('have.text', 'New Jersey Devils');
    cy.get('#search').type('colo');
    cy.get('a').should('have.text', 'Colorado Avalanche').click();
    cy.get('span').should('contain.text', 'http://www.coloradoavalanche.com/');
    cy.get('a').contains('Stats').click();
    cy.get('#team-stats').within(() => {
      cy.get('h1').should('contain.text', 'Team Stats');
    });
    cy.get('a').contains('Roster').click();
    cy.get('#team-roster')
      .within(function() {
        cy.get('ul').within(function() {
          cy.get('a')
            .eq(1)
            .then(function(link) {
              const firstPlayer = link.text().split(' ')[0];
              console.log('firstPlayer', firstPlayer);
              cy.wrap(firstPlayer).as('player');
            });
        });
      })
      .then(function() {
        cy.get('#player-search')
          .type(this.player)
          .wait(2000)
          .then(function() {
            cy.get('#team-roster').within(function() {
              cy.get('a').first().click();
            });
          });
      });
    cy.get('#player-stats-table').contains('Team');
    cy.get('button').contains('Playoffs').click();
    cy.get('#player-stats-table').contains('Team');
  });
});

export {};
