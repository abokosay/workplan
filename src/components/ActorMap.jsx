import React, { useState } from "react";
import ModalInfo from "./ModalInfo";

export const actorsData = {
  Customer: { icon: "🧑‍💻", tasks: ["Place order", "Track order"] },
  "Delivery Guy": { icon: "🏍️", tasks: ["Pick up order", "Deliver order"] },
  Admin: { icon: "🛠️", tasks: ["Manage users", "Configure system"] },
  Manager: { icon: "👔", tasks: ["Monitor operations", "Analyze reports"] },
  Chef: { icon: "👨‍🍳", tasks: ["Prepare orders", "Update KDS"] },
};

function ActorMap() {
  const [modalData, setModalData] = useState(null);

  return (
    <div>
      {Object.keys(actorsData).map((actor) => (
        <div
          key={actor}
          onClick={() =>
            setModalData({ name: actor, tasks: actorsData[actor].tasks })
          }
          style={{ cursor: "pointer", margin: "5px 0" }}
        >
          {actorsData[actor].icon} {actor}
        </div>
      ))}

      {modalData && <ModalInfo data={modalData} onClose={() => setModalData(null)} />}
    </div>
  );
}

export default ActorMap;
