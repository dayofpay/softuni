import page from "../../node_modules/page/page.mjs";

import { deleteFurniture } from "../api/data.js";
import { setHeader } from "../api/headerApi.js";

export function onDelete(event) {
  console.log("Delete Event - ", event.target.id);

  const confirmation = confirm("Are you sure?");

  const id = event.target.id;

  if (confirmation) {
    deleteFurniture(id);
    setHeader("Dashboard");
    page.redirect("/");
  }
}