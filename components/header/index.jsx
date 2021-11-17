import CardIcon from "../icons/CardIcon";
import SearchIcon from "../icons/searchIcon";
import Logo from "../logo/logo";
import MenuBtn from "../menuBtn";
import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <MenuBtn />
          <Logo />
          <div className={s.header__icons}>
            <SearchIcon />
            <CardIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
