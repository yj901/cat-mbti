import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "https://ur-mbti-cats.netlify.app/";
  const resultURL = window.location.href;

  console.log("test", url, resultURL);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("6af8f9c0f6face08796e33040692b8a6");
    Kakao.isInitialized();
  }, []);

  const sharekakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: "예비집사님이 고양이를 키운다면 잘 맞는 고양이는?",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button variant="warning" onClick={sharekakao}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
