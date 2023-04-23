const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passInput = document.querySelector('#password')
const lastnameInput = document.querySelector('#lastname')
const confirmInput = document.querySelector('#confirm')
const dniInput = document.querySelector('#dni')
const addressInput = document.querySelector('#address')
const phoneInput = document.querySelector('#phone')
const locationInput = document.querySelector('#location')
const postalInput = document.querySelector('#postal')
const dateInput = document.querySelector('#date')
const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const notValidCharacters = ['#', '!', '?', '%', '$', '&', '[', ']', ' ']

function isPattern(userInput) {
	return emailExpression.test(userInput)
}

function validateLength(userInput, min, max) {
	return userInput.trim().length >= min && userInput.length <= max
}

function validateLetters(userInput) {
	for (let i = 0; i < userInput.length; i++) {
		const charCode = userInput.charCodeAt(i)
		if (
			(charCode < 65 || charCode > 90) &&
			(charCode < 97 || charCode > 122) &&
			charCode !== 32
		) {
			return false
		}
	}
	return true
}

function validateNumbers(userInput) {
	for (let i = 0; i < userInput.length; i += 1) {
		if (isNaN(parseInt(userInput[i]))) {
			return false
		}
	}
	return true
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

function isAlphanumeric(userInput) {
	for (let i = 0; i < userInput.length; i++) {
		const charCode = userInput.charCodeAt(i)
		const isLetter =
			(charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
		const isNumber = charCode >= 48 && charCode <= 57
		const isSpecial =
			(charCode >= 33 && charCode <= 47) ||
			(charCode >= 58 && charCode <= 64) ||
			(charCode >= 91 && charCode <= 96) ||
			(charCode >= 123 && charCode <= 126)
		if (!isLetter && !isNumber && isSpecial) {
			return false
		}
	}
	return true
}

function amountOfNumbers(userInput) {
	let quantity = 0
	for (let i = 0; i < userInput.length; i += 1) {
		if (!isNaN(parseInt(userInput[i]))) {
			quantity += 1
		}
	}
	return quantity
}

function amountOfLetters(userInput) {
	let quantity = 0
	for (let i = 0; i < userInput.length; i++) {
		const charCode = userInput.charCodeAt(i)
		if (
			!(
				(charCode < 65 || charCode > 90) &&
				(charCode < 97 || charCode > 122) &&
				charCode !== 32
			)
		) {
			quantity += 1
		}
	}
	return quantity
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

nameInput.addEventListener('blur', () => {
	const value = nameInput.value
	if (value.trim() === '') {
		addInputError(nameInput, 'Field is required')
	} else if (!validateLetters(value)) {
		addInputError(nameInput, 'Should contain only letters')
	} else if (!validateLength(value, 3, 50)) {
		addInputError(
			nameInput,
			'Should have at least 3 letters and a maximum of 50'
		)
	}
})

nameInput.addEventListener('focus', () => removeInputError(nameInput))

lastnameInput.addEventListener('blur', () => {
	const value = lastnameInput.value
	if (value.trim() === '') {
		addInputError(lastnameInput, 'Field is required')
	} else if (!validateLetters(value)) {
		addInputError(lastnameInput, 'Should contain only letters')
	} else if (!validateLength(value, 3, 50)) {
		addInputError(
			lastnameInput,
			'Should have at least 3 letters and a maximum of 50'
		)
	}
})

lastnameInput.addEventListener('focus', () => removeInputError(lastnameInput))

emailInput.addEventListener('blur', () => {
	const value = emailInput.value
	if (value.trim() === '') {
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
	if (value.trim() === '') {
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

confirmInput.addEventListener('blur', () => {
	const value = confirmInput.value
	if (value.trim() === '') {
		addInputError(confirmInput, 'Field is required')
	} else if (value !== passInput.value) {
		addInputError(confirmInput, 'Should match the password')
	}
})

confirmInput.addEventListener('focus', () => removeInputError(confirmInput))

dniInput.addEventListener('blur', () => {
	const value = dniInput.value
	if (value.trim() === '') {
		addInputError(dniInput, 'Field is required')
	} else if (!validateNumbers(value)) {
		addInputError(dniInput, 'Should contain only numbers')
	} else if (!validateLength(value, 8, 10)) {
		addInputError(dniInput, 'Should have at least 8 numbers and max 10')
	}
})

dniInput.addEventListener('focus', () => removeInputError(dniInput))

addressInput.addEventListener('blur', () => {
	const value = addressInput.value
	const spaceLastIndex = value.lastIndexOf(' ')
	const validSpace =
		validateNumbers(value.substring(spaceLastIndex + 1, spaceLastIndex + 2)) &&
		spaceLastIndex > 0
	if (value.trim() === '') {
		addInputError(addressInput, 'Field is required')
	} else if (!isAlphanumeric(value) || !validSpace) {
		addInputError(addressInput, 'Only letters, numbers and space between')
	} else if (amountOfLetters(value) < 3) {
		addInputError(addressInput, 'Should containt at least 3 letters')
	} else if (amountOfNumbers(value) < 2 || amountOfNumbers(value) > 5) {
		addInputError(addressInput, 'Should contain between 2 and 5 numbers')
	}
})

addressInput.addEventListener('focus', () => removeInputError(addressInput))

dateInput.addEventListener('blur', () => {
	const value = dateInput.value
	const year = value.substring(0, 4)
	const currentYear = 2023
	if (value.trim() === '') {
		addInputError(dateInput, 'Field is required')
	} else if (currentYear - parseInt(year) < 16) {
		addInputError(dateInput, 'You should have at least 16 years old')
	}
})

dateInput.addEventListener('focus', () => removeInputError(dateInput))

phoneInput.addEventListener('blur', () => {
	const value = phoneInput.value
	if (value.trim() === '') {
		addInputError(phoneInput, 'Field is required')
	} else if (!validateNumbers(value)) {
		addInputError(phoneInput, 'Should only contain numbers')
	} else if (!validateLength(value, 10, 10)) {
		addInputError(phoneInput, 'Should contain exactly 10 numbers')
	}
})

phoneInput.addEventListener('focus', () => removeInputError(phoneInput))

locationInput.addEventListener('blur', () => {
	const value = locationInput.value
	if (value.trim() === '') {
		addInputError(locationInput, 'Field is required')
	} else if (!isAlphanumeric(value)) {
		addInputError(locationInput, 'Only letter, numbers and space')
	} else if (amountOfLetters(value) < 3) {
		addInputError(locationInput, 'Should contain at least 3 letters')
	} else if (amountOfNumbers(value) > 5) {
		addInputError(locationInput, 'Should contain max 5 numbers')
	} else if (!validateLength(value, 3, 25)) {
		addInputError(
			locationInput,
			'Should contain at least 3 characters and max 25 '
		)
	}
})

locationInput.addEventListener('focus', () => removeInputError(locationInput))

postalInput.addEventListener('blur', () => {
	const value = postalInput.value
	if (value.trim() === '') {
		addInputError(postalInput, 'Field required')
	} else if (!validateNumbers(value)) {
		addInputError(postalInput, 'Should only contain numbers')
	} else if (!validateLength(value, 4, 5)) {
		addInputError(postalInput, 'Should contain between 4 and 5 numbers')
	}
})

postalInput.addEventListener('focus', () => removeInputError(postalInput))
