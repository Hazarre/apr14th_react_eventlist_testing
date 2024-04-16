// Test buttons are being rendered

// Test buttons are being

// Test that mock data are being loaded

import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import {
  ButtonGroupSaveCancel,
  ButtonGroupEditDelete,
} from "../components/EventButtons";


describe("Buttons Groups for Events CRUD", () => {
  test("Edit/Delete buttons should be rendered", () => {
    const { getAllByRole, getByRole } = render(
      <ButtonGroupEditDelete
        eventId={1}
        setIsEditing={false}
        handleDelete={() => {}}
      />
    );
    const Buttons = getAllByRole("button");
    expect(Buttons.length).toBe(2);

		const EditButton = getByRole('button', {name: 'edit-button'})
		expect(EditButton).toBeInTheDocument()
		
		const DeleteButton = getByRole('button', {name: 'delete-button'})
		expect(DeleteButton).toBeInTheDocument()
  });

  test("handleDelete function clicked", async () => {
    const user = userEvent.setup();
    const handleDelete = jest.fn();

    const { container, getByRole } = render(
      <ButtonGroupEditDelete
        eventId={1}
        setIsEditing={false}
        handleDelete={handleDelete}
      />
    );

    const DeleteButton = getByRole('button', {name: 'delete-button'})
		expect(DeleteButton).toBeInTheDocument()
    fireEvent.click(DeleteButton);
    expect(handleDelete).toHaveBeenCalledTimes(1);
    fireEvent.click(DeleteButton);
    fireEvent.click(DeleteButton);
    expect(handleDelete).toHaveBeenCalledTimes(3);
  });
});
