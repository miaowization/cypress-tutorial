describe('Testbox max characters', ()=> {
    it('Displays appropriate remaining charachters', ()=>{
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('inputLastName')

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15');
        
        cy.get('@inputLastName').type('hello');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@inputLastName').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');

    });

    it('Prevent user from typing more characters once max is exceeded', ()=>{
        cy.visit('http://localhost:3000/example-3');
        cy.get('[data-cy="input-last-name"]')
        .as('inputLastName')
        cy.get('@inputLastName').type('24524523452523452345');
        cy.get('@inputLastName').should('have.attr', 'value', '245245234525234');
    });
});