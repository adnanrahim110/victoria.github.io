
const prData = [
  {
    url: "https://markets.financialcontent.com/stocks/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "1.svg"
  },
  {
    url: "https://avpress.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "2.webp"
  },
  {
    url: "https://appeal-democrat.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "3.webp"
  },
  {
    url: "https://bakersfield.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "4.webp"
  },
  {
    url: "https://fwnbc.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "5.svg"
  },
  {
    url: "https://hannibal.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "6.webp"
  },
  {
    url: "https://whig.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "7.webp"
  },
  {
    url: "https://ivpressonline.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "8.webp"
  },
  {
    url: "https://kbjr.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "9.svg"
  },
  {
    url: "https://ktiv.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "10.svg"
  },
  {
    url: "https://kttc.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "11.svg"
  },
  {
    url: "https://kvoa.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "12.webp"
  },
  {
    url: "https://kwwl.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "13.webp"
  },
  {
    url: "https://lodinews.marketminute.com/article/globeprwire-2024-12-19-a-single-christian-woman-a-mixed-bunch-bouquet-by-victoria-mukungu",
    img: "14.webp"
  },
];

const prSlider = document.getElementById("prSlider");

prData.forEach((slide, index) => {
  const slideDiv = document.createElement("div");
  slideDiv.innerHTML = `<a href="${slide.url}" target="_blank">
  <img src="assets/images/pr/${slide.img}" alt="Pr ${index + 1}">
  </a>`;
  prSlider.appendChild(slideDiv);
});
