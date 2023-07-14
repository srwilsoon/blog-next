import {describe} from "node:test";
import {render, screen} from "@testing-library/react";
import {Logo} from "@/components/Logo/index";

describe('Logo', () => {
    it('should render logo-1.png.png success', () => {
        render(<Logo/>)
        const logoText = screen.getByRole(
            'heading', {
                name: '2L-BLOG'
            }
        )
        expect(logoText).toBeVisible();
    });
});