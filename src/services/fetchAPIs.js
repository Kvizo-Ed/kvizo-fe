export const postNewQuiz = (quizHeaders) => {
    fetch("https://kvizo-be.herokuapp.com//api/v1/quizzes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizHeaders),
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

export const patchQuizQuestions = (quizQuestions) => {
    fetch("https://kvizo-be.herokuapp.com//api/v1/quizzes", {
        method: 'Patch',
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
  fetch("https://kvizo-be.herokuapp.com//api/v1/quizzes")
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
