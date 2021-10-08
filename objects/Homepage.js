
class HomePage {
    visit() {
        cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
    }
    fillform() {
        cy.get("[type='text']").type(Cypress.env('username'))
        cy.get("[type='password']").type(Cypress.env('password'))
        cy.get("[type='submit']").click()
    }
    verifyElements() {
        cy.get('[id="logomini"]').should('be.exist')
        cy.get('h1').should('have.text', 'QA Portal Login')
        cy.get("[type='text']").should('be.exist')
        cy.get("[type='password']").should('be.exist')
        cy.get("[type='submit']").should('be.exist')
        //verifiying error messages
        cy.get('[class="help-block"]').should('have.text', 'No account found with that username.')
    }
    failed() {
        cy.get('[class="help-block"]').should('have.text', '')
    }

}

export default HomePage;