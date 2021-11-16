import Image from "next/image";
import { useRef } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../pages/products/productCard";
import s from "./gallery.module.scss";

SwiperCore.use([Autoplay, Navigation]);

const GallerySlider = ({ products }) => {
  const navigationPrevRef1 = useRef(null);
  const navigationNextRef1 = useRef(null);

  return (
    <div className={s.gallery}>
      <div className="container">
        <h2 className={s.gallery__title}>новинки</h2>
        <div className={s.gallery__inner}>
          <button
            ref={navigationPrevRef1}
            className={s.gallery__pagination__prev}
          >
            <Image
              src="/static/images/slider/slide-arr.png"
              alt="brand"
              width={50}
              height={50}
            />
          </button>
          <button
            ref={navigationNextRef1}
            className={s.gallery__pagination__next}
          >
            <Image
              src="/static/images/slider/slide-arr.png"
              alt="brand"
              width={50}
              height={50}
            />
          </button>
          <div className={s.gallery__content}>
            <Swiper
              navigation={{
                prevEl: navigationPrevRef1.current,
                nextEl: navigationNextRef1.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef1.current;
                swiper.params.navigation.nextEl = navigationNextRef1.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1100: {
                  slidesPerView: 3,
                },
              }}
              loopedSlides={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              initialSlide={1}
              className={s.gallery__slider}
            >
              {products?.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
