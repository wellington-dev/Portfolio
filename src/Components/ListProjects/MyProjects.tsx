import * as S from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import { Pagination, A11y } from "swiper";

export interface ItemsList {
  title: string;
  description: string;
  image: string;
  tecnologia: string;
  webUrl: string;
  githubUrl: string;
  id: number;
}

interface ItemsProps {
  project: ItemsList[];
}

export default function MyProjects({ project }: ItemsProps) {
  return (
    <S.Container>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={5}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, A11y]}
        freeMode={true}
        className={"mySwiper"}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {project?.map((items) => (
          <SwiperSlide className="slider" key={items.id}>
            <S.Cards
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img src={items.image} />
              <div>
                <div className="description-box">
                  <p>{items.description}</p>
                  <div className="tecnologi">{items.tecnologia}</div>
                </div>
                <div className="link-repo">
                  <a href={`${items.webUrl}`} target="_blank">
                    Ver site
                  </a>
                  <a href={`${items.githubUrl}`} target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </S.Cards>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
}
