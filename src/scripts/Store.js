import Observable from "./Observable";

class Store extends Observable {
  constructor() {
    super();
    this.state = {
      deals: [],
      productFilters: [],
      providerFilter: null
    };
  }

  /**
   * Binding filter() to deals getter
   *
   * @author Troy Sheed
   * @return {[Object]} Allowing access to a dynamically computed property value
   */
  get deals() {
    // Returning dynamically computed filter()
    return this.filter();
  }

  /**
   * Filters a new object array of categories from deals in our store
   *
   * @author Troy Sheed
   * @type {Object} - An object array containing our default deals
   * @param {Object[]} categories
   * @return {Object} - Returns a list of categories which match our criteria
   */
  filter() {
  /**
   * Instead of returning our deals directly we want to use the spread param
   *
   * According to MDN: Spread syntax (...) allows an iterable such as an array
   * expression or string to be expanded in places where zero or more arguments
   * (for function calls) or elements (for array literals) are expected, or an
   * object expression to be expanded in places where zero or more key-value
   * pairs (for object literals) are expected.
   */
    // return this.state.deals;
    let categories = [...this.state.deals];
    return categories;
  }

  setDeals(data) {
    this.state.deals = data;
    this.notify(this.state);
  }

  setProductFilter(value) {
    const filter = value.trim().toLowerCase();
    const index = this.state.productFilters.indexOf(filter);
    if (index === -1) {
      this.state.productFilters.push(filter);
    } else {
      this.state.productFilters.splice(index, 1);
    }
    this.notify(this.state);
  }

  setProviderFilter(value = null) {
    this.state.providerFilter = value;
    this.notify(this.state);
  }
}

export default Store;
