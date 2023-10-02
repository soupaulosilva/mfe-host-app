/** @type {import('next').NextConfig} */
const NextModuleFederation = require('@module-federation/nextjs-mf');
const { createDelegatedModule } = require('@module-federation/nextjs-mf/utilities');

module.exports = {
  webpack(config, options) {

    const isServer = options.isServer;
    const location = isServer ? 'ssr' : 'chunks'

    config.plugins.push(
        new NextModuleFederation({
          name: 'app_host',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {},
          shared: {},
          remotes: {
            'app_remote': createDelegatedModule(require.resolve('./remote-delegate.js'), {
              remote: `app_remote@http://localhost:8080/_next/static/${location}/remoteEntry.js`
            }),
            'app-pages': createDelegatedModule(require.resolve('./remote-delegate.js'), {
              remote: `app-pages@http://localhost:3002/_next/static/${location}/remoteEntry.js`
            })
          }
        })
    );

    return config;
  },
  reactStrictMode: true,
}
