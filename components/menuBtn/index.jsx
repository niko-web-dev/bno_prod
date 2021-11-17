import Image from "next/image";
import s from "../header/header.module.scss";
import { useContext } from "react";
import { contextMenu } from "../../context/contextMenu";

const MenuBtn = () => {
  const [toggleMenu, setToggleMenu] = useContext(contextMenu);

  function handleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <button type="button" className={s.menu__btn}>
      <Image
        width={50}
        height={50}
        className={s.menu__img}
        src="/static/images/menu.png"
        alt="menu"
        onClick={handleMenu}
      />
    </button>
  );
};

export default MenuBtn;
