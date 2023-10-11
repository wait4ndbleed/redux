"use client";

import { setThemeStatus } from "@/redux/reducers/themeReducer";
import { setName } from "@/redux/reducers/userReducer";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispacth = useDispatch();
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };

  const changeName = (newName: string) => {
    dispacth(setName(newName));
  };

  const handleSwitchTheme = () => {
    switchTheme(theme.status === "light" ? "dark" : "light");
  };

  const switchTheme = (newTheme: string) => {
    dispacth(setThemeStatus(newTheme));
  };

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.
      <br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}
