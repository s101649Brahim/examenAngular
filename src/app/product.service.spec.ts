import { TestBed } from "@angular/core/testing";

import { EightballService } from "./eightball.service";

describe("EightballService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EightballService = TestBed.get(EightballService);
    expect(service).toBeTruthy();
  });
});
