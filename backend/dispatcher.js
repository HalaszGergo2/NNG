const path = require('path');

module.exports = async function dispatchRequests(requestsArray) {
  if (!Array.isArray(requestsArray)) {
    throw new Error("A bemenetnek tömbnek kell lennie.");
  }

  const results = [];

  for (const req of requestsArray) {
    const { api, method, params } = req;

    if (!api || !method || !Array.isArray(params)) {
      results.push({ error: `Érvénytelen bejegyzés: ${JSON.stringify(req)}` });
      continue;
    }

    try {
      const apiModule = require(path.join(__dirname, 'apis', api));

      if (typeof apiModule[method] !== 'function') {
        results.push({ error: `Nincs ilyen metódus: ${method} a ${api} modulban.` });
        continue;
      }

      const result = await apiModule[method](...params);
      results.push({ result });

    } catch (err) {
      results.push({ error: `Hiba történt a ${api}.${method} hívás közben: ${err.message}` });
    }
  }

  return results;
};
