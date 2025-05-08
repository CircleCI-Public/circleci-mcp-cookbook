import { describe, it, expect } from "vitest";

describe("dummy test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});

describe("flaky test", () => {
  it("should pass sometimes", () => {
    if (Math.random() > 0.5) {
      expect(true).toBe(true);
    } else {
      expect(true).toBe(false);
    }
  });
});
