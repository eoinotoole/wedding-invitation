export let modalCloseEvent;

export const createCustomEvents = () => {
  modalCloseEvent = new Event("modalClose");
};
