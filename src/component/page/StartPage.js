"use client";

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import titleImg from "@/../public/0.start/title.svg";
import startBtn from "@/../public/0.start/startBtn.png";
import circle1Img from "@/../public/0.start/blur-circle-1.png";
import TimeBackgroud from "./time/TimeBackgroud";
import MainContainer from "../MainContainer";
import TopContent from "../TopContent";

export default function StartPage({ nextStep }) {
  return (
    <>
      <div className=" w-full h-full flex flex-col items-center">
    <TopContent marginTop="mt-4">

    </TopContent>
      <div className="w-80/100 h-full ">

      </div>
      </div>
      {/* <MobileFrame> */}
      {/* <div className='flex justify-center items-center flex-col gap-[60px]'>
            <Image className=' absolute top-0 -translate-y-1/2 ' src={circle1Img} alt='circle1Img' />
            <Image src={titleImg} alt='title' />
            <div className='text-[#B95F0F] font-[500] text-center text-[14px]
            leading-loose tracking-wide '>
              有些人天生酥脆，有些人出爐時就塌了。<br/>
              你努力發酵、翻滾、等待出爐，<br/>ˇ
              結果還是變成一坨可頌災難。
              沒關係，這世界不缺完美麵包，
              缺的是——像你一樣軟爛卻獨特的存在。
              現在，就來看看你是什麼等級的失控可頌吧。
            </div>
            <Image onClick={nextStep} className='w-[160px]' src={startBtn} alt='startBtn' />
            <Image className=' absolute bottom-0 translate-y-1/2 pointer-events-none ' src={circle1Img} alt='circle1Img' />
          </div> */}
      {/* </MobileFrame> */}
    </>
  );
}
