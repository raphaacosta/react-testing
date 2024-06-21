import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe('UsersList', () => {
  it('Should render no users when the users array is empty', () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it('Should render a list of users', () => {
    const users: User[] = [
      { id: 0, name: "Tala Nicole Dimaapi Valdez" },
      { id: 1, name: "Sabine Callas" },
    ];

    render(<UserList users={users} />);

    users.forEach(user => {
      const link = screen.getByRole('link', { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`);
    })
  });
})