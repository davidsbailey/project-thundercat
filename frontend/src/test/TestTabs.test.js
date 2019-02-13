import React from "react";
import { mount } from "enzyme";
import TestTabs, { TABS } from "../components/eMIB/TestTabs";
import { STRINGS } from "../components/eMIB/Emib";

it("renders testTabs page", () => {
  const wrapper = mount(<TestTabs />);
  expect(wrapper.state("curTab")).toEqual(TABS.background);
  const backgroundMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(backgroundMessage)).toEqual(true);
});

it("renders instructions tab", () => {
  const wrapper = mount(<TestTabs />);
  wrapper.setState({ curTab: TABS.instructions });
  const initialMessage = <h2>{STRINGS.howToPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders background tab", () => {
  const wrapper = mount(<TestTabs />);
  wrapper.setState({ curTab: TABS.background });
  const initialMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders inbox tab", () => {
  const wrapper = mount(<TestTabs />);
  wrapper.setState({ curTab: TABS.inbox });
  const initialMessage = <h2>{STRINGS.inboxPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});