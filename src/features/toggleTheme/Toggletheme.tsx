import { ReactComponent as DarkThemeIcon } from "../../assets/darkThemeIcon.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/lightThemeIcon.svg";
import switchon from "../../assets/switchon.mp3";
import switchoff from "../../assets/switchoff.mp3";
import { useThemeStore } from "../../store/store";
const Toggletheme = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setThem);

  const handelClick = () => {
    const sound = new Audio();
    sound.src = theme === "light" ? switchoff : switchon;
    sound.play();
    document.documentElement.classList.toggle(`dark-theme`);
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={handelClick}
      title={`Activate ${theme === "light" ? "dark" : "light"} mood`}
      className="absolute right-10 top-5 grid items-center rounded-md  bg-primary  p-2 hover:opacity-70  focus:outline-none"
    >
      {theme === "light" ? (
        <LightThemeIcon className="w-9" />
      ) : (
        <DarkThemeIcon className="w-9  text-base" />
      )}
    </button>
  );
};

export default Toggletheme;
