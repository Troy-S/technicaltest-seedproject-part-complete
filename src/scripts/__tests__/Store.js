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
  /**
   * After reading Jest docs it recommends using global beforeEach and pairing
   * with afterEach, this is called the "setup" & "teardown" phase.
   * This means we can remove a lot of our "Arrange" code to keep in line with
   * DRY principles
   */
  let storeUnitTest;

  // Setup phase
  beforeEach(() => {
    // Arrange
    storeUnitTest = new Store();
    storeUnitTest.setDeals(mockData.deals)
  });

  // Teardown phase
  afterEach(() => {
    storeUnitTest.unmount();
  });

  it("should return all deals when no filters applied", () => {
    // Act
    const result = storeUnitTest.deals;
    // Assert
    expect(result).toEqual(mockData.deals);
  });

  it("should return broadband deals when filtered by broadband", () => {
    /**
     * Act - Use Store.js setProductFilter to match criteria filtered by
     * broadband.
     * Would be lowercase 'broadband' as we will normalize the results in the
     * Store.js (in our app).
     *
     */
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
    // Act
    // Assert
  });

  it("should return a broadband & mobile deal when filterd by that criteria", () => {
    // Act
    // Assert
  });

  it("should return a sky deal when filtered by that criteria", () => {
    // Act
    // Assert
  });

  it("should return bt, broadband & tv deals when filtered by that criteria", () => {
    // Act
    // Assert
  });
});
