import {describe} from "node:test";
import {useMainNav} from "@/hooks/useMainNav/index";
import {act, renderHook} from "@testing-library/react";

describe("useMainNav", () => {
  it("should return an default value correctly", () => {
    const {result} = renderHook(() => useMainNav());

    const { isOpenMenu, handleToggleMenu } = result.current;

    expect(isOpenMenu).toBe(false);
    expect(typeof handleToggleMenu).toBe("function");
  });

  it("should change is when handleToggleMenu is called", () => {
    const {result} = renderHook(() => useMainNav());

    act(() => {
      result.current.handleToggleMenu();
    });
    expect(result.current.isOpenMenu).toBe(true);

    act(() => {
      result.current.handleToggleMenu();
    });
    expect(result.current.isOpenMenu).toBe(false);
  });
});