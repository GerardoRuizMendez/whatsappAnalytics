import dataFrame from "../model/dataFrame";

export default function FileInput({
  setDataFrame,
}: {
  setDataFrame: React.Dispatch<React.SetStateAction<dataFrame | undefined>>;
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null) return;
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const fileContent = e.target?.result;

      const fileDataParts = (fileContent as string).split("\n");
      setDataFrame(new dataFrame(fileDataParts));
    };
  };

  return (
    <div>
      <input type="file" accept="application/txt" onChange={handleFileChange} />
    </div>
  );
}
