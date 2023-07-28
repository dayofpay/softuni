import page from "../../node_modules/page/page.mjs";

import { delFruit} from "../api/data.js";

export function onDelete(event) {
  console.log("Delete Event - ", event.target.id);

  const confirmation = confirm("Are you sure?");

  const id = event.target.id;

  if (confirmation) {
    delFruit(id);
    page.redirect("/");
  }
}