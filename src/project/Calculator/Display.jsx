function Display({ value, expression }) {
  return (
    <div className="bg-[#D9D2C2] w-full aspect-3/2 rounded-lg flex flex-col justify-end items-end p-4">
      <div className="font-bold text-xl opacity-45">{expression}</div>
      <div className="text-5xl w-full text-end truncate text-ellipsis">
        {value}
      </div>
    </div>
  );
}

export default Display;
