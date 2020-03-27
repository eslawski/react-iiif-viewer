export default {
  get: jest.fn(() => Promise.resolve({ data: {
      "@id": "http://someurl.com/abc1234",
      sizes: [
        {
          width: 50,
          height: 50
        }
      ],
      width: 1000,
      height: 1000
    } }))
};
