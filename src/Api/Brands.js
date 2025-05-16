import axios from "axios";
import config from "../config";

class BrandsApi {
  #BaseUrl = config.API;
  GetAll = async () => (await axios.get(this.#BaseUrl + "/admin/brands")).data;
}

export default BrandsApi;
