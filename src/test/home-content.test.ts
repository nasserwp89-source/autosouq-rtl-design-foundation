import { describe, expect, it } from "vitest";
import { registrationOffer } from "@/lib/home-content";

describe("Individual registration offer", () => {
  it("charges €70 including VAT", () => {
    expect(registrationOffer.fee).toBe(70);
    expect(registrationOffer.vatIncluded).toBe(true);
  });
  it("excludes registration office fees", () => {
    expect(registrationOffer.officeFeesIncluded).toBe(false);
  });
  it("qualifies the 15–30 minute target by progress status and working hours, excluding holidays", () => {
    expect(registrationOffer.targetMinutes).toEqual({ min: 15, max: 30 });
    expect(registrationOffer.targetStartsAt).toBe("progress");
    expect(registrationOffer.workingHoursOnly).toBe(true);
    expect(registrationOffer.holidaysExcluded).toBe(true);
    expect(registrationOffer.guaranteed).toBe(false);
  });
});