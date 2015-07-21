'use strict';

module.exports = function (list) {
	if (!Array.isArray(list)) {
		throw new TypeError('Expected an array');
	}

	var slot1 = 0, slot2 = 0;
	var temp;

	while(!isSorted(list)) {
		slot1 = Math.floor(Math.random() * list.length);
		slot2 = Math.floor(Math.random() * list.length);

		temp = list[slot1];
		list[slot1] = list[slot2];
		list[slot2] = temp;
	}

	return list;
};

function isSorted(list) {
	for(var i = 0, ii = list.length; i < ii; i++) {
		if(list[i] > list[i + 1]) {
			return false;
		}
	}
	return true;
}
