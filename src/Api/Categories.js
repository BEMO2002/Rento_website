import axios from "axios";
import config from "../config";

class CategoriesApi {
  #BaseUrl = config.API;
  async GetAll() {
    return (await axios.get(this.#BaseUrl + "/admin/categories")).data;
  }
}

export default CategoriesApi;
