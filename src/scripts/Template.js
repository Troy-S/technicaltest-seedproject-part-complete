class Template {
  constructor() {
    this.deal = document.getElementById("template-deal").innerHTML;
    this.listItem = document.getElementById("template-list-item").innerHTML;
    this.currencyFormatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2
    });
  }

  buildDeal(data) {
    return this.deal
      .replace("{{ title }}", data.title)
      .replace("{{ provider }}", data.provider.name)
      .replace(
        "{{ upfrontCost }}",
        data.cost.upfrontCost > 0 ? this.currencyFormatter.format(data.cost.upfrontCost) : 'None.'
      )
      .replace(
        "{{ totalCost }}",
        this.currencyFormatter.format(data.cost.totalContractCost)
      )
      .replace("{{ contractLength }}",
        data.contractLength > 0 ? data.contractLength + " months" : 'N/A'
      )
      .replace("{{ productList }}", data.productTypes);
  }

  buildListItem(content) {
    return this.listItem.replace("{{ content }}", content);
  }

  buildDealList(list) {
    return list.reduce((result, deal) => {
      const dealHtml = this.buildDeal(deal);
      return (result += this.buildListItem(dealHtml));
    }, "");
  }
}

export default Template;
