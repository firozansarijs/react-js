import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const newValue = (e) => {
    e.preventDefault();

    
    if (!title.trim() || !details.trim()) {
      alert("Please fill all fields.");
      return;
    }

  
    setTask([...task, { title, details }]);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen lg:flex bg-black">
      <form
        className="flex flex-col items-start lg:w-1/2 gap-5 text-white p-10"
        onSubmit={newValue}
      >
        <h1 className="font-bold text-2xl">Add notes</h1>

        <input
          className="px-5 py-2 w-1/2 border-2 rounded outline-none font-bold"
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="px-5 py-2 w-1/2 h-30 border-2 rounded outline-none font-medium resize-none"
          placeholder="Enter your details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white text-black h-10 w-1/2 rounded active:scale-95 cursor-pointer"
        >
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 lg:border-white p-10">
        <h1 className="text-2xl font-bold text-white">Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between h-80 w-70 p-5 rounded-2xl bg-cover bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]"
              >
                {/* Note Content */}
                <div className="flex-1 pt-8 px-5 pb-5 overflow-hidden">
                  <h1 className="font-bold text-xl break-words line-clamp-2">
                    {elem.title}
                  </h1>

                  <p className=" text-sm  text-gray-700 break-words mt-4 leading-7 overflow-hidden">
                    {elem.details}
                  </p>
                </div>

                
                <button
                  className="mt-4 bg-red-500 cursor-pointer active:scale-95 rounded py-2 text-white font-bold text-sm"
                  onClick={() => deleteNote(idx)}
                >
                  🗑 Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;