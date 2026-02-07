const ICHEC25_ORIGIN = "https://ichec.icachi.org/25";
const ICHEC_ORIGIN = "https://ichec.icachi.org";

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link rel="shortcut icon" href={`${ICHEC_ORIGIN}/favicon.ico`} />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/vendor/fontawesome/css/all.min.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/vendor/aos/dist/aos.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/vendor/dzsparallaxer/dzsparallaxer.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/vendor/slick-carousel/slick/slick.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/vendor/cubeportfolio/css/cubeportfolio.min.css`} />

      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/css/theme.min.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/css/custom.css`} />
      <link rel="stylesheet" href={`${ICHEC25_ORIGIN}/assets/css/custom-25.css`} />

      <style>{`
    /* @font-face {
      font-family: 'Ping';
      src: url('./static/font/PingFang.ttc');
      font-style: 'SC';
      font-weight: 'Medium';
    }

    .custom-font {
      font-family: 'Ping';
      font-size: 80px;
    } */
  `}</style>

      <link
        type="application/atom+xml"
        rel="alternate"
        href={`${ICHEC_ORIGIN}/feed.xml`}
        title="Chinese CHI"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            '{"@context":"https://schema.org","@type":"WebPage","description":"ICACHI 世界华人华侨人机交互协会","headline":"ICHEC 2025","url":"/25/"}',
        }}
      />
    </>
  );
}
