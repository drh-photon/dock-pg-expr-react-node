const test2 = require('ava');

test2('foo', (t: { pass: () => void; }):any => {
	t.pass();
});

test2('bar', async (t: { is: (arg0: string, arg1: string) => void; }) => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});