describe('Quizzes View', () => {

  beforeEach(() => {
      cy.intercept('GET', "https://kvizo-be.herokuapp.com//api/v1/quizzes/1test", {
          statusCode: 200,
          ok: true,
          body: {
            data: 
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
              }
          }
        })

      cy.visit('localhost:3000/quiz/1test')
  })

  it('As a user, when I visit the quizzes page, if the quizzes are not able to load, I should see an error message.', () => {


  })

})