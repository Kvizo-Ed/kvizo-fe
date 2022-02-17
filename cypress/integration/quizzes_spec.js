describe('Quizzes View', () => {

    beforeEach(() => {
      cy.visit('localhost:3000')
    })
  
    it('As a user, when I visit the quizzes page, if the quizzes are not able to load, I should see an error message.', () => {
      cy.intercept('GET', "https://kvizo-be.herokuapp.com//api/v1/quizzes", {
        statusCode: 404,
        ok: false
      })

      cy.get('.navbar').contains('Quizzes').click()
      cy.get('.error-view').contains("Oops!")

    })
  
    it('As a user, when I visit the quizzes page, I should see a Loading message until the quizzes appear.', () => {
      cy.get('.navbar').contains('Quizzes').click()
      cy.get('p').contains('Loading')

    })
  
    it('As a user, when I visit the quizzes page, after the quizzes load, I should see the title, subject, topic, and grade level for each quiz.', () => {
      cy.intercept('GET', "https://kvizo-be.herokuapp.com//api/v1/quizzes", {
        statusCode: 200,
        ok: true,
        body: {
          data: [
            {
              "id": "1test",
              "type": "quiz",
              "attributes": {
                  "subject": "Programming",
                  "topic": "Loops",
                  "title": "For vs While",
                  "grade": 12,
                  "user_id": 1,
                  "quiz_type": "multi",
                  "questions": [{"a": "question1"}, {"b": "question2"}]
              }
            },
            {
              "id": "2test",
              "type": "quiz",
              "attributes": {
                  "subject": "English",
                  "topic": "Verb Tenses",
                  "title": "Past, Present, Future",
                  "grade": 7,
                  "user_id": 1,
                  "quiz_type": "multi",
                  "questions": [{"c": "question3"}, {"d": "question4"}]
              }
            }
          ]
        }
      })

      cy.get('.navbar').contains('Quizzes').click()

      cy.get('.title').should('have.length', 2)
      cy.get('.title').first().contains("For vs While")
      cy.get('.details').contains("Programming")
      cy.get('.details').contains("English")
      cy.get('.details').contains("Loops")
      cy.get('.details').contains("Verb Tenses")
      cy.get('.details').contains("12")
      cy.get('.details').contains("7")
        
    })

    it('As a user, when I visit the quizzes page, I should be able to click a quiz and be taken to that quiz page .', () => {

      cy.intercept('GET', "https://kvizo-be.herokuapp.com//api/v1/quizzes", {
        statusCode: 200,
        ok: true,
        body: {
          data: [
            {
              "id": "1test",
              "type": "quiz",
              "attributes": {
                  "subject": "Programming",
                  "topic": "Loops",
                  "title": "For vs While",
                  "grade": 12,
                  "user_id": 1,
                  "quiz_type": "multi",
                  "questions": [{"a": "question1"}, {"b": "question2"}]
              }
            },
            {
              "id": "2test",
              "type": "quiz",
              "attributes": {
                  "subject": "English",
                  "topic": "Verb Tenses",
                  "title": "Past, Present, Future",
                  "grade": 7,
                  "user_id": 1,
                  "quiz_type": "multi",
                  "questions": [{"c": "question3"}, {"d": "question4"}]
              }
            }
          ]
        }
      })

      cy.get('.navbar').contains('Quizzes').click()
      cy.get('.details').contains("Programming").click()
      cy.url().should('include', 'quiz/1test')

    })

})
  


  