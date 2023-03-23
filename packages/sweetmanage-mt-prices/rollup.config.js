export default {
	input: 'src/main.js',
	output: [
		{
			file: 'lib/main.mjs',
			format: 'esm',
		},
		{
			file: 'lib/main.cjs',
			format: 'cjs',
			exports: 'auto',
		},
	],
	external: ['socketcluster-client'],
};
