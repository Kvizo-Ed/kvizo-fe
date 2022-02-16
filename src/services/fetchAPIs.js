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
    // return fetch(`https://kvizo-be.herokuapp.com//api/v2/quizzes/${quizId}`, {
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

