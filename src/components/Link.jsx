import logo from "../assets/Asset 1.ico";

function Link() {
  return (
    <a href="https://sumedhasinghrathor.vercel.app/" target="_blank">
      <img
        src={logo}
        alt="logo"
        className="fixed size-18 p-2 bg-black rounded-full right-5 bottom-5"
      />
    </a>
  );
}

export default Link;
