context('Test', () => {
    it('should works ', function () {
        cy.visit('http://app.bas24.pl');
        cy.location('href').should('contain', 'app.bas24.pl');
        cy.get('input[name="username"]').focus().type('asdasddd').should('have.value', 'asdasddd')
    });

    it('should also works ', function () {
        cy.visit('http://app.bas24.pl');
        cy.location('href').should('contain', 'app.bas24.pl');
        cy.get('input[name="username"]').type('asdasddd').should('have.value', 'asdasddd')
    });
})
