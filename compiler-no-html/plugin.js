console.warn(
  '\x1b[33m%s\x1b[0m',
  'Warning: `svelte:compiler-no-html` is deprecated. ' +
  'Please use `svelte:compiler` 1.4.0 or newer and configure it to ignore HTML files.'
);

Plugin.registerCompiler({
  extensions: ['svelte'],
}, () => new SvelteCompiler);
