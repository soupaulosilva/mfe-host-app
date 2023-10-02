//remote-delegate.js
// Delegates must utilize module.exports, not export default - this is due to a webpack constraint
// ALL imports MUST BE dynamic imports in here like import()
// const { importDelegatedModule } = import('@module-federation/nextjs-mf/utilities')
module.exports = new Promise(async (resolve, reject) => {
  const { importDelegatedModule } = await import(
    '@module-federation/nextjs-mf/utilities'
  );
    // eslint-disable-next-line no-undef
    const currentRequest = new URLSearchParams(__resourceQuery).get('remote');
    const [global, url] = currentRequest.split('@');
    importDelegatedModule({
      global,
      url: url + '?' + Date.now(),
    })
      .then((remote) => {
        resolve(remote);
      })
      .catch((err) => reject(err));
});