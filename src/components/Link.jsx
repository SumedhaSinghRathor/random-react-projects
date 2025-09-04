import logo from "../assets/Asset 1.ico";
import preview from "../assets/MY PORTFOLIO.png";
import LinkTooltip from "./LinkTooltip";

function Link() {
  return (
    <LinkTooltip infoText={preview} className="z-100">
      <a href="https://sumedhasinghrathor.vercel.app/" target="_blank">
        <img
          src={logo}
          alt="logo"
          className="fixed size-18 p-2 bg-black rounded-full right-5 bottom-5"
        />
      </a>
    </LinkTooltip>
  );
}

export default Link;
