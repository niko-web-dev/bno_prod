import Image from "next/image";
import Link from "next/link";

const InstaIcon = () => {
  return (
    <div className="insta__icon">
      <Link
        href={`https://instagram.com/brandneworder.store?utm_medium=copy_link`}
        scroll={false}
      >
        <a target="_blank">
          <Image
            src="/static/images/insta.png"
            alt="brand"
            width={22}
            height={22}
          />
        </a>
      </Link>

      <style jsx>{`
        .insta__icon {
          margin-right: 30px;
        }
      `}</style>
    </div>
  );
};

export default InstaIcon;
