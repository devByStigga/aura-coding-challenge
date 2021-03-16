// Globals
import React, { useContext } from "react";

// Components
import { Record } from "components/Record";

// Misc
import { data } from "components/Record/data";
import { RecordsContext } from "./RecordsProvider/RecordsProvider";

// Component
function GlobalRecordsView() {
  const { values, error } = useContext(RecordsContext);
  return (
    <div className="aura-page aura-global_records">
      {values ? (
        <>
          <h1>Top Records of 2020</h1>
          <div className="aura-page-content">
            {values.map((record) => {
              return <Record key={record.id} data={record} />;
            })}
          </div>
        </>
      ) : (
        "Fetching Data..."
      )}
    </div>
  );
}

export { GlobalRecordsView };
