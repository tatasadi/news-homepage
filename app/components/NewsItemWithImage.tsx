import Image from "next/image"
import React from "react"

const NewsItemWithImage = ({
  number,
  title,
  text,
  imgSrc,
  imgAlt,
}: {
  number: string
  title: string
  text: string
  imgSrc: string
  imgAlt: string
}) => {
  return (
    <div className="mb-8 flex gap-6 lg:mb-0 lg:last:ml-[1.88rem]">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={100}
        height={150}
        className="object-cover"
      />
      <div className="">
        <p className="mb-3 text-[2rem] font-bold leading-8 text-grayish-blue">
          {number}
        </p>
        <h3 className="link mb-[0.56rem] text-lg font-extrabold leading-6">
          {title}
        </h3>
        <p className="text-[0.9375rem] leading-[1.625rem] text-dark-grayish-blue">
          {text}
        </p>
      </div>
    </div>
  )
}

export default NewsItemWithImage
