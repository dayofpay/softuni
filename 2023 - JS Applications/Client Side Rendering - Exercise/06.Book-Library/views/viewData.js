import { html, render } from '../node_modules/lit-html/lit-html.js';
export let views = {
  "homepage": `
  <button id="loadBooks">LOAD ALL BOOKS</button>
  <table>
      <thead>
          <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
      </tbody>
  </table>

  <form>
      <h3 id="formTitle">FORM</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title...">
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author...">
      <button id="submitBook" type="submit">Submit</button>
  </form>
    `,
    "homepage.add-form" : `    <form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`,
    "homepage.edit-form" : `    <form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`
};

