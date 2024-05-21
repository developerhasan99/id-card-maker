import { useState } from "react";
import useExportToPNG from "./useExportToPng";

const card_id = Math.floor(Math.random() * 10000000000);

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function App() {
  const [state, setState] = useState({
    avatar: window.card_avatars[0],
    name: "",
    starSign: "",
  });

  const { elementRef, captureAndExport } = useExportToPNG();

  const handleAvatarChange = (avatar) => {
    setState((prevState) => ({ ...prevState, avatar }));
  };

  const handleNameChange = (event) => {
    setState((prevState) => ({ ...prevState, name: event.target.value }));
  };

  const handleStarSignChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      starSign: event.target.value,
    }));
  };

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <div className="max-w-screen-lg px-4 py-12 mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
        ID Card Maker
      </h2>
      <div className="grid grid-cols md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            Select avatar:
          </h3>
          <div className="flex gap-4 flex-wrap mb-8">
            {window.card_avatars.map((avatar, index) => (
              <button
                key={index}
                onClick={() => handleAvatarChange(avatar)}
                className={`rounded-xl bg-gray-800 ${
                  state.avatar.text === avatar.text
                    ? "border-2 border-red-700"
                    : "p4 border-gray-700 border-2"
                }`}
              >
                <img className="max-w-16" src={avatar.url} alt={avatar.text} />
              </button>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2">
            User Details:
          </h3>
          <input
            type="tex"
            onChange={handleNameChange}
            placeholder="Enter your name"
            className="border-gray-700 border-2 rounded-lg bg-gray-800 p-2 w-full text-white focus:outline-none focus:border-red-700 mb-4"
          />
          <input
            type="tex"
            onChange={handleStarSignChange}
            placeholder="Enter star sign"
            className="border-gray-700 mb-4 border-2 rounded-lg bg-gray-800 p-2 w-full text-white focus:outline-none focus:border-red-700"
          />
          <button
            onClick={captureAndExport}
            className="bg-red-700 rounded-lg p-2 w-full text-white"
          >
            Download ID Card
          </button>
        </div>
        <div className=" overflow-x-auto">
          <div
            ref={elementRef}
            className="border-2 border-red-700 rounded-lg bg-gray-700 w-[400px]"
          >
            <div className="bg-red-700 text-white font-bold uppercase text-center py-1 tracking-wider font-xl">
              ID Card
            </div>
            <div className="p-4 flex gap-4">
              <img
                className="w-32 bg-gray-600 rounded-lg"
                src={state.avatar.url}
                alt={state.avatar.text}
              />
              <div>
                <h3 className="text-gray-100">ID: {card_id}</h3>
                <h3 className="text-white font-bold text-xl flex items-center gap-2">
                  {state.name}
                  <span className="text-sm text-red-700">
                    {state.avatar.text}
                  </span>
                </h3>
                <h3 className="text-gray-100 mb-2">{state.starSign}</h3>
                <p className="text-green-400">Date: {formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
