import Store from "../Store";
import mockData from "../../../public/db.json";

describe("filter", () => {
  let storeUnitTest;
  beforeEach(() => {
    storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals)
  });

  afterEach(() => {
    storeUnitTest.setDeals();
  });

  it("should return all deals when no filters applied", () => {
    const result = storeUnitTest.deals;
    expect(result).toEqual(mockData.deals);
  });

  it("should return all red deals when filtered by red", () => {
    storeUnitTest.setProductFilter('red');
    expect(storeUnitTest.deals.length).toBe(6);
    expect(storeUnitTest.deals[0].id).toEqual(6158);
    expect(storeUnitTest.deals[1].id).toEqual(4359);
    expect(storeUnitTest.deals[2].id).toEqual(6074);
    expect(storeUnitTest.deals[3].id).toEqual(5459);
    expect(storeUnitTest.deals[4].id).toEqual(6165);
    expect(storeUnitTest.deals[5].id).toEqual(6468);
  });

  it("should return all white deals when filtered by white", () => {
    storeUnitTest.setProductFilter('white');
    expect(storeUnitTest.deals.length).toBe(4);
    expect(storeUnitTest.deals[0].id).toEqual(4371);
    expect(storeUnitTest.deals[1].id).toEqual(5738);
    expect(storeUnitTest.deals[2].id).toEqual(6165);
    expect(storeUnitTest.deals[3].id).toEqual(6166);
  });

  it("should return all mixed deals when filtered by mixed", () => {
    storeUnitTest.setProductFilter('mixed');
    expect(storeUnitTest.deals.length).toBe(3);
    expect(storeUnitTest.deals[0].id).toEqual(4529);
    expect(storeUnitTest.deals[1].id).toEqual(4530);
    expect(storeUnitTest.deals[2].id).toEqual(4276);
  });
});
