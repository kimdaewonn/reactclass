import React from "react";

function Footer({ attr }) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">푸터 영역</h2>
      <div className={`footer__inner ${attr[3]}`}>
        <div className="footer__menu">
          <div>
            <h3>사이트</h3>
            <ul>
              <li>
                <a href="/">웹표준 사이트</a>
              </li>
              <li>
                <a href="/">반응형 사이트</a>
              </li>
              <li>
                <a href="/">패럴랙스 사이트</a>
              </li>
              <li>
                <a href="/">포트폴리오 사이트</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>헤더 영역</h3>
            <ul>
              <li>
                <a href="/">메뉴 유형 01</a>
              </li>
              <li>
                <a href="/">메뉴 유형 02</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>슬라이드 영역</h3>
            <ul>
              <li>
                <a href="/">슬라이드 유형 01</a>
              </li>
              <li>
                <a href="/">슬라이드 유형 02</a>
              </li>
              <li>
                <a href="/">슬라이드 유형 03</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>이미지 영역</h3>
            <ul>
              <li>
                <a href="/">이미지 유형 01</a>
              </li>
              <li>
                <a href="/">이미지/텍스트 유형 01</a>
              </li>
              <li>
                <a href="/">텍스트 유형 01</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>컨텐츠 영역</h3>
            <ul>
              <li>
                <a href="/">카드 유형 01</a>
              </li>
              <li>
                <a href="/">배너 유형 01</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>푸터 영역</h3>
            <ul>
              <li>
                <a href="/">푸터 메뉴 유형 01</a>
              </li>
              <li>
                <a href="/">푸터 컨텍트 유형 02</a>
              </li>
              <li>
                <a href="/">푸터 이메일 유형 03</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2022 Kimdaewonn. Portfolio is Power All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;