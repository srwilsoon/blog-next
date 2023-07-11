import {describe} from "node:test";
import {render, screen} from "@testing-library/react";
import {Logo} from "@/components/Logo/index";

describe('Logo', () => {
    it('should render logo success', () => {
        render(<Logo/>)
        const logoText = screen.getByRole(
            'heading', {
                name: 'Logo'
            }
        )
        expect(logoText).toBeVisible();
    });
});