import Script from "next/script";

const ICHEC25_ORIGIN = "https://ichec.icachi.org/25";
const ICHEC_ORIGIN = "https://ichec.icachi.org";

export function Ichec25Scripts() {
  return (
    <>
      <Script src={`${ICHEC_ORIGIN}/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/jquery/dist/jquery.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/bootstrap-5.2.2/dist/js/bootstrap.bundle.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/hs-sticky-block/dist/hs-sticky-block.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/hs-header/dist/hs-header.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/hs-go-to/dist/hs-go-to.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/typed.js/lib/typed.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/aos/dist/aos.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/dzsparallaxer/dzsparallaxer.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/slick-carousel/slick/slick.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/cubeportfolio/js/jquery.cubeportfolio.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/hs-nav-scroller/dist/hs-nav-scroller.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/prism/prism.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/list.js/dist/list.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/fslightbox/index.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/js/theme.min.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/hs.slick-carousel.js`} strategy="beforeInteractive" />
      <Script src={`${ICHEC25_ORIGIN}/assets/vendor/hs.cubeportfolio.js`} strategy="beforeInteractive" />

      <Script id="ichec25-cubeportfolio" strategy="afterInteractive">
        {`$(document).on('ready', function () {
    // INITIALIZATION OF CUBEPORTFOLIO
    // =======================================================
    $('.cbp').each(function () {
      var cbp = $.HSCore.components.HSCubeportfolio.init($(this), {
        layoutMode: 'grid',
        filters: '#filterControls'
      });
    });
  });`}
      </Script>
      <Script id="ichec25-init" strategy="afterInteractive">
        {`$(document).on('ready', function () {
    // INITIALIZATION OF HEADER
    // =======================================================
    var header = new HSHeader($('#header')).init();


    // INITIALIZATION OF MEGA MENU
    // =======================================================
    var megaMenu = new HSMegaMenu($('.js-mega-menu'), {
      desktop: {
        position: 'left'
      }
    }).init();


    // INITIALIZATION OF NAV SCROLLER
    // =======================================================
    new HsNavScroller('.js-nav-scroller', {
      delay: 400,
      offset: 140
    })


    // INITIALIZATION OF TEXT ANIMATION (TYPING)
    // =======================================================
    var typed = $.HSCore.components.HSTyped.init(".js-text-animation");
    var typed1 = $.HSCore.components.HSTyped.init(".js-text-animation-1");
    var typed2 = $.HSCore.components.HSTyped.init(".js-text-animation-2");


    // INITIALIZATION OF FANCYBOX
    // =======================================================
    $('.js-fancybox').each(function () {
      var fancybox = $.HSCore.components.HSFancyBox.init($(this));
    });


    // INITIALIZATION OF AOS
    // =======================================================
    AOS.init({
      duration: 650,
      once: true
    });

    // INITIALIZATION OF GO TO
    // =======================================================
    $('.js-go-to').each(function () {
      var goTo = new HSGoTo($(this)).init();
    });

    // INITIALIZATION OF STICKY BLOCKS
    // =======================================================
    new HSStickyBlock('.js-sticky-block', {
      targetSelector: document.getElementById('header').classList.contains('navbar-fixed') ? '#header' : null
    });

  });

  $(window).scroll(function () {
    var $nav = $("#sider-menu ul li"),
        length = $nav.length,//获取导航菜单 ul li 的个数
        item = new Array(),//新建一个数组
        sTop = $(window).scrollTop();//获取偏移的高度

    if($("#sider-menu").offset().top <= 850 ){
        $("#sider-menu").offset({top:810});
        
        console.log($("#sider-menu").offset().top)
    } else {
        $("#sider-menu").css("top",20);
        console.log($("#sider-menu").offset().top)
    }

    for (var i = 0; i < length; i++) {
        if (i == 0) {
            console.log($(".blockList:first-child"));
            item[i + 1] = $(".blockList:first-child").offset().top;
            if (sTop >= item[i + 1]) {
                $nav.eq(i).addClass("active").siblings("li").removeClass("active");//选中的样式selected  

            }
            
        } else {
            item[i + 1] = $(".blockList:nth-child(" + (i + 1) + ")").offset().top;
            if (sTop >= item[i + 1]) {
                $nav.eq(i).addClass("active").siblings("li a").removeClass("active");

            }
        }
    }
})`}
      </Script>
      <Script id="ichec25-slick" strategy="afterInteractive">
        {`$(document).on('ready', function () {
    // INITIALIZATION OF SLICK CAROUSEL
    // =======================================================
    $('.js-slick-carousel').each(function () {
      var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
    });
  });`}
      </Script>
      <Script id="ichec25-ie-polyfill" strategy="afterInteractive">
        {`if (/MSIE \\d|Trident.*rv:/.test(navigator.userAgent)) document.write('<script src="${ICHEC25_ORIGIN}/assets/vendor/babel-polyfill/dist/polyfill.js"><\\\\/script>');`}
      </Script>
    </>
  );
}
