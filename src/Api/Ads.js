import axios from "axios";
import config from "../config";

class AdsApi {
  #BaseUrl = config.API;
  Create = async (formData) => {
    return (await axios.postForm(this.#BaseUrl + "/AdRequests", formData)).data;
  };
  GetAll = async () =>
    (await axios.get(this.#BaseUrl + "/admin/AdRequests")).data;
  HandleAdRequest = async (carId, statusId) => {
    await axios.put(this.#BaseUrl + "/admin/AdRequests", {
      id: carId,
      statusId,
    });
  };
}

export default AdsApi;
