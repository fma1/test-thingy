declare var require: any

const _ = require('lodash');

interface ESFrontEndDateRanges {
  [index: string]: boolean
  'next_6_months': boolean
  '6_to_12_months_from_now': boolean
  '12_to_24_months_from_now': boolean
  '24_plus': boolean
}

interface ESDateRange {
  [index: string]: ESDateType
  key: ESDateType
}

type ESDateType = 'next_6_months' | '6_to_12_months_from_now' | '12_to_24_months_from_now' | '24_plus';

interface ESFrontEndSearchConditions {
  programId: string
  keywords: string
  dateFilters: ESFrontEndDateRanges
}

interface ESSeach {
  conditions: ESSearchConditions
}

interface ESSearchConditions {

  values: ESDateRange[]
}



function convertParamsToESSearchConditions(passedConditions: ESFrontEndSearchConditions): ESSeach {
  const values: ESDateRange[] = _.map(passedConditions.dateFilters, (date: boolean, dateName: ESDateType): ESDateRange | undefined => {
    return date ? { key: dateName } : undefined;
  });
  
  const conditions: ESSearchConditions = {
  	values: values
  };

  const esSearch: ESSeach = { conditions };
  return esSearch;
}

const dateFilters: ESFrontEndDateRanges = {
  'next_6_months': true,
  '6_to_12_months_from_now': true,
  '12_to_24_months_from_now': false,
  '24_plus': false
};

const conditions: ESFrontEndSearchConditions = {
  programId: '2',
  keywords: '',
  dateFilters: dateFilters,
};

console.log(convertParamsToESSearchConditions(conditions));





