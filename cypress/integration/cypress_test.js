describe('My First Test', () => {

    it('successfully loads', () => {
        cy.visit('/');
    });

    it('check on the correct work the search form and form collection', () => {

        let count = '3';

        cy.get('input[name=search-value]').type(count);

        cy.get('input[type=submit]').click();
    
        cy.get('div.film-film').should('exist');
    });
});