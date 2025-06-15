"use client";

import StartPage from "@/component/page/StartPage";
import QuestionPage from "@/component/page/QuestionPage";
import DisplayResultPage from "@/component/page/DisplayResultPage";
import ResultPage from "@/component/page/ResultPage";
import TimeBackgroud from "@/component/page/time/TimeBackgroud";
import { useState } from "react";
import { usePsyStore } from "@/app/store/store";
import MainContainer from "@/component/MainContainer";

export default function Home() {
  const psyState = usePsyStore((state) => state);

  const nextStep = function () {
    if (psyState.state >= 3) return;

    if (psyState.state == 1) {
      //答題階段
      //要超過總題數才能結束答題階段
      if (psyState.questionState < psyState.totalQuestions - 1) {
        psyState.updateQuestionState(psyState.questionState + 1);
      } else {
        psyState.updateState(psyState.state + 1);
      }
    } else {
      console.log("next");
      psyState.updateState(psyState.state + 1);
    }
  };

  const prevStep = function () {
    if (psyState.state <= 0) return;
    console.log("prev");
    psyState.updateState(psyState.state - 1);
  };

  return (
    <>

      {/* <div className="relative w-screen h-screen">
        <div className="relative w-full h-full flex justify-center items-center">
          {psyState.state == 0 && <StartPage nextStep={nextStep} />}
          {psyState.state == 1 && (
            <QuestionPage
              nextStep={nextStep}
              questionIndex={psyState.questionState}
            />
          )}
          {psyState.state == 2 && <DisplayResultPage nextStep={nextStep} />}
          {psyState.state == 3 && <ResultPage />}
        </div>
      </div> */}
      <div className=" h-full w-full absolute  z-2 bg-zinc-300/0 rounded-[1px] backdrop-blur-md">
      </div>
      <BlurBorder>
      <MainContainer>
        {psyState.state == 0 && <StartPage nextStep={nextStep} />}
        {psyState.state == 1 && (
          <QuestionPage
            nextStep={nextStep}
            questionIndex={psyState.questionState}
          />
        )}    
        {psyState.state == 2 && <DisplayResultPage nextStep={nextStep} />}
        {psyState.state == 3 && <ResultPage />}
      </MainContainer>
      </BlurBorder>
      <TimeBackgroud className="absolute top-0 left-0 w-full h-full z-[-1]"></TimeBackgroud>
    </>
  );
}

const BlurBorder = ({children}) => {

  return (
    <>
    <div className="h-full w-full absolute flex flex-col">
    <div className=" h-5/100 w-full bg-[#D9D9D9] blur-xl"></div>
    <div className="w-full h-full flex justify-center items-center">
    <div className=" h-full w-5 bg-[#D9D9D9] blur-xl"></div>
    {children}
    <div className=" h-full w-5 bg-[#D9D9D9] blur-xl"></div>

    </div>
    <div className=" h-5/100 w-full bg-[#D9D9D9] blur-xl"></div>
    </div>
    </>
  );
};
