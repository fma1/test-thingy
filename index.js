var _ = require('lodash');
function convertParamsToESSearchConditions(passedConditions) {
    var values = _.map(passedConditions.dateFilters, function (date, dateName) {
        return date ? { key: dateName } : undefined;
    });
    var conditions = {
        values: values
    };
    var esSearch = { conditions: conditions };
    return esSearch;
}
var dateFilters = {
    'next_6_months': true,
    '6_to_12_months_from_now': true,
    '12_to_24_months_from_now': false,
    '24_plus': false
};
var conditions = {
    programId: '2',
    keywords: '',
    dateFilters: dateFilters
};
console.log(convertParamsToESSearchConditions(conditions));
