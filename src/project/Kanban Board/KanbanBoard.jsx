import { useState } from "react";

function KanbanBoard() {
  const [columns, setColumns] = useState({
    notStarted: {
      name: "Not Started",
      items: [
        { id: 1, content: "Market Research" },
        { id: 2, content: "Write Projects" },
      ],
    },
    inProgress: {
      name: "In Progress",
      items: [{ id: 3, content: "Design UI Mockups" }],
    },
    upToDate: {
      name: "Up To Date",
      items: [{ id: 4, content: "Content of Up To Date" }],
    },
    dropped: {
      name: "Dropped",
      items: [{ id: 5, content: "Content of Dropped" }],
    },
    done: {
      name: "Done",
      items: [{ id: 6, content: "Content of Done" }],
    },
  });

  const [newTask, setNewTask] = useState("");
  const [activeColumn, setActiveColumn] = useState("notStarted");
  const [draggedItem, setDraggedItem] = useState(null);

  const addNewTask = () => {
    if (newTask.trim() === "") return;

    const updatedColumns = { ...columns };
    updatedColumns[activeColumn].items.push({
      id: Date.now(),
      content: newTask,
    });

    setColumns(updatedColumns);
    setNewTask("");
  };

  const removeTask = (columnId, taskId) => {
    const updatedColumns = { ...columns };

    updatedColumns[columnId].items = updatedColumns[columnId].items.filter(
      (item) => item.id !== taskId
    );

    setColumns(updatedColumns);
  };

  const handleDragStart = (columnId, item) => {
    setDraggedItem({ columnId, item });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();

    if (!draggedItem) return;

    const { columnId: fromColumn, item } = draggedItem;

    if (fromColumn === columnId) return;

    const updatedColumns = { ...columns };

    // remove from previous column
    updatedColumns[fromColumn].items = updatedColumns[fromColumn].items.filter(
      (i) => i.id !== item.id
    );

    // add to new column
    updatedColumns[columnId].items.push(item);

    setColumns(updatedColumns);
    setDraggedItem(null);
  };

  const columnStyles = {
    notStarted: {
      background: "bg-[#E6E5E3] text-[#494846]",
      border: "border border-[#494846]",
    },
    inProgress: {
      background: "bg-[#CBE3F7] text-[#264A72]",
      border: "border border-[#264A72]",
    },
    upToDate: {
      background: "bg-[#F2E3B7] text-[#6D5A2A]",
      border: "border border-[#6D5A2A]",
    },
    done: {
      background: "bg-[#D7E6DD] text-[#355C46]",
      border: "border border-[#355C46]",
    },
    dropped: {
      background: "bg-[#F7D9D5] text-[#763F3C]",
      border: "border border-[#763F3C]",
    },
  };

  return (
    <section
      className="w-full h-screen p-4"
      style={{ fontFamily: "Geist, sans-serif" }}
    >
      <h1 className="w-full text-center text-2xl font-semibold">
        Kanban Board
      </h1>

      <div className="border flex p-2 gap-2 items-center mt-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="grow px-2 py-1 border rounded outline-0"
          onKeyDown={(e) => e.key === "Enter" && addNewTask()}
        />

        <select
          value={activeColumn}
          onChange={(e) => setActiveColumn(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          {Object.keys(columns).map((columnId) => (
            <option value={columnId} key={columnId}>
              {columns[columnId].name}
            </option>
          ))}
        </select>

        <button onClick={addNewTask} className="px-4 py-1 border rounded">
          Add
        </button>
      </div>

      <div className="mt-4 gap-3 grid grid-cols-5">
        {Object.keys(columns).map((columnId) => (
          <div
            key={columnId}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, columnId)}
            className={`${columnStyles[columnId].border} ${columnStyles[columnId].background} rounded p-2`}
          >
            <div className="text-center font-medium mb-2">
              {columns[columnId].name}
            </div>

            <div className="space-y-2">
              {columns[columnId].items.length === 0 ? (
                <div className="text-center opacity-70 text-sm">
                  Drop tasks here
                </div>
              ) : (
                columns[columnId].items.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(columnId, item)}
                    className="flex justify-between items-center px-2 py-1 bg-white rounded shadow cursor-move"
                  >
                    <span>{item.content}</span>
                    <i
                      className="bx bx-x hover:bg-gray-400/20 cursor-pointer"
                      onClick={() => removeTask(columnId, item.id)}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KanbanBoard;
