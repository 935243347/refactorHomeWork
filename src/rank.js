function voyageRisk (voyage) {
  let result = 1;
  result += voyage.length > 4 ? 2 : 0;
  result += voyage.length > 8 ? voyage.length - 8 : 0;
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    result += 4;
  }
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function isVoyageAndHistoryInChina(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  result += history.length < 5 ? 4 : 0;
  result += history.filter(v => v.profit < 0).length;
  result -= isVoyageAndHistoryInChina(voyage, history) ? 2 : 0;
  return Math.max(result, 0);
}

function voyageAndHistoryInChina(voyage, history) {
  let result = 0;
  if (isVoyageAndHistoryInChina(voyage, history)) {
    result += 3;
    result += history.length > 10 ? 1 : 0;
    result += voyage.length > 12 ? 1 : 0;
    result -= voyage.length > 18 ? 1 : 0;
  } else {
    result += history.length > 8 ? 1 : 0;
    result -= voyage.length > 14 ? 1: 0;
  }
  return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  result += voyage.zone === 'china' ? 1 : 0;
  result += voyage.zone === 'east-indies' ? 1 : 0;
  result += voyageAndHistoryInChina(voyage, history);
  return result;
}

function rating (voyage, history) {
  const voyageProfitFactorNumber = voyageProfitFactor(voyage, history);
  const voyageRiskNumber = voyageRisk(voyage);
  const captainHistoryRiskNumber = captainHistoryRisk(voyage, history);
  return (voyageProfitFactorNumber * 3 > (voyageRiskNumber + captainHistoryRiskNumber * 2)) ? 'A' : 'B';
}

module.exports = {
  rating,
};
