'use strict';

import _ from 'lodash';

import countries from './country-list';

/**
 * Get a nicer country name for a 2 letter abbreviation
 * @param {string} abbr 2 letter ISO country code
 * @return {string} full country name
 */
export function getPrettyCountry (abbr) {
  return _.result(_.find(countries, { 'Code': abbr }), 'Name');
};

/**
 * Get a nicer name for a parameter code
 * @param {string} param system parameter code
 * @return {string} full parameter name for display
 */
export function getPrettyParameterName (param) {
  switch (param) {
    case 'pm25':
      return 'PM 2.5';
    case 'pm10':
      return 'PM 10';
    case 'co':
      return 'Carbon Monoxide';
    case 'so2':
      return 'Sulfur Dioxide';
    case 'no2':
      return 'Nitrous Dioxide';
    case 'bc':
      return 'Black Carbon';
    case 'o3':
      return 'Ozone';
  }
};
