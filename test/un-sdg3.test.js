import { html, fixture, expect } from '@open-wc/testing';
import "../un-sdg3.js";

describe("UnSdg3 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <un-sdg3
        title="title"
      ></un-sdg3>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
