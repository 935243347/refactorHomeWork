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

rankTest('should_return_A_when_rating_given_voyage_length_3_history_4_include_1_china', t => {
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

rankTest('should_return_B_when_rating_given_voyage_length_22_history_1', t => {
  const voyage = {
    zone: 'china',
    length: 22,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ];
  let result = rating(voyage, history);
  t.is("B", result);
})

rankTest('should_return_B_when_rating_given_voyage_length_13_history_5_with_profit_-1_zone_east-indies', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: -1,
    },
    {
      zone: 'east-indies',
      profit: -1,
    },
    {
      zone: 'east-indies',
      profit: -1,
    },
    {
      zone: 'east-indies',
      profit: -1,
    },
    {
      zone: 'east-indies',
      profit: -1,
    }
  ];
  let result = rating(voyage, history);
  t.is("B", result);
})

rankTest('should_return_A_when_rating_given_voyage_length_13_history_5_profit_-1_zone_china', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const history = [
    {
      zone: 'china',
      profit: -1,
    },
    {
      zone: 'china',
      profit: -1,
    },
    {
      zone: 'china',
      profit: -1,
    },
    {
      zone: 'china',
      profit: -1,
    },
    {
      zone: 'china',
      profit: -1,
    }
  ];
  let result = rating(voyage, history);
  t.is("A", result);
})

rankTest('should_return_A_when_rating_given_voyage_length_13_history_5_profit_1_zone_china', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    }
  ];
  let result = rating(voyage, history);
  t.is("A", result);
})