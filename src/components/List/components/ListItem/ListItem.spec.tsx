import {render, screen} from "@testing-library/react";
import {ListItem} from "@/components/List/components/ListItem/index";

describe('ListItem', () => {
    it('should render a list', () => {
        const children = 'children';
        render(<ListItem>{children}</ListItem>);
        const result = screen.getByText(children);
        expect(result).toBeVisible()
    });
});