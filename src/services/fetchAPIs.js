import { API_WS_ROOT, API_ROOT, HEADERS } from '../constants/index.js'

export const postNewQuiz = (quizHeaders) => {
    return fetch("https://kvizo-be.herokuapp.com//api/v1/quizzes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizHeaders),
      })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then(data => {
        return data.data.id
      })
      .catch((error) => {
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
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response.status)
          }
        })
        .then(data => {
          return data
        })
        .catch((error) => {
          return error
        })
}

export const getQuizzes = () => {
  return fetch("https://kvizo-be.herokuapp.com//api/v1/quizzes")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(data => {
      return data.data
    })
    .catch((error) => {
      return error
    })
}

export const getQuiz = (id) => {
  return fetch(`https://kvizo-be.herokuapp.com//api/v1/quizzes/${id}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.status)
    }
  })
  .then(data => {
    return data.data
  })
  .catch((error) => {
    return error
  })
}

export const postLiveQuestion = (question) => {
  return fetch(`${API_ROOT}/api/v1/questions`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(question),
    })
      .then(response => response.json())
      .then(data => {
        console.log('RESPONSE:', data)
        return data
      })
      .catch((error) => {
        console.error('Error:', error)
        return error
      })
}

