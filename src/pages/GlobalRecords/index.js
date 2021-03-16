// Globals
import React, { useState } from "react";

// Components
import { Record } from "components/Record";

// Misc
import { data } from "components/Record/data";
import { mockFetch } from "../../util/mockFetch";
import RecordsProvider from "./RecordsProvider/RecordsProvider";
import { GlobalRecordsView } from "./globalRecordsView";

// Component
function GlobalRecords() {
  const [values, setValues] = useState();

  /*
    tried handling error by setting state with hook,
    passing it to the provider => if error, display
    the error to the user. I was getting some weird errors
    that I didn't understand. I'd like to talk about
    what those errors I ran into with someone if that's possible.
    I can reproduce and show you exactly what the errors were.
*/

  //const [error, setError] = useState()
  mockFetch()
    .then((data) => {
      if (data) {
        setValues(data);
      }
    })
    .catch((error) => console.log(error));

  return (
    <RecordsProvider values={values}>
      <GlobalRecordsView />
    </RecordsProvider>
  );
}

export { GlobalRecords };
