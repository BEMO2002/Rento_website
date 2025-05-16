import axios from "axios";
import config from "../config";

class CarsApi {
  #BaseUrl = config.API;

  Create = async (formData) => {
    return (await axios.postForm(this.#BaseUrl + "/cars", formData)).data;
  };

  GetAll = async () => {
    return (await axios.get(this.#BaseUrl + "/cars")).data;
  };

  GetById = async (id) => {
    return (await axios.get(this.#BaseUrl + `/cars/${id}`)).data;
  };

  GetMyCars = async () => {
    return (await axios.get(this.#BaseUrl + "/cars/mycars")).data;
  };

  Delete = async (cariD) => {
    await axios.delete(`${this.#BaseUrl}/cars/${cariD}`);
  };
}

export default CarsApi;
