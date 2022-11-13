import React from "react";
import HomeBannerCard from "./HomeBannerCard";
import HomeBoardCard from "./HomeBoardCard";
import "../../css/Home.css";
import main_search_icon from "../../images/main-search-icon.png";
import find_roommates_img from "../../images/find-roommates.svg";
import share_board_img from "../../images/share-board.svg";
import suggestion_board_img from "../../images/suggestion-board.svg";
import together_board_img from "../../images/together-board.svg";
import information_board_img from "../../images/information-board.svg";
import free_board_img from "../../images/free-board.svg";
import e_house_img from "../../images/e-house.png";
import g_house_img from "../../images/g-house.png";
import k_house_img from "../../images/k-house.png";
import c_house_img from "../../images/c-house.png";

function Home() {
  const url_e = "https://dorm.skku.edu/dorm_seoul/lifeguide/e_house_living.jsp";
  const url_g = "https://dorm.skku.edu/dorm_seoul/lifeguide/g_house_living.jsp";
  const url_k = "https://dorm.skku.edu/dorm_seoul/lifeguide/k_house_living.jsp";
  const url_c = "https://dorm.skku.edu/dorm_seoul/lifeguide/c_house_living.jsp";

  return (
    <>
      <div className="home">
        <div className="home-top">
          <div>
            <span className="dorm-title">명륜학사</span>
            <span className="dorm-subtitle">E하우스</span>
          </div>
          <div>
            <button className="btn-m">명륜</button>
            <button className="btn-b">봉룡</button>
          </div>
        </div>
        <div className="home-search">
          <input
            className="home-search-input"
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <img className="home-search-icon" src={main_search_icon} />
        </div>
        <div className="home-middle">
          <div className="upper-card">
            <HomeBoardCard title="공지사항" link="/notice"/>
          </div>
          <div className="upper-card">
            <HomeBoardCard title="기숙사 식당" subtitle="E하우스" />
          </div>
        </div>

        <div className="home-banner">
          <HomeBannerCard title="자유게시판" img={free_board_img} link="/freeboard"/>
          <HomeBannerCard title="정보게시판" img={information_board_img} link="/infoboard"/>
          <HomeBannerCard title="건의게시판" img={suggestion_board_img} link="/suggboard"/>
          <HomeBannerCard title="공구게시판" img={together_board_img} link="/groupboard"/>
          <HomeBannerCard title="나눔게시판" img={share_board_img} link="/shareboard"/>
          <HomeBannerCard title="룸메 찾아요" img={find_roommates_img} link="/roommatefindboard"/>
        </div>

        <div className="home-bottom">
          <div className="lower-card">
            <HomeBoardCard title="인기게시글" />
          </div>
          <div className="lower-card">
            <div className="home-board-card dorm-list">
              <div className="board-title-box">
                <p className="board-title">기숙사 정보</p>
                <p className="plus-btn">+</p>
              </div>
              <ul className="board-content-box dorm-list">
                <img
                  onClick={() => {
                    window.open(url_e);
                  }}
                  className="board-content"
                  alt="ehouse"
                  src={e_house_img}
                />
                <img
                  onClick={() => {
                    window.open(url_g);
                  }}
                  className="board-content"
                  alt="ghouse"
                  src={g_house_img}
                />
                <img
                  onClick={() => {
                    window.open(url_k);
                  }}
                  className="board-content"
                  alt="khouse"
                  src={k_house_img}
                />
                <img
                  onClick={() => {
                    window.open(url_c);
                  }}
                  className="board-content"
                  alt="chouse"
                  src={c_house_img}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
