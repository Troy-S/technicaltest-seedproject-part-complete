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
    // Act
    // Assert
  });

  it("should return broadband & tv deals when filtered by that criteria", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should return a broadband & mobile deal when filterd by that criteria", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should return a sky deal when filtered by that criteria", () => {
    // Arrange
    // Act
    // Assert
  });

  it("should return bt, broadband & tv deals when filtered by that criteria", () => {
    // Arrange
    // Act
    // Assert
  });
});
