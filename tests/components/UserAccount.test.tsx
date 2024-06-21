import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe('UserAccount', () => {
  it('Should render user name', () => {
    const user: User = { id: 0, name: "Tala Nicole Dimaapi Valdez" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it('Should render edit button if user is an admin', () => {
    const user: User = { id: 0, name: "Tala Nicole Dimaapi Valdez", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it('Should not render the edit button if user is not an admin', () => {
    const user: User = { id: 0, name: "Tala Nicole Dimaapi Valdez", isAdmin: false };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
})