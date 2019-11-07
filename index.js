
'use strict';

exports.validateNumber = function (number) {
    if (!isNaN(number)) {
        if (number > 0 && (number % 1 == 0)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};