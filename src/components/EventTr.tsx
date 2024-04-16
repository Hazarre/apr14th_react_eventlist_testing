import React from "react";

import { useState, Fragment } from "react";

import { ButtonGroupEditDelete, ButtonGroupSaveCancel } from "./EventButtons.tsx";

import { EditIcon, DeleteIcon } from "../utils/icons.tsx";

type Event = {
  id: string;
  eventName: string;
  startDate: string;
  endDate: string;
};

type EventTrProps = {
  event: Event;
  handleDelete: (...args: any[]) => void;
  handleSave: (...args: any[]) => void;
};

export default function EventTr({
  event,
  handleDelete,
  handleSave,
}: EventTrProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // const isEditing = true;
  const { id, eventName, startDate, endDate } = event;

  return (
    <Fragment key={id}>
      <tr key={id}>
        <td>{eventName}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td className="div__action-buttons">

          <ButtonGroupEditDelete
            eventId={id}
            setIsEditing={setIsEditing}
            handleDelete={(e) => {
              handleDelete(id);
            }}
          />

         
        </td>
      </tr>
      <tr key={id + "-editing"} className={isEditing ? "show" : "collapsed"}>
        <td>
          <input type="text" id={id + "-eventName"} defaultValue={eventName} />
        </td>
        <td>
          <input type="date" id={id + "-startDate"} defaultValue={startDate} />
        </td>
        <td>
          <input type="date" id={id + "-endDate"} defaultValue={endDate} />
        </td>
        <td>
          <ButtonGroupSaveCancel
            eventId={`${id}`}
            handleSave={handleSave}
            setIsEditing={setIsEditing}
          />
        </td>
      </tr>
    </Fragment>
  );
}
