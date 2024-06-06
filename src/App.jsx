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

        <div className="fixed bottom-0 left-0 w-full flex items-end justify-center h-[61px] space-x-20 pb-4
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
    <div className="hidden sm:block flex w-[179px] h-[154.59px] flex-col gap-1 rounded-[15px] border border-solid border-blue_gray-900_01 bg-gray-900_01 p-[7px] md:-ml-[650px] md:w-[179px] md:h-[154.59px] lg:-ml-[800px] xl:mr-[400px]" style={{ position: 'sticky', top: '300px', zIndex: 999 }}>
      <Img src="images/img_group_2085663623.svg" alt="collect image" className="h-[102.34px] w-[164.35px]" />
      <Button color="green_A100" size="2xl" shape="round" className="w-full font-medium sm:px-5 md:w-[167.61px] md:h-[34.99px]">
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
                className="h-[134px] w-[134px] rounded-lg object-cover md:w-full md:h-[152px] md:w-[154px] md:mr-[280px] md:-mt-[10px] lg:h-[210px] lg:w-[213px] lg:-ml-[200px] xl:h-[306px] xl:w-[310px] xl:-ml-[400px]" 
              />
              <div className="flex w-[43%] flex-col md:-mt-[170px] md:-ml-[70px]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-[7px] rounded-[5px] bg-blue_gray-900 p-1 mt-[8px] md:w-[68px] md:h-[17px] md:ml-[70px] lg:-mt-[50px] xl:-mt-[150px]">
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
              <div className="flex items-center gap-1 md:gap-[10.5px] md:mt-[10px] lg:mt-[70px] xl:mt-[110px]">
                <Button
                  color="green_A100"
                  size="xs"
                  shape="round"
                  className="w-[66px] h-[25px] font-medium sm:px-5 whitespace-nowrap mt-[2px] md:w-[93.87px] md:h-[30.76px] md:ml-[70px] xl:"
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
                <div className="flex md:-mt-[60px] md:ml-[670px] lg:ml-[1100px] lg:-mt-[60px] xl:ml-[1900px]">
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
          
          <div className="mx-[20px] -mt-[30px] flex w-[322px] h-[555px] max-w-[792px] gap-[27px] md:w-[550px] md:h-[255px] md:ml-[40px] md:mt-[80px] lg:ml-[100px] lg:mt-[70px] lg:w-[900px] lg:h-[455px] xl:mt-[30px]">
            {/* quest slider section */}
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 550: { items: 2 }, 1050: { items: 3 } }}
              disableDotsControls
              activeIndex={sliderState1}
              onSlideChanged={(e) => {
              setSliderState1(e?.item);
              }}
              ref={sliderRef1}
              items={[...Array(9)].map(() => (
            <React.Fragment key={Math.random()}>
             <div className="px-[13.5px]">
                <div className="flex flex-col">
                  <div>
                    <Img
                      src="images/img_image_267x246.png"
                      alt="slider image"
                      className="h-[267px] w-full rounded-tl-lg rounded-tr-lg object-cover md:h-auto"
                    />
                    <div className="relative mt-[-34px] flex flex-col items-center justify-center rounded-bl-lg rounded-br-lg bg-gray-900_01 p-2">
                      <div className="mt-1.5 h-[3px] w-[31%] self-start bg-green-A100" />
                        <div className="relative mt-[-3px] h-[3px] w-[30%] bg-blue_gray-900" />
                          <div className="relative mr-2 mt-[-3px] h-[3px] w-[27%] self-end bg-blue_gray-900 md:mr-0" />
                            <Heading size="lg" as="h2" className="mt-2.5 w-[96%] leading-[19px] md:w-full">
                              Bridge Express: Chain to Chain Connection
                            </Heading>
                            <div className="mb-2 mt-[26px] flex items-center self-stretch">
                              <Img src="images/img_user.png" alt="user image" className="h-[27px] object-cover" />
                                <div className="flex flex-col items-start">
                                  <Heading size="s" as="h3">
                                    100
                                  </Heading>
                                  <Text as="p" className="!font-normal">
                                    Chads
                                  </Text>
                                </div>
                                <div className="ml-[54px] flex flex-1 items-center gap-3">
                                  <Img src="images/img_television.svg" alt="media image" className="h-[30px]" />
                                    <div className="relative h-[29px] flex-1">
                                      <div className="absolute bottom-[0.98px] right-[0.60px] m-auto h-[22px] w-[45px] border border-solid border-black-900 bg-deep_orange-A400_01" />
                                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[22px] w-[46px] border border-solid border-black-900 bg-yellow-A200" />
                                          <Button
                                            color="green_A100"
                                            size="xs"
                                            shape="square"
                                            className="absolute left-[0.00px] top-[0.00px] m-auto min-w-[45px] border border-solid border-black-900 font-inter"
                                          >
                                            NFT
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                  </div>
                </div>
            </div>
            
            {/* trending mints section */}
          <div className="mt-9 flex w-[63%] flex-col items-center -ml-[90px] -mt-[70px] md:mt-[130px] md:ml-[60px] lg:w-[1000px] lg:ml-[500px] lg:mt-[50px] xl:ml-[150px] xl:-mt-[20px]">
            <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col w-[322px]">
              <div className="flex flex-col items-start ">
                <Heading size="xl" as="h2" className="!text-white-A700 whitespace-nowrap md:text-2xl lg:text-3xl xl:text-5xl">
                  Trending mints onchain
                </Heading>
                <Text size="md" as="p" className="w-full leading-7 !text-gray-600 md:whitespace-nowrap">
                  Aggregating mints from Zora, mint.fun and more for you!
                </Text>
              </div>
              <div className="flex hidden sm:block lg:-mr-[500px] xl:-mr-[1200px]">
                <Button size="md" className="min-w-[79px] rounded-[14px] font-medium md:-mt-[70px] md:ml-[520px] ">
                  View all
                </Button>
                <Button shape="circle" className="ml-[18px] w-[28px] !rounded-[14px] md:-mt-[30px] md:ml-[600px]">
                  <Img src="images/img_group_26.svg" />
                </Button>
                <Button shape="circle" className="ml-1.5 w-[28px] !rounded-[14px]  md:-mt-[27px] md:ml-[630px]">
                  <Img src="images/img_group_27.svg" />
                </Button>
              </div>
            </div>
            <div className="mt-[11px] flex items-center gap-[15px] self-stretch sm:flex-col w-[280px] md:flex-col xl:ml-[50px]">
              <Img
                src="images/img_image_1700.png"
                alt="image 1700"
                className="h-[146px] w-[32%] rounded-lg object-cover sm:w-full md:w-full md:h-auto md:flex-col md:w-[143px] md:h-[120px] md:-ml-[170px] xl:w-[500px] xl:h-[287px] xl:-ml-[290px] lg:w-[174px] lg:h-[146px] "
              />
              <Img
                src="images/img_image_1700.png"
                alt="image 1701"
                className="h-[144px] w-[32%] rounded-lg object-cover sm:w-full md:w-full md:h-auto md:flex-col md:w-[143px] md:h-[120px] md:ml-[150px] md:-mt-[134px] xl:w-[500px] xl:h-[287px] xl:-mt-[302px] xl:-mr-[200px] lg:w-[174px] lg:h-[146px] lg:-mr-[100px] lg:-mt-[160px]"
              />
              <Img
                src="images/img_image_1700.png"
                alt="image 1702"
                className="h-[144px] w-[32%] rounded-lg object-cover sm:w-full md:w-full md:h-auto md:flex-col md:w-[143px] md:h-[120px] md:ml-[480px] md:-mt-[134px] xl:w-[500px] xl:h-[287px] xl:-mt-[302px] xl:-mr-[500px] lg:w-[174px] lg:h-[146px] lg:-mr-[200px] lg:-mt-[160px]"
              />
            </div>
            <div className="container-xs flex items-center justify-between gap-12 ml-[50px] md:p-5 sm:flex-col md:ml-[10px] xl:-ml-[70px]">
              <div className="flex w-[63%] justify-between gap-5 sm:w-full">
                <Heading size="md" as="h3" className="w-[41%] leading-[19px] -ml-[50px] whitespace-nowrap xl:text-3xl lg:text-2xl">
                  Welcome to Zora
                </Heading>
                <Heading size="md" as="h4" className="w-[41%] leading-[19px] whitespace-nowrap mr-[20px] md:-mr-[30px] xl:text-3xl xl:-mt-[1px] xl:-mr-[1px] lg:text-2xl lg:-mr-[80px]">
                  Welcome to Zora
                </Heading>
              </div>
              <Heading size="md" as="h5" className="w-[26%] leading-[19px] sm:w-full whitespace-nowrap -ml-[20px] md:-mt-[65px] md:-mr-[250px] xl:text-3xl xl:ml-[950px] xl:-mt-[80px] lg:text-2xl lg:ml-[70px] lg:-mt-[80px]">
                Welcome to Zora
              </Heading>
            </div>
            <div className="container-sm mt-3 flex items-center justify-between gap-5 self-stretch md:p-5 md:-ml-[50px] md:-mt-[30px]">
              <div className="flex items-center ml-[10px] w-[40px] ">
                <Img src="images/img_user.png" alt="user image" className="h-[18px] object-cover xl:-ml-[70px] xl:hidden xl:block lg:hidden lg:block" />
                <div className="flex flex-col items-start md:ml-[10px] xl:text-3xl xl:-ml-[60px]">
                  <Heading className="xl:text-3xl lg:text-2xl" as="h6">10K+</Heading>
                  <Text size="xs" as="p" className="self-center xl:text-3xl lg:text-2xl">
                    Minted
                  </Text>
                </div>
              </div>
              <div className="flex items-center">
                <Img
                  src="images/img_5fad6c775f5213b.png"
                  alt="bridge image"
                  className="h-[18px] w-[18px] rounded object-cover ml-[30px] md:ml-[75px]"
                />
                <Img src="images/img_user.png" alt="user image" className="ml-[35px] h-[18px] object-cover hidden xl:hidden block lg:hidden lg:block" />
                <div className="flex flex-col items-start -ml-[50px] md:ml-[1px] xl:ml-[120px] lg:ml-[70px]">
                  <Heading className="xl:text-3xl lg:text-2xl" as="p">10K+</Heading>
                  <Text size="xs" as="p" className="self-center xl:text-3xl lg:text-2xl ">
                    Minted
                  </Text>
                </div>
              </div>
              <div className="flex items-center">
                <Img
                  src="images/img_5fad6c775f5213b.png"
                  alt="bridge image"
                  className="h-[18px] w-[18px] rounded object-cover ml-[50px] md:ml-[100px]"
                />
                <Img src="images/img_user.png" alt="user image" className="ml-[37px] h-[18px] object-cover mr-[30px] md:ml-[15px] xl:hidden xl:block lg:hidden lg:block" />
                <div className="flex flex-col items-start self-end -ml-[30px] md:-ml-[25px] xl:ml-[100px] lg:ml-[70px]">
                  <Heading className="xl:text-3xl lg:text-2xl" as="p">10K+</Heading>
                  <Text size="xs" as="p" className="self-center xl:text-3xl lg:text-2xl">
                    Minted
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_5fad6c775f5213b.png"
                alt="bridge image"
                className="h-[18px] w-[18px] rounded object-cover ml-[50px] md:ml-[100px]"
              />
            </div>
            </div>
          </div>
        </>
  )
}
