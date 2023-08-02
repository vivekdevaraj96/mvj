import React from "react";
import { Button } from "react-bootstrap";

function Selection() {
  return (
    <div className="Selection">
      <h1>Select Brand</h1>
      <div className="d-grid gap-2">
        <Button variant="outline-dark" size="lg">
          Bajaj
        </Button>
        <Button variant="outline-dark" size="lg">
          Honda
        </Button>
        <Button variant="outline-dark" size="lg">
          TVS
        </Button>
      </div>
    </div>
  );
}

export default Selection;
