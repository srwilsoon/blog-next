import {List} from "@phosphor-icons/react";
import {render, screen} from "@testing-library/react";

describe('List', () => {
    it('should render a list', () => {
        const children = 'children';
        render(<List>{children}</List>);
        const result = screen.getByText(children);
        expect(result).toBeVisible()
    });
});