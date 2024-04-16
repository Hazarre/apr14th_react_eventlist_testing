import React from "react";

import {
    EditIcon,
    DeleteIcon,
    SaveIcon,
    CancelIcon,
} from "../utils/icons.tsx";


type ButtonGroupEditDeleteProps = { eventId: string, setIsEditing: (...args: any) => void, handleDelete: (id: string) => void }


export function ButtonGroupEditDelete({ eventId, setIsEditing, handleDelete }: ButtonGroupEditDeleteProps) {
    return (
        <div className="div__action-buttons">
            <button
                type="button"
                aria-label="edit-button"
                className="button__edit-event"
                id={eventId}
                onClick={() => setIsEditing(true)}
            >
                <EditIcon />
            </button>

            <button
                type="button"
                aria-label="delete-button"
                className="button__delete-event"
                id={eventId}
                onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(eventId);
                }}
            >
                <DeleteIcon />
            </button>
        </div>
    );
}


type ButtonGroupSaveCancelProps = { eventId: string, setIsEditing: (...args: any) => void, handleSave: (id: string) => void }

export function ButtonGroupSaveCancel({ eventId, setIsEditing, handleSave }: ButtonGroupSaveCancelProps) {
    return (
        <div className="div__action-buttons">
            <button
                type="button"
                aria-label="save-button"
                className="button__save-event"
                id={eventId + "-save"}
                onClick={(e) => {
                    e.stopPropagation();
                    handleSave(eventId);
                    setIsEditing();
                }}
            >
                <SaveIcon />
            </button>

            <button
                type="button"
                aria-label="cancel-button"
                className="button__cancel-event"
                id={eventId + "-cancel"}
                onClick={() => setIsEditing(false)}
            >
                <CancelIcon />
            </button>
        </div>
    );
}