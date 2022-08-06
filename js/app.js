const result = document.getElementById('result')
const operation = document.getElementById('operation')
const arr = ['keydown', 'click']
const mediaWidth = window.matchMedia('(max-width: 550px)')

var max
if (mediaWidth.matches) {
	max = 11
} else {
	max = 15
}

arr.forEach(item => {
	let value1, value2, sign
 	document.addEventListener(item, e => {
		if (result.textContent.length >= max) {
			if ((e.key || e.target.id) == 'Backspace') {
				result.textContent = result.textContent.replace(/.$/, '')
			}
			if (e.target.id == 'reset') {
				result.textContent = '0'
			}
		} else {
			if (result.textContent == '0') {
				result.textContent = ''
			}
			if (result.textContent === 'Math error') {
				if ((e.key || e.target.id) == 'reset') {
					result.textContent = ''
				}
			} else {
				operation.textContent = ''
				switch (e.key || e.target.id) {
					case '0':
						result.textContent += 0
						break
					case '1':
						result.textContent += 1
						break
					case '2':
						result.textContent += 2
						break
					case '3':
						result.textContent += 3
						break
					case '4':
						result.textContent += 4
						break
					case '5':
						result.textContent += 5
						break
					case '6':
						result.textContent += 6
						break
					case '7':
						result.textContent += 7
						break
					case '8':
						result.textContent += 8
						break
					case '9':
						result.textContent += 9
						break
					case 'Backspace':
						result.textContent = result.textContent.replace(/.$/, '')
						break
					case '+':
						sign = '+'
						value1 = result.textContent
						result.textContent = ''
						break
					case '-':
						sign = '-'
						value1 = result.textContent
						result.textContent = ''
						break
					case '*':
						sign = '*'
						value1 = result.textContent
						result.textContent = ''
						break
					case '/':
						sign = '/'
						value1 = result.textContent
						result.textContent = ''
						break
					case '.':
						if (result.textContent == '') {
							result.textContent += '0.'
						} else {
							if (result.textContent.includes('.')) {
								return
							}
							result.textContent += '.'
						}
						break
					case 'reset':
						result.textContent = ''
						break
					case 'Enter':
						e.preventDefault()
						if (value1 == undefined) {
							result.textContent = ''
							break
						}
						value2 = result.textContent
						result.textContent = ''
						result.textContent = operations(value1, value2, sign)
						break
				}
			}
			if (result.textContent == '') {
				result.textContent = '0'
			}
			e.stopPropagation()
		}
	})
})

const operations = (value1, value2, sign) => {
	if (value1 == '') {
		value1 = 0
	}
	if (value2 == '') {
		value2 = 0
	}
	value1 = parseInt(value1)
	value2 = parseInt(value2)

	operation.textContent = `${value1}${sign}${value2}=`
	switch (sign) {
		case '+':
			return value1 + value2
			break
		case '-':
			return value1 - value2
			break
		case '*':
			return value1 * value2
			break
		case '/':
			if (value2 == 0) {
				return 'Math error'
			}
			return value1 / value2
			break
	}
}