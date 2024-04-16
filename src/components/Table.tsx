// import "./styles.css";
import React, { useEffect, useState, Fragment } from "react";

import { CancelIcon, AddIcon } from "../utils/icons.tsx";

import { getEvents, putEvent, postEvent, deleteEvent } from "../utils/apis.js";

import EventTr, { Event } from "./EventTr.tsx";

export default function EventTable() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    getEvents().then((data: Event[]) => setEvents(data));
  }, []);

  useEffect(() => {
    getEvents().then((data: Event[]) => setEvents(data));
  }, []);

  const handleDelete = (eventId: string) => {
    // remove from server
    deleteEvent(eventId);
    // remove from state
    const newEvents = events.filter((e: Event) => e.id !== eventId);
    setEvents(newEvents);
  };

  const handleSave = (eventId) => {
    let newEvents = events.filter((e) => e.id !== eventId);
    const editedEvent = {
      eventName: (
        document.getElementById(eventId + "-eventName") as HTMLInputElement
      ).value,
      startDate: (
        document.getElementById(eventId + "-startDate") as HTMLInputElement
      ).value,
      endDate: (
        document.getElementById(eventId + "-endDate") as HTMLInputElement
      ).value,
    };
    editedEvent.id =
      editedEvent.eventName + editedEvent.startDate + editedEvent.endDate;

    putEvent(eventId, editedEvent);
    newEvents.push(editedEvent);
    setEvents(newEvents);
  };

  function handleAdd() {
    const eventName = (
      document.getElementById(
        "newEventInput" + "-eventName"
      ) as HTMLInputElement
    ).value;
    const startDate = (
      document.getElementById(
        "newEventInput" + "-startDate"
      ) as HTMLInputElement
    ).value;
    const endDate = (
      document.getElementById("newEventInput" + "-endDate") as HTMLInputElement
    ).value;

    const newEvent = {
      eventName: eventName,
      startDate: startDate,
      endDate: endDate,
      id: eventName + startDate + endDate,
    };

    setEvents([...events, newEvent]);
    postEvent(newEvent);
    (
      document.getElementById(
        "newEventInput" + "-eventName"
      ) as HTMLInputElement
    ).value = "";
    (
      document.getElementById(
        "newEventInput" + "-startDate"
      ) as HTMLInputElement
    ).value = "";
    (
      document.getElementById("newEventInput" + "-endDate") as HTMLInputElement
    ).value = "";
    setIsAdding(false);
  }

  function handleCancelAddToggle() {
    setIsAdding(false);
  }

  function handleAddNewToggle() {
    setIsAdding(true);
  }

  return (
    <>
      <div className="header" onClick={handleAddNewToggle}>
        <button id="btn__add-new-event">Add New Event </button>
      </div>
      <div id="table__event">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Start</th>
              <th>End</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <EventTr
                key={event.id + "-tr"}
                event={event}
                handleDelete={handleDelete}
                handleSave={handleSave}
              />
            ))}
          </tbody>
          <tfoot className={isAdding ? "show" : "collapsed"}>
            <tr>
              <td>
                <input
                  type="text"
                  id={"newEventInput" + "-eventName"}
                  placeholder="new event name..."
                />
              </td>
              <td>
                <input
                  type="date"
                  id={"newEventInput" + "-startDate"}
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
              </td>
              <td>
                <input
                  type="date"
                  id={"newEventInput" + "-endDate"}
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
              </td>
              <td className="div__action-buttons">
                <button
                  type="button"
                  className="button__add-event"
                  onClick={() => handleAdd()}
                >
                  <AddIcon />
                </button>

                <button
                  type="button"
                  className="button__cancel-event"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCancelAddToggle();
                  }}
                >
                  <CancelIcon />
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
