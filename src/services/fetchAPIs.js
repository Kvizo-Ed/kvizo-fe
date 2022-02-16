import { API_ROOT } from '../constants/index.js'

export const postNewQuiz = (quizHeaders) => {
    return fetch("https://kvizo-be.herokuapp.com//api/v1/quizzes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizHeaders),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data.data.id)
          return data.data.id
        })
        .catch((error) => {
          console.error('Error:', error)
          return error
        })
}

export const patchQuizQuestions = (quizQuestions, quizId) => {
    return fetch(`https://kvizo-be.herokuapp.com//api/v1/quizzes/${quizId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizQuestions),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
}

export const getQuizzes = () => {
  return fetch("https://kvizo-be.herokuapp.com//api/v1/quizzes")
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      return data.data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

export const getQuiz = (id) => {
  return fetch(`https://kvizo-be.herokuapp.com//api/v1/quizzes/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      return data.data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

export const postLiveQuestion = (question) => {
  return fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
        return data
      })
      .catch((error) => {
        console.error('Error:', error)
        return error
      })
}

