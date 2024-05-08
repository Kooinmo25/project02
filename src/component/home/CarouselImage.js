import React from "react";

export default function CarouselImage({ src, text }) {
    return (
        <div className="aspect-ratio-16/9">
            <img
                className="d-block w-100 h-100 object-fit-cover"
                src={src}
                alt={text}
            />
        </div>
    )
}