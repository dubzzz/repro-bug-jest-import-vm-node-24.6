export function queue(fun) {
  let queryId = 0;
  let lastQuery = null;
  return (...args) => {
    const selfQueryId = ++queryId;
    if (lastQuery === null) {
      lastQuery = fun(...args);
    } else {
      lastQuery = lastQuery.then(
        () => fun(...args),
        () => fun(...args)
      );
    }
    lastQuery.finally(() => {
      if (queryId === selfQueryId) lastQuery = null;
    });
    return lastQuery;
  };
}
