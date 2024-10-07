import {fetchData} from '../components/fetchData';

jest.mock('../components/fetchData');

describe('fetchData', () => {
  it('returns an array of data from API', async () => {
    // Mock the resolved value to match the API response
    (fetchData as jest.Mock).mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
    ]);

    const data = await fetchData();

    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBe(2);
    expect(data[0].title).toBe(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    );
  });
});
