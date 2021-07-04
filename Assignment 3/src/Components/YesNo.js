import React from "react";
import { Link } from "react-router-dom";

export function Business() {
  return (
    <div>
      <h1>Are you a business owner?</h1>
      <Link to="/Location">
        <button>Yes</button>
      </Link>
      <Link to="/Facebook">
        <button>No</button>
      </Link>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h1>Located in US?</h1>
      <Link to="/Corporation">
        <button>Yes</button>
      </Link>
      <Link to="/Denied">
        <button>No</button>
      </Link>
    </div>
  );
}

export function Facebook() {
  return (
    <div>
      <h1>Login with Facebook?</h1>
      <Link to="/FacebookWidget">
        <button>Yes</button>
      </Link>
      <Link to="/EmailSignUp">
        <button>No</button>
      </Link>
    </div>
  );
}

export function Corporation() {
  return (
    <div>
      <h1>Large Corporation?</h1>
      <Link to="/Survey">
        <button>Yes</button>
      </Link>
      <Link to="/ContractedCorporation">
        <button>No</button>
      </Link>
    </div>
  );
}

export function Denied() {
  return (
    <div>
      <h1>Access Denied</h1>
    </div>
  );
}

export function Survey() {
  return (
    <div>
      <h1>Interested in taking Survey?</h1>
      <Link to="/CorporationSignUp">
        <button>Yes</button>
      </Link>
      <Link to="/CorporationSignUp">
        <button>No</button>
      </Link>
    </div>
  );
}

export function CorporationSignUp() {
  return (
    <div>
      <h1>Large Corporation Sign-up form</h1>
      <form>
        <p>Username:</p>
        <input type="text" />
        <p>Password:</p>
        <input type="text" />
      </form>
    </div>
  );
}

export function ContractedCorporation() {
  return (
    <div>
      <h1>Contracted with Large Corporation?</h1>
      <Link to="/ContractLargeCorp">
        <button>Yes</button>
      </Link>
      <Link to="/SmallCorpSignUp">
        <button>No</button>
      </Link>
    </div>
  );
}
export function ContractLargeCorp() {
  return (
    <div>
      <h1>User must contract large Corporation.</h1>
      <form>
        <p>Username:</p>
        <input type="text" />
        <p>Password:</p>
        <input type="text" />
      </form>
    </div>
  );
}
export function SmallCorpSignUp() {
  return (
    <div>
      <h1>Small corp sign up form</h1>
      <form>
        <p>Username:</p>
        <input type="text" />
        <p>Password:</p>
        <input type="text" />
      </form>
    </div>
  );
}

export function FacebookWidget() {
  return (
    <div>
      <h1>Facebook Login Widget</h1>
      <form>
        <p>Username:</p>
        <input type="text" />
        <p>Password:</p>
        <input type="text" />
      </form>
      <Link to="/Backend">
        <button>Then</button>
      </Link>
    </div>
  );
}

export function EmailSignUp() {
  return (
    <div>
      <h1>E-mail Sign-up Form</h1>
      <form>
        <p>Username:</p>
        <input type="text" />
        <p>Password:</p>
        <input type="text" />
      </form>
      <Link to="/Backend">
        <button>Then</button>
      </Link>
    </div>
  );
}

export function Backend() {
  return (
    <div>
      <h1>Backend</h1>
      <Link to="/Corporation">
        <button>Then</button>
      </Link>
    </div>
  );
}
