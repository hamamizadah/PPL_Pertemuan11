describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://kompen.jti.polinema.ac.id')
    cy.get('input[id="btn_mahasiswa"]').click();
    cy.get('input[name="username"]').type('muhammadzadah');
    cy.get('input[name="password"]').type('hamami123').type('{enter}');
    cy.get('a[href="http://kompen.jti.polinema.ac.id/mahasiswa/cekKompen?nim=2041720028"]').click();
  })
})