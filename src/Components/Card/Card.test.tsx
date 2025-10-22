import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe("Card Component", () => {
	const mockCardProps = {
		flags: "https://flagcdn.com/ad.svg",
		countryName: "Andorra",
		population: 77265,
		region: "Europe",
		capital: "Andorra la Vella",
	};
	it("should contain correct text", () => {
		render(<Card {...mockCardProps} />);
		const cardElement = screen.getByText(/Andorra/);
		expect(cardElement).toBeInTheDocument();
	});
	
});
