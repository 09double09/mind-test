"use client";

import React from "react";
import Sketch from "react-p5";

const TimeBackgroud = () => {
  let numbers = [];
  const numCount = 30; // 總共50個漂浮元素
  const maxNumber = 12; // 最大顯示數字為12

  class FloatingNumber {
    constructor(p5) {
      this.num = Math.floor(p5.random(1, maxNumber + 1));
      this.x = p5.random(p5.width);
      this.y = p5.random(p5.height);
      this.size = p5.random(50, 150);
      this.speedX = p5.random(-0.5, 0.5);
      this.speedY = p5.random(-0.5, 0.5);
      this.blur = p5.random(2, 8);
      this.opacity = p5.random(0.5, 0.9);
      this.rotation = p5.random(0, 360);
    }

    update(p5) {
      this.x += this.speedX;
      this.y += this.speedY;

      // 邊界檢查
      if (this.x < -50) this.x = p5.width + 50;
      if (this.x > p5.width + 50) this.x = -50;
      if (this.y < -50) this.y = p5.height + 50;
      if (this.y > p5.height + 50) this.y = -50;
    }

    display(p5) {
      p5.push();
      p5.translate(this.x, this.y);
      p5.rotate(p5.radians(this.rotation));
      p5.textSize(this.size);
      p5.fill(255, 255, 255, this.opacity * 255);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.drawingContext.filter = `blur(${this.blur}px)`;
      p5.text(this.num, 0, 0);
      p5.pop();
    }
  }

  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.parent(canvasParentRef);
    p5.textFont("Arial");

    // 初始化數字
    for (let i = 0; i < numCount; i++) {
      numbers.push(new FloatingNumber(p5));
    }
  };

  const draw = (p5) => {
    p5.clear();
    p5.background(0);

    // 更新和顯示所有數字
    numbers.forEach((num) => {
      num.update(p5);
      num.display(p5);
    });
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>
  );
};

export default TimeBackgroud;
