function voyageRisk (voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
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
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (isVoyageAndHistoryInChina(voyage, history)) {
    result -= 2;
  }
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
  result += (voyage.zone === 'china') ? 1 : 0;
  result += (voyage.zone === 'east-indies') ? 1 : 0;
  result += voyageAndHistoryInChina(voyage, history);
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  return (vpf * 3 > (vr + chr * 2)) ? 'A' : 'B';
}

module.exports = {
  rating,
};
