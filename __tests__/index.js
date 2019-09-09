import persistantBugger from '../index';

describe('Code kata', () => {
	it('should return the number', () => {
		expect(persistantBugger(39)).toEqual(3);
		expect(persistantBugger(4)).toEqual(3);
		expect(persistantBugger(25)).toEqual(3);
		expect(persistantBugger(999)).toEqual(3);
  });
});


