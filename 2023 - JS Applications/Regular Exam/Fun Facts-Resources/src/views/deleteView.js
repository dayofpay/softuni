import page from "../../node_modules/page/page.mjs";

import { delFact} from "../api/data.js";

export async function onDelete(event) {
  console.log("Delete Event - ", event.target.id);


  const id = event.target.id;

  if (window.confirm("Are you sure?")) {
    await delFact(id);
    page.redirect('/facts')
  }
}