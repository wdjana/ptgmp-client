const validDelimiters = ['/', '-', '.', ':', ' '];

function utcToDateTimeStr(utc, dayDelimiter = '/') {

	if (!utc || isNaN(utc) || utc < 0) {
		return '';
	}

	if (!validDelimiters.includes(dayDelimiter)) {
		dayDelimiter = '/';
	}

	const date = new Date(utc * 1000);
	const options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	};

	const dateStr = date.toLocaleString([], options);
	return dateStr.replace(/\//g, dayDelimiter);
}

function utcToDateStr(utc, dayDelimiter = '/') {
	if (!utc || isNaN(utc) || utc < 0) {
		return '';
	}

	if (!validDelimiters.includes(dayDelimiter)) {
		dayDelimiter = '/';
	}

	const date = new Date(utc * 1000);
	const options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		// hour: '2-digit',
		// minute: '2-digit',
		// second: '2-digit',
		// hour12: false
	};

	const dateStr = date.toLocaleString([], options);
	return dateStr.replace(/\//g, dayDelimiter);
}

function utcToTimeStr(utc) {

	if (!utc || isNaN(utc) || utc < 0) {
		return '';
	}

	// if (!validDelimiters.includes(dayDelimiter)) {
	// 	dayDelimiter = '/';
	// }

	const date = new Date(utc * 1000);
	const options = {
		// year: 'numeric',
		// month: '2-digit',
		// day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	};

	return date.toLocaleString([], options);
	// return dateStr.replace(/\//g, dayDelimiter);
}



export {
	utcToDateStr,
	utcToDateTimeStr,
	utcToTimeStr
}
