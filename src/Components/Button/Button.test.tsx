import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component", () => {
	const mockButtonProps = {
		text: "submit",
		element: <span>Click Me</span>,
		onClick: vi.fn(),
	};

	it("should contain correct text", () => {
		render(<Button {...mockButtonProps} />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveTextContent("submit");
	}),
		it("on mouse hover shows hover css behavior", async () => {
			render(<Button {...mockButtonProps} />);
			const buttonElementByRole = screen.getByRole("button", { name: /submit/i });
			await userEvent.hover(buttonElementByRole);
			expect(buttonElementByRole).not.toHaveStyle({ "background-color": "#0c7d69" });
			expect(buttonElementByRole).toHaveStyle({ cursor: "pointer" });
		});
});
