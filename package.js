Package.describe({
  name: 'cie:svelte-custom-elements',
  version: '3.27.0',
  summary: 'Svelte compiler that generates custom elements',
  git: 'https://github.com/cie/meteor-svelte-custom-elements.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'svelte-ce-compiler',
  use: [
    'babel-compiler@7.3.4',
    'caching-compiler@1.2.1',
    'ecmascript@0.12.7'
  ],
  sources: [
    'SvelteCECompiler.js',
    'plugin.js'
  ],
  npmDependencies: {
    '@babel/runtime': '7.4.3',
    'find-up': '3.0.0',
    htmlparser2: '3.10.1',
    'source-map': '0.5.6',
    svelte: '3.27.0',
    semver: '5.5.0',
  }
});

Package.onUse(function (api) {
  api.versionsFrom('1.8');
  api.use('isobuild:compiler-plugin@1.0.0');

  // Dependencies for compiled Svelte components (taken from `ecmascript`).
  api.imply([
    'modules',
    'ecmascript-runtime',
    'babel-runtime',
    'promise'
  ]);
});
