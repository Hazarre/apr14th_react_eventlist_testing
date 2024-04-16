const API_URL = "http://localhost:3000/events";

async function getEvent(id) {
    return fetch(`${API_URL}/${id}`).then((res) => res.json());
}

async function getEvents() {
    return fetch(API_URL).then((res) => res.json());
}

async function putEvent(id, newEvent) {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    }).then((res) => res.json());
}

async function postEvent(newEvent) {
    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    }).then((res) => res.json());
}

async function deleteEvent(id) {
    return fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    }).then((res) => res.json());
}

export { getEvent, getEvents, putEvent, postEvent, deleteEvent };
