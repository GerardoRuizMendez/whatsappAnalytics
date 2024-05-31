import { useRef, useState } from "react";
import PiePercentMessages from "../components/charts/PiePercentMessages";
import dataFrame from "../model/dataFrame";
import AreaByMonth from "../components/charts/AreaByMonth";
import LineByUserAndMonth from "../components/charts/LineByUserAndMonth";
import ColumnByWeek from "../components/charts/ColumnByWeek";
import Hero from "../components/Hero";
import FileInput from "../components/FileInput";

export default function Main() {
  const [dataFrameState, setDataFrame] = useState<dataFrame>();
  const FileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Hero />

      <FileInput FileInputRef={FileInputRef} setDataFrame={setDataFrame} />

      {dataFrameState != undefined && (
        <main className="w-full">
          <div className="w-full flex flex-col items-center">
            {/* <div>
                <p>Total de mensajes: {dataFrameState.rows.length}</p>
                <p>De los cuales:</p>
              </div> */}
            <PiePercentMessages data={dataFrameState.messagesBySender()} />
            <AreaByMonth data={dataFrameState.messagesByMonth()} />
            <LineByUserAndMonth data={dataFrameState.senderCountByMonth()} />
            <ColumnByWeek data={dataFrameState.messagesCountByWeek()} />
          </div>
        </main>
      )}
    </div>
  );
}
