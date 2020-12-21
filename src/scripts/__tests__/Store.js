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

  it("should return all deals when no filters applied", () => {
    // Arrange
    const storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals);
    // Act
    const result = storeUnitTest.deals;
    // Assert
    expect(result).toEqual(mockData.deals);
  });

  it("should return broadband deals when filtered by broadband", () => {
    // Arrange
    const storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals);
    // Act - Use Store.js setProductFilter to match criteria filtered by?
    // Would be lowercase 'broadband' as we will normalize the results
    storeUnitTest.setProductFilter('broadband');
    /**
     *  Assert - use expect assertion to compare results - Using toBe as it's
     *  a primative type
     */
    expect(storeUnitTest.deals.length).toBe(4)
    // Manually check id's in (deals) db.json to do a deep equality test against
    expect(storeUnitTest.deals[0].id).toEqual(6158)
  });

  it("should return broadband & tv deals when filtered by that criteria", () => {
    // Arrange
    const storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals);
    // Act
    // Assert
  });

  it("should return a broadband & mobile deal when filterd by that criteria", () => {
    // Arrange
    const storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals);
    // Act
    // Assert
  });

  it("should return a sky deal when filtered by that criteria", () => {
    // Arrange
    const storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals);
    // Act
    // Assert
  });

  it("should return bt, broadband & tv deals when filtered by that criteria", () => {
    // Arrange
    const storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals);
    // Act
    // Assert
  });
});
