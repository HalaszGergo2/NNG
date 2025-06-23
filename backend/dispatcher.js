const path = require('path');
const logger = require('./logger');

module.exports = async function dispatchRequests(requestsArray) {
  if (!Array.isArray(requestsArray)) {
    throw new Error("A bemenetnek tömbnek kell lennie.");
  }

  const results = [];

  for (const req of requestsArray) {
    const { api, method, params } = req;

    if (!api || !method || !Array.isArray(params)) {
      logger.log(`Hibás input ${JSON.stringify(req)}`, "Error");
      results.push({ error: `Hibás input: ${JSON.stringify(req)}` });
      continue;
    }

    try {
      const apiModule = require(path.join(__dirname, 'apis', api));
      logger.log(`Api hivás: ${api}, ${method}`)

      if (typeof apiModule[method] !== 'function') {
        logger.log(`Hibás metódus ${JSON.stringify(method)}`, "Error");
        results.push({ error: `Nincs ilyen metódus: ${method} a ${api} modulban.` });
        continue;
      }

      const result = await apiModule[method](...params);
      logger.log(`Sikeres hívás: ${JSON.stringify(result)}`)
      results.push({ result });

    } catch (err) {
      logger.log(`Hiba történt a hívás közben ${err.message}`, "Error")
      results.push({ error: `Hiba történt a ${api}.${method} hívás közben: ${err.message}` });
    }
  }

  return results;
};
