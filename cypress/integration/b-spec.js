describe('b-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      debugger
      cy.visit(Cypress.env('HOST') || 'index.html')
    })

    it('has h2', () => {
      cy.contains('h2', 'test')
    })

    it('has Login button', () => {
      cy.visit('https://www.gobyride.com/mobile', {timeout: 10000});
      cy.contains('LOGIN');
    })
  })
})
