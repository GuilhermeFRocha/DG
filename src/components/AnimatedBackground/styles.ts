import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;

  .area {
    .circles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .circles li {
      position: absolute;
      display: block;
      list-style: none;
      line-height: 1;
      letter-spacing: -4px;
      width: 36px;
      height: 36px;
      color: ${colors.actionColor};
      font-weight: 900;
      animation: animate 25s linear infinite;
      bottom: -150px;
    }

    .circles li:nth-child(1) {
      left: 95%;
      font-size: 10px;
      animation-delay: 0s;
    }

    .circles li:nth-child(2) {
      left: 5%;
      font-size: 15px;
      animation-delay: 2s;
      animation-duration: 12s;
    }

    .circles li:nth-child(3) {
      left: 90%;
      font-size: 20px;
      animation-delay: 5s;
    }

    .circles li:nth-child(4) {
      left: 10%;
      font-size: 25px;
      animation-delay: 0s;
      animation-duration: 18s;
    }

    .circles li:nth-child(5) {
      left: 85%;
      font-size: 30px;
      animation-delay: 0s;
    }

    .circles li:nth-child(6) {
      left: 15%;
      font-size: 35px;
      animation-delay: 3s;
    }

    .circles li:nth-child(7) {
      left: 80%;
      font-size: 40px;
      animation-delay: 7s;
    }

    .circles li:nth-child(8) {
      left: 20%;
      font-size: 45px;
      animation-delay: 15s;
      animation-duration: 45s;
    }

    .circles li:nth-child(9) {
      left: 75%;
      font-size: 50px;
      animation-delay: 2s;
      animation-duration: 35s;
    }

    .circles li:nth-child(10) {
      left: 25%;
      font-size: 42px;
      animation-delay: 0s;
      animation-duration: 11s;
    }
    .circles li:nth-child(11) {
      left: 70%;
      font-size: 60px;
      animation-delay: 10s;
    }

    .circles li:nth-child(12) {
      left: 30%;
      font-size: 38px;
      animation-delay: 2s;
      animation-duration: 50s;
    }

    .circles li:nth-child(13) {
      left: 65%;
      font-size: 32px;
      animation-delay: 8s;
    }

    .circles li:nth-child(14) {
      left: 35%;
      font-size: 28px;
      animation-delay: 0s;
      animation-duration: 36s;
    }

    .circles li:nth-child(15) {
      left: 60%;
      font-size: 24px;
      animation-delay: 10s;
    }

    .circles li:nth-child(16) {
      left: 40%;
      font-size: 26px;
      animation-delay: 6s;
    }

    .circles li:nth-child(17) {
      left: 55%;
      font-size: 36px;
      animation-delay: 14s;
    }

    .circles li:nth-child(18) {
      left: 45%;
      font-size: 46px;
      animation-delay: 25s;
      animation-duration: 75s;
    }

    .circles li:nth-child(19) {
      left: 50%;
      font-size: 26px;
      animation-delay: 12s;
      animation-duration: 35s;
    }

    .circles li:nth-child(20) {
      left: 50%;
      font-size: 16px;
      animation-delay: 10s;
      animation-duration: 22s;
    }

    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
      }

      100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
      }
    }
  }
`;
