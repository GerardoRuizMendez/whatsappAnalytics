import { useState } from "react";
import FileInput from "../components/FileReader";
import PiePercentMessages from "../components/charts/PiePercentMessages";
import dataFrame from "../model/dataFrame";
import AreaByMonth from "../components/charts/AreaByMonth";
import LineByUserAndMonth from "../components/charts/LineByUserAndMonth";
import ColumnByWeek from "../components/charts/ColumnByWeek";

export default function Main() {
  const [dataFrame, setDataFrame] = useState<dataFrame>();

  return (
    <main className="">
      <FileInput setDataFrame={setDataFrame} />

      {dataFrame != undefined && (
        <div>
          <div>
            <p>Total de mensajes: {dataFrame.rows.length}</p>
            <p>De los cuales:</p>
          </div>
          <div className="flex flex-col">
            <PiePercentMessages data={dataFrame.messagesBySender()} />
            <AreaByMonth data={dataFrame.messagesByMonth()} />
            <LineByUserAndMonth data={dataFrame.senderCountByMonth()} />
            <ColumnByWeek data={dataFrame.messagesCountByWeek()} />
          </div>
        </div>
      )}
    </main>
  );
}
