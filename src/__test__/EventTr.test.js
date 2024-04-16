import { fireEvent, render, screen } from "@testing-library/react";
import EventTr from "../components/EventTr"

import userEvent from "@testing-library/user-event";




describe("EventTr Table Row component", () => {
 
	const mockEvent = {
    id: '44',
    eventName: 'mock event',
    startDate: '04-08-2024',
    endDate: '04-18-2024'
  };

	test("Single event row is rendered", () => {
		render(<EventTr event={mockEvent} handleDelete={()=>{}} handleSave={()=>{}} />)
		const eventName = screen.getByText(mockEvent.eventName);
    expect(eventName).toBeInTheDocument();
    const startDate = screen.getByText(mockEvent.startDate);
    expect(startDate).toBeInTheDocument();
    const endDate = screen.getByText(mockEvent.endDate);
    expect(endDate).toBeInTheDocument();
		// expect(9).toBe(9)
	})

	test("Edit button expands Save/Cancel Options", () => {
		render(<EventTr event={mockEvent} handleDelete={()=>{}} handleSave={()=>{}} />)
		const editButton = screen.getByRole('button', { name: 'edit-button' });
    fireEvent.click(editButton);
    const saveButton = screen.getByRole('button', { name: 'save-button' });
    const cancelButton = screen.getByRole('button', { name: 'cancel-button' });
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
	})

	// test("Delete button Removes the event and row", () => {
		
	// })

});
