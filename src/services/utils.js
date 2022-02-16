export const shuffle = (array) => {
		array.sort(() => Math.random() - 0.5)
		return array
}

export const getQuizId = (location) => {
	let loc = location.split('/')
	return loc[loc.length - 1]
}