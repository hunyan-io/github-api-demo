import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import useMouseCssVariables from "./useMouseCssVariables";

describe("useMouseCssVariables", () => {
  let requestAnimationFrameSpy: jest.SpyInstance;

  beforeEach(() => {
    // Mock requestAnimationFrame
    requestAnimationFrameSpy = jest.spyOn(window, "requestAnimationFrame");
    requestAnimationFrameSpy.mockImplementation(
      (callback: FrameRequestCallback) => {
        callback(0);
        return 0;
      }
    );
  });

  afterEach(() => {
    // Restore requestAnimationFrame
    requestAnimationFrameSpy.mockRestore();
  });

  it("applies css variables on mousemove", () => {
    const TestComponent = () => {
      const ref = React.useRef(null);
      useMouseCssVariables(ref);

      return <div ref={ref} data-testid="element" />;
    };

    render(<TestComponent />);

    const element = screen.getByTestId("element");

    // Create a mock event object with the necessary properties
    const mockEvent = new MouseEvent("mousemove", {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(mockEvent, "pageX", { value: 150 });
    Object.defineProperty(mockEvent, "pageY", { value: 160 });

    // Trigger the mousemove event by firing the mock event on the element
    act(() => {
      fireEvent(element, mockEvent);
    });

    // Check if the css variables are applied correctly
    expect(element.style.getPropertyValue("--mouse-x")).toBe("150px");
    expect(element.style.getPropertyValue("--mouse-y")).toBe("160px");
  });
});
