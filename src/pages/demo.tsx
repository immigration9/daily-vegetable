import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Demo = () => {
  const [webShareSupported, setWebShareSupported] = useState(false);

  const shareOrDownload = async (
    blob: Blob,
    fileName: string,
    title: string,
    text: string
  ) => {
    if (webShareSupported) {
      const data = {
        files: [
          new File([blob], fileName, {
            type: blob.type,
          }),
          new File([blob], fileName, {
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
    const blob = await fetch("/images/carrot.jpg").then((res) => res.blob());
    await shareOrDownload(blob, "carrot.png", "Carrots", "Delicious Carrots");
  };

  useLayoutEffect(() => {
    setWebShareSupported("canShare" in navigator);
  }, []);

  return (
    <Container>
      <button onClick={onClick}>
        {webShareSupported ? "공유하기" : "저장하기"}
      </button>
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
