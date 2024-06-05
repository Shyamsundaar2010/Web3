import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Slider } from "../src/components";
import React from "react";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);

  return(
    <>
      <Helmet>
      <title>Explore Web3 & Crypto Quests | Superboard</title>
        <meta
          name="description"
          content="Dive into Superboard for curated web3 and crypto quests. Discover trending mints, earn rewards, and join the Optimism community. Start your quest today!"
        />
      </Helmet>
<div className="bg-gray-900_03 w-full min-h-screen flex flex-col items-center p-[26px] sm:p-5 overflow-hidden">
      <div className="flex w-full flex-col items-center p-[26px] sm:p-5">
        <div className="mx-auto mb-[5px] flex w-full max-w-[1365px] flex-col gap-[54px] self-stretch sm:gap-[27px]">
          <Img src="images/img_header_logo.svg" alt="primary logo" className="h-[33px] w-[48px] object-contain" />
        </div>

        <div className="absolute bottom-0 left-0 w-full flex items-end justify-center h-[61px] space-x-20 pb-4
         md:flex md:w-full md:flex-col md:gap-[23px] md:w-full md:absolute md:top-40">
          <img
            src="images/img_frame.svg"
            alt="explore image"
            className="h-[20px] w-[20px] md:absolute md:-top-12 md:left-10 md:bottom-8"
          />
          <Text className="hidden md:block md:-left-2 md:-top-12  md:absolute" size="md" > Explore</Text>

          <img src="images/img_frame_gray_400.svg" 
            alt="quests image" 
            className="h-[20px] w-[20px] md:absolute md:-top-2 md:-left-10" />
          <Text className="hidden md:block md:-left-2 md:-top-2  md:absolute" size="md" > Quests</Text>

          <img src="images/img_frame_gray_400_20x20.svg" 
            alt="mints image" 
            className="h-[20px] w-[20px] md:absolute md:-bottom-0 md:-left-10 " />
          <Text className="hidden md:block md:-left-2 md:-bottom-0  md:absolute" size="md" > Mints</Text>
          <img
            src="images/img_header_logo_30x30.png"
            alt="secondary logo"
            className="h-[20px] w-[20px] rounded-sm object-contain md:absolute md:-top-32 md:right-14"
          />
        </div>
      </div>
    <div className="hidden sm:block flex w-[179px] h-[154.59px] flex-col gap-1 rounded-[15px] border border-solid border-blue_gray-900_01 bg-gray-900_01 p-[7px] md:-ml-[650px] lg:-ml-[1000px] xl:mr-[200px]" style={{ position: 'sticky', top: '300px', zIndex: 999 }}>
      <Img src="images/img_group_2085663623.svg" alt="collect image" className="h-[125px]" />
      <Button color="green_A100" size="2xl" shape="round" className="w-full font-medium sm:px-5">
        Collect Treats
      </Button>
    </div>

      <div className="flex w-[65%] flex-col gap-11 w-full ml-[-40px] md:ml-[200px]">
        <div className="flex flex-col gap-[9px]">
          <div>
            <div className="flex items-start justify-between gap-5 ">
              <div className="flex flex-col items-start">
                <Text size="lg" as="p" className="!text-white-A700_01 md:-mt-[150px] ml-[50px] lg:ml-[150px]">
                  Featured
                </Text>
                <Text size="md" as="p" className="!font-normal !text-gray-600 whitespace-nowrap ml-[50px] lg:ml-[150px]">
                  Explore new quests from us, curated for you!
                </Text>
              </div>
            </div>
            <div className="mt-2 flex hidden md:block">
              <Button size="xl" shape="circle" className="ml-5 w-[40px] !rounded-[20px] top-24 right-24 absolute">
                <Img src="images/img_group_26.svg" />
              </Button>
              <Button size="xl" shape="circle" className="ml-[9px] w-[40px] !rounded-[20px] top-24 right-12 absolute">
                <Img src="images/img_group_27.svg" />
              </Button>
            </div>
            <div className="mt-2 flex items-center gap-[18px] w-[336px] h-[190px] rounded-[20px] bg-gray-900_01 ml-[10px] p-[19px] md:flex-col md:-mt-[90px] md:ml-[50px] md:h-[175px] md:w-[449px] md:-mt-[10px] lg:h-[238px] lg:w-[700px] lg:ml-[120px] xl:h-[347px] xl:w-[1000px]">
              <Img
                src="images/img_image.png"
                alt="intro image"
                className="h-[134px] w-[134px] rounded-lg object-cover md:w-full md:h-[150px] md:w-[150px] md:mr-[280px] md:-mt-[10px] lg:h-[210px] lg:w-[213px] lg:-ml-[200px] xl:h-[306px] xl:w-[310px] xl:-ml-[400px]" 
              />
              <div className="flex w-[43%] flex-col md:-mt-[170px] md:-ml-[70px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-[7px] rounded-[5px] bg-blue_gray-900 p-1 mt-[8px] md:w-[68px] md:h-[17px] md:ml-[70px] lg:-mt-[50px]">
                  <Img
                  src="images/img_5fad6c775f5213b.png"
                  alt="optimism image"
                  className="h-[15px] w-[15px] rounded object-cover"
                  />
                  <Text as="p">Optimism</Text>
                </div>
                <Heading size="sm" as="h1" className="mt-[5px] !text-white-A700_01 md:text-xl md:ml-[70px] whitespace-nowrap lg:text-3xl">
                  Intro to Superboard
                </Heading>
                <Text size="sm" as="p" className="w-full leading-[17px] !text-gray-600 md:text-md md:ml-[70px]">
                    Take a deep dive into Superboard and learn more about web3 and crypto.
                </Text>
              </div>
              <div className="flex items-center gap-1 md:gap-[10.5px] md:mt-[10px] lg:mt-[70px]">
                <Button
                  color="green_A100"
                  size="xs"
                  shape="round"
                  className="w-[66px] h-[25px] font-medium sm:px-5 whitespace-nowrap mt-[2px] md:w-[93.87px] md:h-[30.76px] md:ml-[70px]"
                >
                  Start Quest
                </Button>
                <Button
                  color="blue_gray_900"
                  size="xs"
                  shape="round"
                  className=" w-[105px] font-medium mt-[2px] md:w-[113px] h-[31px]"
                >
                Rewards
                </Button>
              </div>
            </div>

            {/* new quests section */}
            <div className="flex items-center justify-between gap-5 sm:flex-col -ml-[300px] -mb-[250px] md:-ml-[150px] md:mt-[20px] lg:-ml-[400px] xl:-ml-[700px] xl:mt-[40px]">
              <div className="flex flex-col items-start">
                <Text size="sm" as="p" className="!text-white-A700_01 whitespace-nowrap">
                  New Quests for you
                </Text>
                <Text size="sm" as="p" className="!font-normal !text-gray-600 whitespace-nowrap">
                  Explore new quests from us, curated for you!
                </Text>
              </div>
              <div className="flex hidden sm:block">
                <div className="flex md:-mt-[30px] md:ml-[670px] lg:ml-[1100px] lg:-mt-[60px] xl:ml-[1900px]">
                  <Button
                    onClick={() => {
                      sliderRef1?.current?.slidePrev();
                    }}
                    size="xl"
                    shape="circle"
                    className="w-[40px] !rounded-[20px] "
                  >
                  <Img src="images/img_group_26.svg" />
                  </Button>
                  <Button
                    onClick={() => {
                      sliderRef1?.current?.slideNext();
                    }}
                    size="xl"
                    shape="circle"
                    className="w-[40px] !rounded-[20px]"
                  >
                  <Img src="images/img_group_27.svg" />
                    </Button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </>
  )
}
