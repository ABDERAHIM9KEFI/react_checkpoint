import React from "react";
import "./App.css";
import "./bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">First Name</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Jonas"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Kahnwald"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              I'm Not a Robot (bethi9a hhh)
            </label>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1"></label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
