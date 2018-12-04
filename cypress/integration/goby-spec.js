describe('goby-spec', () => {
    describe('page', () => {
      beforeEach(() => {
        debugger
        cy.visit('https://www.gobyride.com/mobile', {timeout: 60000});
      })
  
      it('has Login button', () => {
        cy.contains('LOGIN', {timeout: 60000});
      })
    })
  })