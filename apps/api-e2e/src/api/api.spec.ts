import axios from 'axios';

describe('GET /pokemon', () => {
  it('should return a pokemon', async () => {
    const res = await axios.get(`/pokemon`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});
