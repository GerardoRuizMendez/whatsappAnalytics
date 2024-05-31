export default function Hero() {
  return (
    <div className="bg-primary h-screen flex flex-col items-center justify-center">
      <h1 className="text-custom_white text-6xl mb-4 text-center">
        WhatsApp Analitycs
      </h1>
      <h2 className="text-custom_white mb-6">
        <span className="text-custom_yellow">Discover</span> and{" "}
        <span className="text-custom_yellow">analyze</span> your conversations
      </h2>
      <div className="grid grid-cols-2 gap-2">
        <button className="text-custom_white bg-button hover:bg-darker_button px-9 py-2 rounded-md">
          Start
        </button>
        <button className="text-custom_white bg-button hover:bg-darker_button px-9 py-2 rounded-md">
          Tutorial
        </button>
      </div>
    </div>
  );
}
