import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Demo = () => {
  const [webShareSupported, setWebShareSupported] = useState(false);

  const shareOrDownload = async (
    fileName: string,
    title: string,
    text: string,
    isMultiple?: boolean
  ) => {
    const blob = await fetch("/images/carrot.jpg").then((res) => res.blob());
    const blob2 = await fetch("/images/potato.jpg").then((res) => res.blob());

    if (webShareSupported) {
      const data = {
        files: [
          new File([blob], fileName, {
            type: blob.type,
          }),
          isMultiple &&
            new File([blob2], fileName, {
              type: blob.type,
            }),
        ],
        title,
        text,
      };
      if (globalThis.navigator.canShare(data)) {
        try {
          await globalThis.navigator.share(data);
        } catch (err) {
          console.error(err);
        } finally {
          return;
        }
      }
    }
    // Fallback download
    const a = document.createElement("a");
    a.download = fileName;
    a.style.display = "none";
    a.href = URL.createObjectURL(blob);
    a.addEventListener("click", () => {
      setTimeout(() => {
        URL.revokeObjectURL(a.href);
        a.remove();
      }, 1000);
    });
    document.body.append(a);
    a.click();
  };

  const onClick = async () => {
    await shareOrDownload("carrot.png", "Carrots", "Delicious Carrots");
  };
  const onClickMultiple = async () => {
    await shareOrDownload("carrot.png", "Carrots", "Delicious Carrots", true);
  };

  const shareToFacebook = async () => {
    const appId = "529059189408745";
    const imageUrl = encodeURIComponent(
      "https://www.thenewreact.com/_next/image?url=%2Fimages%2Fcarrot.jpg&w=3840&q=75"
    );
    const caption = encodeURIComponent("Check out this carrot!");

    const shareUrl = `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${imageUrl}&redirect_uri=${imageUrl}&quote=${caption}`;

    window.open(shareUrl, "Share Image to Facebook", "width=600,height=400");
  };

  useLayoutEffect(() => {
    setWebShareSupported("canShare" in navigator);
  }, []);

  return (
    <Container>
      <button onClick={onClick}>
        {webShareSupported ? "공유하기" : "저장하기"}
      </button>
      <button onClick={onClickMultiple}>
        {webShareSupported ? "여러 사진 공유하기" : "여러 사진 저장하기"}
      </button>
      <button onClick={shareToFacebook}>페이스북에 공유하기</button>
    </Container>
  );
};

export default Demo;

const Container = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  padding-top: 40px;

  color: white;
`;
