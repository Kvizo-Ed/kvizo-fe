describe('Home View', () => {

    beforeEach(() => {
      cy.visit('localhost:3000')
    })
  
    it('As a user, when I visit the home page, I should see a navigation bar with links to Home, Create, Quizzes, and About pages.', () => {
      cy.get('.navbar').contains('Home')
      cy.get('.navbar').contains('Create')
      cy.get('.navbar').contains('Quizzes')
      cy.get('.navbar').contains('About')
    })
  
    it('As a user, when I visit the home page, I should see a Build a quiz? section and be able to click the Multiple Choice icon.', () => {
      cy.get('.button-title').contains('Build a quiz?')
    })
  
    it('As a user, if I visit a url that does not exist, I should see a page not found message.', () => {
      cy.visit('localhost:3000/cheese')
      cy.get('.error-view').contains("Hmm")
      cy.visit('localhost:3000/quiz/60/cheese')
      cy.get('.error-view').contains("Hmm")
      cy.visit('localhost:3000/quizzes/cheese')
      cy.get('.error-view').contains("Hmm")
      cy.visit('localhost:3000/about/cheese')
      cy.get('.error-view').contains("Hmm")
    })

  })
  