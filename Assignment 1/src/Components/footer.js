import React from "react";

export default function Footer() {
  return (
    <footer>
      <b>
        <div>
          <a filter="SHOW_ALL">All</a>
          {", "}
          <u>
            {" "}
            <a filter="SHOW_ACTIVE">Pending</a>
          </u>
          {", "}
          <u>
            {" "}
            <a filter="SHOW_COMPLETED">Purchased</a>
          </u>
        </div>
      </b>
    </footer>
  );
}
