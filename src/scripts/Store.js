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

  get deals() {
    return this.filter();
  }

  filter() {
    let categories = [...this.state.deals];
    let stateProductFilter = this.state.productFilters !=0;
    let stateProviderFilter = this.state.providerFilter;
    if (stateProductFilter) {
      categories = categories.filter(deal => {
        let prods = deal.productTypes.filter(item => item != '');
        let prodMap = prods.map(item => item.toLowerCase().indexOf('mixed') > 0 ? 'mixed' : item.toLowerCase()).sort().join(',');
        return prodMap === this.state.productFilters.sort().join(',').toLowerCase();
      })
    }
    let matchedProviderCriteria = categories.filter(deal => deal.provider.id === stateProviderFilter);
    if (stateProviderFilter) {
      categories = matchedProviderCriteria
    }
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
