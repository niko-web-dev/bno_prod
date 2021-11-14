import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ContextCard } from "../../context/contextCard";
import header_s from "../header/header.module.scss";
import s from "../menu/menu.module.scss";

const CardIcon = () => {
  const [cardLs, setCardLs] = useContext(ContextCard);

  return (
    <div className="header__card">
      <Link href="/Card" shallow={true} scroll={false}>
        <a className={header_s.header__card}>
          <Image
            src="/static/images/shopping-cart.png"
            alt="cart"
            width={22}
            height={22}
          />
          <span className={s.card__count}>{cardLs?.length}</span>
        </a>
      </Link>

      <style jsx>{``}</style>
    </div>
  );
};

export default CardIcon;
