export default function Hero() {
  return (
    <div className="w-full bg-[#075E54] h-screen flex flex-col items-center justify-center">
      <h1 className="text-[#ECECEC] text-6xl mb-4 text-center">
        WhatsApp Analitycs
      </h1>
      <h2 className="text-[#ECECEC] mb-6">
        <span className="text-yellow-500">Discover</span> and{" "}
        <span className="text-yellow-500">analyze</span> your conversations
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <button className="text-[#ECECEC] bg-[#0F2F2B] hover:bg-[#0c2523] px-9 py-2 rounded-md">
          Start
        </button>
        <button className="text-[#ECECEC] bg-[#0F2F2B] hover:bg-[#0c2523] px-9 py-2 rounded-md">
          Tutorial
        </button>
      </div>
    </div>
  );
}
