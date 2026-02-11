import { useState } from "react";

function PixelPilot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [fileNames, setFileNames] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const aiMsg = {
        role: "assistant",
        content:
          "This response comes from AI. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eum maiores in animi quam accusamus perspiciatis reprehenderit similique delectus, excepturi, voluptate itaque culpa harum ipsam vel repellat error ea esse!",
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const names = files.map((file) => file.name);
    setFileNames(names);
  };

  const removeFile = (index) => {
    setFileNames((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className="bg-[#611c47] flex p-5 h-[100vh]"
      style={{ fontFamily: "Instrument Sans" }}
    >
      <div
        className={
          openSidebar
            ? "mr-2.5 w-45 py-5 px-2.5 flex flex-col gap-2.5 justify-end text-[#fdecea]"
            : "hidden"
        }
      >
        <div>
          <h3 className="text-sm font-semibold">Today</h3>
          <div className="p-2.5 truncate hover:bg-[#fdecea]/10 rounded cursor-pointer">
            Fake News Detection
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Yesterday</h3>
          <div className="p-2.5 truncate hover:bg-[#fdecea]/10 rounded cursor-pointer">
            ATS Resume Optimization Tips
          </div>
          <div className="p-2.5 truncate hover:bg-[#fdecea]/10 rounded cursor-pointer">
            Pseudocode Output Explanation
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Last Week</h3>
          <div className="p-2.5 truncate hover:bg-[#fdecea]/10 rounded cursor-pointer">
            DHT Node Location Calcuation
          </div>
          <div className="p-2.5 truncate hover:bg-[#fdecea]/10 rounded cursor-pointer">
            SAP benefits GAIL
          </div>
          <div className="p-2.5 truncate hover:bg-[#fdecea]/10 rounded cursor-pointer">
            Short-Run Production Analysis
          </div>
        </div>
      </div>
      <div className="bg-[#fdecea] text-[#611c47] w-full rounded-2xl px-15 py-7.5 flex flex-col gap-2.5 items-center">
        <div
          className="grow text-start w-full flex flex-col gap-2 overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          {messages.length === 0 ? (
            <h1 className="text-6xl font-bold text-center my-auto">
              Ask us questions, we'll solve your coding problems
            </h1>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`${msg.role === "user" ? "bg-[#611c47] text-[#fdecea] w-fit max-w-4/5 h-fit self-end px-4 py-1 rounded-lg text-start" : ""}`}
              >
                {msg.content}
              </div>
            ))
          )}
        </div>
        <div className="px-5 py-1.25 bg-[#611c47] text-[#fdecea] rounded-lg w-full flex flex-col gap-1.5">
          {fileNames.length > 0 && (
            <div className="flex gap-2">
              {fileNames.map((f, i) => (
                <div
                  key={f + "-" + i}
                  className="w-30 truncate border text-xs flex items-center bg-[#fdecea] text-[#611c47] p-1 rounded"
                >
                  <p className="font-bold truncate">{f}</p>
                  <i
                    className="bx bx-x text-base"
                    onClick={() => removeFile(i)}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-3 w-full">
            <div className="hover:bg-[#fdecea]/30 flex justify-center items-center p-1 rounded">
              <i
                className="text-2xl bx bx-paperclip -rotate-45"
                onClick={() => document.getElementById("input-field").click()}
                title="Attach files"
              />
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                id="input-field"
                hidden
              />
            </div>
            <input
              type="text"
              className="bg-[#fdecea] p-2.5 text-[#611c47] rounded-lg grow focus:outline-0"
              placeholder="Start Chatting..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <i
              className="text-2xl bx bxs-microphone hover:bg-[#fdecea]/30 p-1 rounded"
              title="Add Audio"
            />
            <i
              className="text-2xl bx bx-plus hover:bg-[#fdecea]/30 p-1 rounded"
              title="New Chat"
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          </div>
        </div>
        <p className="text-xs">
          PixelPilot uses AI. Check for mistakes. Conversations are used to
          train AI and PixelPilot can learn about your interests. Change this
          anytime in your settings or{" "}
          <a href="" className="underline">
            Learn More
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default PixelPilot;
