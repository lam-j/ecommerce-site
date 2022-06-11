import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Images(props) {
    const [activeThumb, setActiveThumb] = useState();

    function createImages() {
        if (props.isLightboxActive) {
            return (
                // note: navigation buttons aren't showing for lightbox
                <Swiper
                    className="full-image-swiper"
                    modules={[Navigation, Thumbs]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                    thumbs={{
                        swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
                    }}>
                    {props.product.productImages.map((image, index) => {
                        return (
                            <SwiperSlide key={props.product.productId + "image" + index}>
                                <img src={image} alt={props.product.name + " " + index} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            );
        } else {
            return (
                <Swiper
                    className="full-image-swiper"
                    modules={[Thumbs]}
                    spaceBetween={50}
                    slidesPerView={1}
                    thumbs={{
                        swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
                    }}>
                    {props.product.productImages.map((image, index) => {
                        return (
                            <SwiperSlide key={props.product.productId + "image" + index}>
                                <img
                                    src={image}
                                    alt={props.product.name + " " + index}
                                    onClick={() => props.toggleLightbox()}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            );
        }
    }

    return (
        <div className="product-images">
            <div className="full-images">{createImages()}</div>
            <div className="thumbnails">
                <Swiper
                    className="product-thumbnail-swiper"
                    modules={[Navigation, Thumbs]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={4}
                    onSwiper={setActiveThumb}>
                    {props.product.thumbnailImages.map((image, index) => {
                        return (
                            <SwiperSlide key={props.product.productId + "thumbnail" + index}>
                                <img src={image} alt={props.product.name + " thumbnail " + index} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
