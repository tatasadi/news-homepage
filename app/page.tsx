import Image from "next/image"
import Header from "./components/Header"
import NewsItemBlack from "./components/NewsItemBlack"
import NewsItemWithImage from "./components/NewsItemWithImage"
import Reference from "./components/Reference"
import imageRetro from "@/public/images/image-retro-pcs.jpg"
import imageTopLaptops from "@/public/images/image-top-laptops.jpg"
import imageGrowthOfGaming from "@/public/images/image-gaming-growth.jpg"

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-4 mt-8 lg:mx-[10.31rem] lg:mt-[3.44rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="h-[18.75rem] w-full bg-[url('/images/image-web-3-mobile.jpg')] bg-cover bg-no-repeat lg:col-span-2 lg:bg-[url('/images/image-web-3-desktop.jpg')]"></div>
          <h1 className="lg:mr:[1.88rem] mt-6 text-[2.5rem] font-extrabold leading-10 lg:row-start-2 lg:mt-0 lg:text-[3.5rem] lg:leading-[3.5rem]">
            The Bright Future of Web 3.0?
          </h1>
          <div className="lg:row-start-2">
            <p className="mt-4 text-[0.9375rem] leading-[1.625rem] text-dark-grayish-blue lg:mt-0">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <a
              className="mt-6 inline-block bg-soft-red px-8 py-3 text-sm font-bold uppercase leading-6 tracking-[0.27344rem] text-white lg:mt-[1.88rem]"
              href="#"
              aria-label="Read more about the Bright Future of Web 3.0"
            >
              Read More
            </a>
          </div>
          <div className="my-16 bg-very-dark-blue p-5 lg:row-span-2 lg:mb-[4.44rem] lg:ml-[1.87rem] lg:mt-0 lg:px-6 lg:py-8">
            <h2 className="mb-1 text-[2rem] font-bold leading-8 text-soft-orange lg:mb-[0.19rem] lg:text-[2.5rem] lg:leading-10">
              New
            </h2>
            <NewsItemBlack
              title="Hydrogen VS Electric Cars"
              text="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <NewsItemBlack
              title="The Downsides of AI Artistry"
              text="What are the possible adverse effects of on-demand AI image generation?"
            />
            <NewsItemBlack
              title="Is VC Funding Drying Up?"
              text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </div>
          <NewsItemWithImage
            number="01"
            title="Reviving Retro PCs"
            text="What happens when old PCs are given modern upgrades?"
            imgSrc="/images/image-retro-pcs.jpg"
            imgAlt="Retro PCs"
          />
          <NewsItemWithImage
            number="02"
            title="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets."
            imgSrc="/images/image-top-laptops.jpg"
            imgAlt="Top Laptops"
          />
          <NewsItemWithImage
            number="03"
            title="The Growth of Gaming"
            text="How the pandemic has sparked fresh opportunities."
            imgSrc="/images/image-gaming-growth.jpg"
            imgAlt="Gaming Growth"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3"></div>
      </main>
      <Reference />
    </>
  )
}
