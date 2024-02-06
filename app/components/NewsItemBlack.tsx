import React from "react"

export default function NewsItemBlack({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="border-b border-grayish-blue pb-[1.81rem] pt-[1.94rem] last:border-b-0">
      <h3 className="cursor-pointer text-xl font-extrabold leading-6 text-off-white hover:text-soft-orange">
        {title}
      </h3>
      <p className="mt-2 text-[0.9375rem] leading-[1.625rem] text-grayish-blue">
        {text}
      </p>
    </div>
  )
}
