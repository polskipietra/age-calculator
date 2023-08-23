// input date values]
const input = document.querySelector('.input');
const yearInput = document.querySelector('.year');
const monthInput = document.querySelector('.month');
const dayInput = document.querySelector('.day');
const inputEssentials = document.querySelector('.input-essentials');
const errorMessage = document.querySelectorAll('.error-message');
// button
const calcButton = document.querySelector('.calc-button');
// display date values
const displayYears = document.querySelector('.calc-years');
const displayMonths = document.querySelector('.calc-months');
const displayDays = document.querySelector('.calc-days');
// functions
const ageCalc = () => {
	// values from input
	const yearValue = parseInt(yearInput.value);
	const monthValue = parseInt(monthInput.value);
	const dayValue = parseInt(dayInput.value);
	// date elements
	const currentYearDate = new Date().getFullYear();
	const currentMonthDate = new Date().getMonth();
	const currentDayDate = new Date().getDate();
	// const yearOfBirth = new Date(yearValue);
	// const monthOfBirth = new Date(monthValue);
	// const dayOfBirth = new Date(dayValue);

	let yearDiff = '';
	let monthDiff = '';
	let dayDiff = '';

	const validYearValue = yearValue > 1900 && yearValue < currentYearDate;
	const validMonthValue = monthValue > 0 && monthValue <= 12;
	const validDayValue = dayValue > 0 && dayValue <= 31;

	// reset errors 
	errorMessage.forEach(message => {
		message.textContent = ''
		message.classList.add('error-message')
	});

	if (input.value != '') {
		if (!validYearValue) {
			errorMessage[2].textContent = 'invalid year';
			errorMessage[2].classList.add('error');
		}
		if (!validMonthValue) {
			errorMessage[1].textContent = 'invalid month';
			errorMessage[1].classList.add('error');
		}
		if (!validDayValue) {
			errorMessage[0].textContent = 'invalid day';
			errorMessage[0].classList.add('error');
		}

		if (validYearValue&& validMonthValue&& validDayValue) {
			yearDiff = currentYearDate - yearValue;
			monthDiff = currentMonthDate - (monthValue - 1);
			dayDiff = currentDayDate - dayValue;

			if (dayDiff < 0) {
				monthDiff--;
				const daysInLastMonth = new Date(currentYearDate, currentMonthDate, 0).getDate();
				dayDiff += daysInLastMonth;
			}

			if (monthDiff < 0) {
				yearDiff--;
				monthDiff += 12;
			}

			displayYears.textContent = yearDiff;
			displayMonths.textContent = monthDiff;
			displayDays.textContent = dayDiff;
			yearInput.value = '';
			monthInput.value = '';
			dayInput.value = '';
		}
	} else {
		errorMessage.forEach(message => {
			message.textContent = 'This field is required';
			message.classList.add('error');
		});
	}
};

calcButton.addEventListener('click', ageCalc);


