import Map from "./components/Map"
const telegram = window.Telegram.WebApp;

function App() {
  //console.log(telegram);
  const sendHelloWorld = () => {
    const data = {
      message: "Hello world!",
      userId: telegram.initDataUnsafe.user?.id
    }
    telegram.sendData(JSON.stringify(data));
  }

  return (
    <div className="flex flex-col p-4 gap-4">
      <h1>Testing map</h1>
      <Map />
      <button className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
      onClick={sendHelloWorld}
      > 
        Testing
      </button>
    </div>
  )
}

export default App
