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

   /** Logic
   *
   * Control flow: If we have productFilters items...
   * 1. Filter out deals based on categories array (which will be our deal)
   * 2. Assign a new prods variable to filter our deal using another filter
   *    on deal.ProductTypes (i.e. Mobile, Phone, Tv). Assigning it to an item
   *    which we can map.
   * 3. Using map we can take the item and run a ternary operator to call on
   *    every item based on our criteria
   * 4. Finally we want to return products if it matches our stores
   *    productFilters (i.e. this.state.productFilters)
   *
   * Control flow: If providerFilters exists in our state (true)
   * 1. We want to filter categories based on our initial Filter
   * 2. Criteria: if our deals provider id equals our states providerFilter
   * 3. Finally return our categories that we want to filter on via our UI.
   */
    let categories = [...this.state.deals];
    let stateProductFilter = this.state.productFilters !=0;
    let stateProviderFilter = this.state.providerFilter;
    // If true...
    if (stateProductFilter) {
      // Filter deal based on categories (creating new array which pass the
      // criteria in the filter).
      categories = categories.filter(deal => {
        // Filter on deal.ProductTypes based on the item type and match criteria
        let prods = deal.productTypes.filter(item => item != 'Phone');
        // Map filtered prods item and call the ternary conditional based on
        // criteria defined
        let prodMap = prods.map(item => item.toLowerCase().indexOf('broadband') > 0 ? 'broadband' : item.toLowerCase()).sort().join(',');
        // Return our products map if it strictly equals our state objects
        // productFilters
        return prodMap === this.state.productFilters.sort().join(',').toLowerCase();
      })
    }

    let matchedProviderCriteria = categories.filter(deal => deal.provider.id === stateProviderFilter);
    // If true...
    if (stateProviderFilter) {
      // Assign our matched provider criteria to our categories object which
      // filters our deal based on whether the provider id matches our states
      // providerFilter
      categories = matchedProviderCriteria
    }
    // Return our categories
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
