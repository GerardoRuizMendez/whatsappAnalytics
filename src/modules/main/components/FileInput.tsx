import { useState } from "react";
import dataFrame from "../model/dataFrame";

export default function FileInput({
  setDataFrame,
  FileInputRef,
}: {
  setDataFrame: React.Dispatch<React.SetStateAction<dataFrame | undefined>>;
  FileInputRef: React.MutableRefObject<HTMLInputElement | null>;
}) {
  const [isDrag, setIsDrag] = useState(false);

  const fileHandler = (file: File) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const fileContent = e.target?.result;

      const fileDataParts = (fileContent as string).split("\n");
      setDataFrame(new dataFrame(fileDataParts));
    };
  };

  return (
    <div className="w-full relative flex flex-col items-center">
      <div
        className={`w-full text-[#ECECEC] bg-[#049382] h-[80vh] flex flex-col items-center justify-center ${
          isDrag ? "" : ""
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDrag(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-24 `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>

        <p>Drag and drop file</p>
        <p>or</p>
        <button
          className="text-[#ECECEC] bg-[#0F2F2B] hover:bg-[#0c2523] px-9 py-2 rounded-md mt-2"
          onClick={() => {
            FileInputRef.current?.click();
          }}
        >
          Browse
        </button>

        <div className="hidden">
          <input
            type="file"
            accept="application/txt"
            ref={FileInputRef}
            onChange={(e) => {
              if (e.target.files == null) return;
              const file = e.target.files[0];

              fileHandler(file);
            }}
          />
        </div>
      </div>
      <div
        className={`w-full h-full absolute flex items-center justify-center text-2xl bg-gray-800 bg-opacity-90 text-[#ECECEC] ${
          isDrag ? "" : "hidden"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDragLeave={() => {
          setIsDrag(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();

          if (e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            fileHandler(file);
          }

          setIsDrag(false);
        }}
      >
        <p>Arrastra aqui tu chat</p>
      </div>
    </div>
  );
}
