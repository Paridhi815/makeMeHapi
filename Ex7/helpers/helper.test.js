const helper = require('./helper');

describe('Testing the response', () => {
  test('responds with success statusCode', (done) => {
    const input =
    {
      data:
      {
        root:
        {
          query:
          {
            name: 'paridhi',
            suffix: 'mohindra',
          },
        },
      },
    };
    // input.data.root.name = 'paridhi';
    // input.data.root.suffix = 'mohindra';
    expect(helper(input)).toBe('paridhimohindra');
    done();
  });
});
