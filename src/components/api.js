export default class Api {
  static getDetails = (id) => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`https://api.punkapi.com/v2/beers/${id}`);

      if (result.status === 200) {
        res(await result.json());
      } else {
        rej(await result.json());
      }
    });
  };
}
