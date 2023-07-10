import {showLoginPage} from "./loginPageEvents.js";

let routeViews = {
    "login" : `
    <section id="form-login" class="view-section">
    <form
      id="login-form"
      class="text-center border border-light p-5"
      action=""
      method=""
    >
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="Email"
          name="email"
          value=""
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="Password"
          name="password"
          value=""
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </section>
    `,
    "register" : `
    <section id="form-sign-up" class="view-section">
        <form
          id="register-form"
          class="text-center border border-light p-5"
          action=""
          method=""
        >
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value=""
            />
          </div>

          <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input
              id="repeatPassword"
              type="password"
              class="form-control"
              placeholder="Repeat-Password"
              name="repeatPassword"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </section>
    `,
    "nonLoggedUserHeader" : `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item guest">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item guest">
        <a class="nav-link" href="#">Register</a>
      </li>
    </ul>
  </nav>
    `,



}

const mainContainer = document.querySelector('#home-page');

export {routeViews,mainContainer};