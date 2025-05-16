import AdsApi from "./Ads";
import BrandsApi from "./Brands";
import CarsApi from "./Cars";
import CategoriesApi from "./Categories";

class Api {
  Cars;
  Categories;
  Brands;
  Ads;
  constructor() {
    this.Cars = new CarsApi();
    this.Categories = new CategoriesApi();
    this.Brands = new BrandsApi();
    this.Ads = new AdsApi();
  }
}

export default Api;
