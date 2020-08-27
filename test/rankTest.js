import {rating} from "../src/rank";

const rankTest = require('ava');

rankTest('should_return_B_when_rating_given_voyage_length_19_empty_history', t => {
  const voyage = {
    zone: 'west-indies',
    length: 19,
  };
  const history = [];
  let result = rating(voyage, history);
  t.is("B", result);
})

rankTest('should_return_B_when_rating_given_voyage_length_3_empty_history', t => {
  const voyage = {
    zone: 'west-indies',
    length: 3,
  };
  const history = [];
  let result = rating(voyage, history);
  t.is("B", result);
})

rankTest('should_return_B_when_rating_given_voyage_length_3_history_4', t => {
  const voyage = {
    zone: 'china',
    length: 3,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  let result = rating(voyage, history);
  t.is("A", result);
})
