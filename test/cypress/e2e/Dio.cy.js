describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://github.com/login');
    cy.get('input[name="login"]').type('begundal22');
    cy.get('input[name="password"]').type('Kurniasandi2001').type('{enter}');
    

  })
})