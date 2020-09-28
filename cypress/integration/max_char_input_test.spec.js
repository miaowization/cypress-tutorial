describe('Testbox max characters', ()=> {
    it('Displays appropriate remaining charachters', ()=>{
        cy.visit('http://localhost:3000/example-2');
        cy.get('span')
            .invoke('text')
            .should('equal', '15');
        
        cy.get('input').type('hello');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input').type(' my friend');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');

    });

    it('Prevent user from typing more characters once max is exceeded', ()=>{
        cy.visit('http://localhost:3000/example-2');
        cy.get('input').type('24524523452523452345');
        cy.get('input')
            .should('have.attr', 'value', '245245234525234');
    });
});