const form = document.querySelector('form')
const emailInput = document.querySelector('form #email')
const passInput = document.querySelector('form #password')
const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const notValidCharacters = ['#', '!', '?', '%', '$', '&', '[', ']', ' ']

function isPattern(userInput) {
	return emailExpression.test(userInput)
}

function validCharacters(userInput, characters) {
	let valid = true
	characters.forEach((char) => {
		if (userInput.includes(char)) {
			valid = false
			return
		}
	})

	return valid
}

function beforeDomainValid(userInput) {
	const atSymbol = userInput.indexOf('@')
	return userInput.substring(0, atSymbol).length >= 3
}

function validateUppercase(userInput) {
	for (let i = 0; i < userInput.length; i += 1) {
		if (userInput[i] >= 'A' && userInput[i] <= 'Z') {
			return true
		}
	}
	return false
}

function validateLength(userInput, min, max) {
	return userInput.length >= min && userInput.length <= max
}

function addInputError(input, message) {
	input.classList.add('input-error')
	if (input.nextElementSibling) {
		input.nextElementSibling.remove()
	}
	input.insertAdjacentHTML(
		'afterend',
		`<span class="error-text">${message}</span>`
	)
}

function removeInputError(input) {
	input.classList.remove('input-error')
	const errorSpan = input.nextElementSibling
	if (errorSpan && errorSpan.classList.contains('error-text')) {
		errorSpan.parentElement.removeChild(errorSpan)
	}
}

emailInput.addEventListener('blur', () => {
	const value = emailInput.value
	if (value === '') {
		addInputError(emailInput, 'Field is required')
	} else if (!isPattern(value)) {
		addInputError(emailInput, 'It`s not a valid email format')
	} else if (!validCharacters(value, notValidCharacters)) {
		addInputError(emailInput, 'Contains not valid characters')
	} else if (!validateLength(value, 10, 50)) {
		addInputError(emailInput, 'Length is not valid')
	} else if (!beforeDomainValid(value)) {
		addInputError(emailInput, 'Should contain more characteres before @')
	}
})

emailInput.addEventListener('focus', () => removeInputError(emailInput))

passInput.addEventListener('blur', () => {
	const value = passInput.value
	if (value === '') {
		addInputError(passInput, 'Field is required')
	} else if (!validCharacters(value, notValidCharacters)) {
		addInputError(passInput, 'Contains not valid characters')
	} else if (!validateLength(value, 8, 50)) {
		addInputError(passInput, 'Length is not valid')
	} else if (!validateUppercase(value)) {
		addInputError(passInput, 'Should at least contain one uppercase letter')
	}
})

passInput.addEventListener('focus', () => removeInputError(passInput))

form.addEventListener('submit', (evt) => {
	evt.preventDefault()
	const errorSpans = document.querySelectorAll('.error-text')
	let alertError = ''
	errorSpans.forEach((span) => {
		alertError += `${span.previousElementSibling.name}: ${span.textContent} \n`
	})
	if (alertError !== '') {
		alert(alertError)
	} else if (emailInput.value === '' || passInput.value === '') {
		alert('All inputs are required')
	} else {
		alert(`Email: ${emailInput.value} \n Password: ${passInput.value}`)
	}
})
