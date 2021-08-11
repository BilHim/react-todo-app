function dueDate(date) {
	date = new Date(date);
	var now = new Date();
	var diff = date - now; // In milliseconds

	if (diff > -1000 * 60 * 60 * 24 && diff < 1000 * 60 * 60 * 24 * 31) {
		if (diff > 1000 * 60 * 60 * 24 * 21) return "In a month";
		if (diff > 1000 * 60 * 60 * 24 * 18) return "In 3 weeks";
		if (diff > 1000 * 60 * 60 * 24 * 10) return "In 2 weeks";
		if (diff > 1000 * 60 * 60 * 24 * 6) return "In a week";
		if (diff > 1000 * 60 * 60 * 24 * 1) {
			var dayDiff = Math.ceil(diff / 1000 / 60 / 60 / 24);
			return "In " + dayDiff + " days";
		}
		var tomorrow = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() + 1
		);
		if (tomorrow.getDate() === date.getDate()) return "Tomorrow";
		if (now.getDate() === date.getDate()) return "Today";
	}
	return date.toLocaleDateString();
}

function isToday(date) {
	date = new Date(date);
	var now = new Date();
	var diff = date - now;
	if (
		Math.abs(diff) <= 1000 * 60 * 60 * 24 &&
		now.getDate() === date.getDate()
	)
		return true;
	return false;
}

function isTomorrow(date) {
	date = new Date(date);
	var now = new Date();
	var tomorrow = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 1
	);
	var diff = date - tomorrow;
	if (
		Math.abs(diff) <= 1000 * 60 * 60 * 24 &&
		tomorrow.getDate() === date.getDate()
	)
		return true;
	return false;
}

// From https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
function getWeek(d) {
	// Copy date so don't modify original
	d = new Date(d);
	d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

	// Set to nearest Thursday: current date + 4 - current day number
	// Make Sunday's day number 7
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
	// Get first day of year
	var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	// Calculate full weeks to nearest Thursday
	var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
	// Return array of year and week number
	return [d.getUTCFullYear(), weekNo];
}

function isThisWeek(date) {
	date = new Date(date);
	var now = new Date();

	if (
		getWeek(date)[0] === getWeek(now)[0] &&
		getWeek(date)[1] === getWeek(now)[1] &&
		!isTomorrow(date) &&
		!isToday(date)
	)
		return true;
	return false;
}

function isNextWeek(date) {
	date = new Date(date);
	var now = new Date();
	var nextWeek = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 7
	);

	if (
		getWeek(date)[0] === getWeek(nextWeek)[0] &&
		getWeek(date)[1] === getWeek(nextWeek)[1] &&
		!isTomorrow(date) &&
		!isToday(date)
	)
		return true;
	return false;
}

function dueDateCompare(a, b) {
	if (a.dueDate < b.dueDate) {
		return -1;
	}
	if (a.dueDate > b.dueDate) {
		return 1;
	}
	return 0;
}

export { dueDate, isToday, isTomorrow, isThisWeek, isNextWeek, dueDateCompare };
