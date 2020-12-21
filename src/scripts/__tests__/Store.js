import Store from "../Store";
import mockData from "../../../public/db.json";

/**
 * Create unit tests for the following conditions:
 *
 * Broadband filter: Should return 4 deals
 * Broadband & TV filter: Should return 4 deals
 * Broadband & Mobile filter: Should return 1 deal
 * Sky filter: Should return 1 deal
 * BT, Broadband & TV filter: Should return 2 deals
 */

describe("filter", () => {
  // After reading Jest docs it recommends using global beforeEach and pairing
  // with afterEach, this is called the "setup" & "teardown" phase.
  // This means we can remove a lot of our "Arrange" code to keep in line with
  // DRY principles
  let storeUnitTest;
  // Setup phase
  beforeEach(() => {
    // Arrange
    storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals)
  });

  // Teardown phase
  afterEach(() => {
    storeUnitTest.setDeals();
  });

  it("should return all deals when no filters applied", () => {
    // Act
    const result = storeUnitTest.deals;
    // Assert
    expect(result).toEqual(mockData.deals);
  });

  it("should return broadband deals when filtered by broadband", () => {
    // Act - Use Store.js setProductFilter to match criteria filtered by
    // broadband.
    // Would be lowercase 'broadband' as we will normalize the results in the
    // Store.js (in our app).
    storeUnitTest.setProductFilter('broadband');
    // Assert - use expect assertion to compare results - Using toBe as it's a primative type
    expect(storeUnitTest.deals.length).toBe(4);
    // Manually check id's in (deals) db.json to do a deep equality test against
    expect(storeUnitTest.deals[0].id).toEqual(6158);
    expect(storeUnitTest.deals[1].id).toEqual(4359);
    expect(storeUnitTest.deals[2].id).toEqual(4371);
    expect(storeUnitTest.deals[3].id).toEqual(5459);
  });

  it("should return broadband & tv deals when filtered by that criteria", () => {
    // Act
    storeUnitTest.setProductFilter('broadband');
    storeUnitTest.setProductFilter('tv');
    // Assert
    expect(storeUnitTest.deals.length).toBe(4);
    expect(storeUnitTest.deals[0].id).toEqual(6074);
    expect(storeUnitTest.deals[1].id).toEqual(5738);
    expect(storeUnitTest.deals[2].id).toEqual(6165);
    expect(storeUnitTest.deals[3].id).toEqual(6468);
  });

  it("should return a broadband & mobile deal when filtered by that criteria", () => {
    // Act
    storeUnitTest.setProductFilter('broadband');
    storeUnitTest.setProductFilter('mobile');
    // Assert
    expect(storeUnitTest.deals.length).toBe(1);
    expect(storeUnitTest.deals[0].id).toEqual(4276);
  });

  it("should return a sky deal when filtered by that criteria", () => {
    // Act - Use the correct setProviderFilter fn and arg
    storeUnitTest.setProviderFilter(1);
    // Assert
    expect(storeUnitTest.deals.length).toBe(1);
    expect(storeUnitTest.deals[0].id).toEqual(6468);
  });

  it("should return bt, broadband & tv deals when filtered by that criteria", () => {
    // Act
    storeUnitTest.setProductFilter('broadband');
    storeUnitTest.setProductFilter('tv');
    storeUnitTest.setProviderFilter(3);
    // Assert
    expect(storeUnitTest.deals.length).toBe(2);
    expect(storeUnitTest.deals[0].id).toEqual(6074);
    expect(storeUnitTest.deals[1].id).toEqual(5738);
  });
});
