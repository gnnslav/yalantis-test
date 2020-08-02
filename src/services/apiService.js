import API_URL from "../config/api";

export default class getUsers {
  constructor() {
    this.url = API_URL;
  }

  async getService() {
    const result = await fetch(this.url);
    if (!result.ok) {
      throw new Error(`'Could not fetch', ${result.status}`);
    }
    return await result.json();
  }
}