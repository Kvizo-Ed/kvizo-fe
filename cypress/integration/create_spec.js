describe('Create View', () => {

    beforeEach(() => {
      cy.visit('localhost:3000/create')
    })
  
    it('As a user, when I visit the create page, I should see a form with inputs for Quiz Title, Subject, and Topic.', () => {
        cy.get('form')
        cy.get('.quiz-form-title-input').invoke('attr', 'placeholder').should('contain', 'Quiz Title')
        cy.get('.quiz-form-header-field').contains('label', "Subject")
        cy.get('.quiz-form-header-field').contains('label', "Topic")
    })
    
    it('As a user, when I visit the create page, I should see a drop down for Grade level and be able to select K-12.', () => {
        cy.get('.quiz-form-header-field').contains('label', "Grade level")
        cy.get('.quiz-form-header-input[name="grade"]').select('K')
        for (let i = 1; i < 13; i++) {
            cy.get('.quiz-form-header-input[name="grade"]').select(`${i}`)
        }  
    })
    
    // // it('As a user, when I visit the create page, the Create Quiz! button should be disabled until I have filled in all fields.', () => {
    //     // TBD
    // // })
  
    it('As a user, when I visit the create page and fill in all fields, I should be able to click the Create Quiz! button.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()
    })
  
    it('As a user, when I click the Create Quiz! button, I should see the title I just input and a form to input a question, correct answer, and three incorrect answers.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.quiz-form-info-title').contains("Cypress Quiz Title")
        cy.get('form')
        cy.get('.quiz-form-answer-label').contains('label', "Correct Answer")
        cy.get('.quiz-form-answer-label').contains('label', "Incorrect Answer 1")
        cy.get('.quiz-form-answer-label').contains('label', "Incorrect Answer 2")
        cy.get('.quiz-form-answer-label').contains('label', "Incorrect Answer 3")
    })
  
    it('As a user, when I click the Create Quiz! button, if the quiz does not save, I should see an error message.', () => {
        cy.intercept('POST', "https://kvizo-be.herokuapp.com//api/v1/quizzes", {
            statusCode: 404,
            ok: false
        })

        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()
        cy.get('.error-view').contains("Oops!")
    })
    
    it('As a user, when I click the Create Quiz! button, if I click the Save Quiz button whithout completing all fields, I should see an error message and the missing fields should be highlighted.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.save-question').click()
        cy.get('.show').contains("Please complete all fields")
        cy.get('.show-0')
    })
        
    it('As a user, when I click the Create Quiz! button, I should see an info icon that opens a modal explaining that responses are randomized.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.info-btn').click()
        cy.get('h3').contains("Multiple choice answer options will be randomized")
        
    })
        
    it('As a user, I should be able to close the modal by clicking the X.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.info-btn').click()
        cy.get('.close-modal').click()
        cy.get('.quiz-form-title-input')
    })
            
    it('As a user, when I click the Create Quiz! button, input all fields, and click Save Question, I should see all fields reset and the question number advance.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.quiz-form-question-number').contains('1')
        
        cy.get('.quiz-form-question-input').type("Cypress Question 1")
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').type("Cypress Correct Answer")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').type("Cypress Incorrect Answer 1")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').type("Cypress Incorrect Answer 2")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').type("Cypress Incorrect Answer 3")
        
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').should('have.value', "Cypress Correct Answer")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').should('have.value', "Cypress Incorrect Answer 1")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').should('have.value', "Cypress Incorrect Answer 2")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').should('have.value', "Cypress Incorrect Answer 3")
        
        cy.get('.save-question').click()
        cy.get('.quiz-form-question-number').contains('2')
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').should('have.value', "")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').should('have.value', "")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').should('have.value', "")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').should('have.value', "")
    })
                
    it('As a user, when I click the Create Quiz! button, I should be able to click the Preview button and see the quesiton I input and answers in randomized order.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.quiz-form-question-input').type("Cypress Question 1")
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').type("Cypress Correct Answer")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').type("Cypress Incorrect Answer 1")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').type("Cypress Incorrect Answer 2")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').type("Cypress Incorrect Answer 3")
        
        cy.get('.preview').click()

        cy.get('.quiz-question-description').contains("Cypress Question 1")
        cy.get('.answer').contains("Cypress Correct Answer")
        cy.get('.answer').contains("Cypress Incorrect Answer 1")
        cy.get('.answer').contains("Cypress Incorrect Answer 2")
        cy.get('.answer').contains("Cypress Incorrect Answer 3")
    })
                
    it('As a user, I should be able to close the preview by clicking the X.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.quiz-form-question-input').type("Cypress Question 1")
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').type("Cypress Correct Answer")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').type("Cypress Incorrect Answer 1")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').type("Cypress Incorrect Answer 2")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').type("Cypress Incorrect Answer 3")
        
        cy.get('.preview').click()
        cy.get('.close-btn').click()
        cy.get('.quiz-form-question-input')       
    })
                
    it('As a user, when I click the Create Quiz! button, input all fields, and click Save Question, if the question does not save, I should see an error message and the question number should not advance.', () => {
        cy.intercept('PATCH', "", {
            statusCode: 404,
            ok: false
        }) 

        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.quiz-form-question-input').type("Cypress Question 1")
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').type("Cypress Correct Answer")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').type("Cypress Incorrect Answer 1")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').type("Cypress Incorrect Answer 2")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').type("Cypress Incorrect Answer 3")
        cy.get('.save-question').click()

        cy.get('.error-view').contains("Oops!")
    })
  
    it('As a user, when I click the Create Quiz! button, input all fields, and click Save Question, I should see a Finish Creating Quiz button appear.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.quiz-form-question-input').type("Cypress Question 1")
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').type("Cypress Correct Answer")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').type("Cypress Incorrect Answer 1")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').type("Cypress Incorrect Answer 2")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').type("Cypress Incorrect Answer 3")
        cy.get('.save-question').click()

        cy.get('.btn').contains("Finish Creating Quiz")
    })
  
    it('As a user, when i click the Finish Creating Quiz button, I should be taken to the quiz view for that new quiz.', () => {
        cy.get('.quiz-form-title-input').type("Cypress Quiz Title")
        cy.get('.quiz-form-header-input[name="subject"]').type("Cypress Quiz Subject")
        cy.get('.quiz-form-header-input[name="topic"]').type("Cypress Quiz Topic")
        cy.get('.quiz-form-header-input[name="grade"]').select(8)
        cy.get('.create').click()

        cy.get('.quiz-form-question-input').type("Cypress Question 1")
        cy.get('.quiz-form-answer-input[name="correctAnswer"]').type("Cypress Correct Answer")
        cy.get('.quiz-form-answer-input[name="possibleAnswerB"]').type("Cypress Incorrect Answer 1")
        cy.get('.quiz-form-answer-input[name="possibleAnswerC"]').type("Cypress Incorrect Answer 2")
        cy.get('.quiz-form-answer-input[name="possibleAnswerD"]').type("Cypress Incorrect Answer 3")
        cy.get('.save-question').click()

        cy.get('.btn').contains("Finish Creating Quiz").click()
        cy.url().should('include', 'quiz')
        cy.get('.take-quiz').contains("Take Quiz")

    })

  })
  