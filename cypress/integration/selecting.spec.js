describe('Testbox max characters', ()=> {
    it('Displays appropriate remaining charachters', ()=>{
        cy.visit('http://localhost:3000/example-3');
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');
        
        cy.get('[data-cy="input-last-name"]').type('hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]').type(' my friend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');

    });

    it('Prevent user from typing more characters once max is exceeded', ()=>{
        cy.visit('http://localhost:3000/example-3');
        cy.get('[data-cy="input-last-name"]').type('24524523452523452345');
        cy.get('[data-cy="input-last-name"]').should('have.attr', 'value', '245245234525234');
    });
});