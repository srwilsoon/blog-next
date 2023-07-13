import {describe} from "node:test";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {ToggleButton} from "@/components/MainNav/components/ToggleButton";
const handleToggleMenu = jest.fn();

describe('ToggleButton', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render close icon when isOpen is true', () => {

        const props = {
            isOpenMenu: true,
            handleToggleMenu
        }
        render(<ToggleButton { ...props } />);
        const toggleButton = screen.getByTestId('close-icon');
        act(() => {
            fireEvent.click(toggleButton);
        });
        expect(toggleButton).toBeVisible();
        expect(handleToggleMenu).toHaveBeenCalledTimes(1);
    });

    it('should render open icon when isOpen is false', () => {
        const props = {
            isOpenMenu: false,
            handleToggleMenu
        }

        render(<ToggleButton { ...props } />);
        const toggleButton = screen.getByTestId('open-icon');
        act(() => {
            fireEvent.click(toggleButton);
        });
        expect(toggleButton).toBeVisible();
        expect(handleToggleMenu).toHaveBeenCalledTimes(1);
    });
})