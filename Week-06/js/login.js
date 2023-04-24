const form = document.querySelector('form')
const emailInput = document.querySelector('form #email')
const passInput = document.querySelector('form #password')
const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const notValidEmailChars = [
	'!',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'-',
	'+',
	'=',
	'{',
	'}',
	'[',
	']',
	'|',
	'\\',
	';',
	':',
	"'",
	'"',
	'<',
	'>',
	',',
	'/',
	'?',
]

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

function amountOfNumbers(userInput) {
	let quantity = 0
	for (let i = 0; i < userInput.length; i += 1) {
		if (!isNaN(parseInt(userInput[i]))) {
			quantity += 1
		}
	}
	return quantity
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
	} else if (!validCharacters(value, notValidEmailChars)) {
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
	} else if (!isAlphanumeric(value) || value.includes(' ')) {
		addInputError(passInput, 'Contains not valid characters')
	} else if (!validateLength(value, 8, 50)) {
		addInputError(passInput, 'Length is not valid')
	} else if (!validateUppercase(value)) {
		addInputError(passInput, 'Should at least contain one uppercase letter')
	} else if (amountOfNumbers(value) === 0) {
		addInputError(passInput, 'Should at least contain one number')
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
