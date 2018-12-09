const events = [
  {
    title: "Event Title 1",
    description:
      "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgUrlMobile:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-A.png",
    imgUrlMobile2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-A@2x.png",
    imgUrlDesktop:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-A.png",
    imgUrlDesktop2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-A@2x.png"
  },
  {
    title: "Event Title 2",
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgUrlMobile:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-B.png",
    imgUrlMobile2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-B@2x.png",
    imgUrlDesktop:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-B.png",
    imgUrlDesktop2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-B@2x.png"
  },
  {
    title: "Event Title 3",
    description:
      "Lorem ipsum dolor \nsit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgUrlMobile:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-D.png",
    imgUrlMobile2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-D@2x.png",
    imgUrlDesktop:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-D.png",
    imgUrlDesktop2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-D@2x.png"
  },
  {
    title: "Event Title 4",
    description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgUrlMobile:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-C.png",
    imgUrlMobile2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-C@2x.png",
    imgUrlDesktop:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-C.png",
    imgUrlDesktop2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-C@2x.png"
  },
  {
    title: "Event Title 5",
    description:
      "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    imgUrlMobile:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-E.png",
    imgUrlMobile2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-E@2x.png",
    imgUrlDesktop:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-E.png",
    imgUrlDesktop2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-E@2x.png"
  },
  {
    title: "Event Title 6",
    description: "Lorem ipsum dolor sit amet lorem \tipsum dolor sit amet",
    imgUrlMobile:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-F.png",
    imgUrlMobile2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Mobile_placeholder-F@2x.png",
    imgUrlDesktop:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-F.png",
    imgUrlDesktop2x:
      "https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/Assets/Desktop-Tablet_placeholder-F@2x.png"
  }
];

const STATE = {
  DESKTOP: "DESKTOP",
  TABLET: "TABLET",
  MOBILE_L: "MOBILE_L",
  MOBILE_P: "MOBILE_P"
};

const DESKTOP = 1024;
const TABLET = 768;
const MOBILE_L = 480;
const MOBILE_P = 300;

let currentViewState = getViewState();

function renderEvents() {
  if (currentViewState === STATE.DESKTOP) {
    renderCards(3);
  } else if (currentViewState === STATE.TABLET) {
    renderCards(2);
  } else {
    renderSideWaysCards();
  }
}

function renderCards(cardsEachRow) {
  const cardContainer = $("#event-container");
  cardContainer.empty();
  let cardGroup;

  for (let i = 0; i < events.length; i++) {
    let mod = i % cardsEachRow;
    if (mod === 0) {
      cardGroup = $(`<div style="display:flex;"></div>`);
      cardContainer.append(cardGroup);
    }
    const event = events[i];
    cardGroup.append(`
      <div class="card-container" style="padding-top:${(mod + 1) * 25}px">
          <a class="card" href="#" style="width: 300px; height:350px;">
                ${renderCardPicture(event)}
              <div class="card-body">
                  <h5 class="card-title">${event.title}</h5>
                  <p class="card-text">${event.description}</p>
              </div>
          </a>
      </div>`);
  }
}

function renderSideWaysCards() {
  const cardContainer = $("#event-container");
  cardContainer.empty();
  cardContainer.css({ "margin-top": "20px" });

  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    cardContainer.append(`
        <a class="card" style="display:flex;flex-direction:row;margin-bottom:20px;height:150px">
            <div class="sideways-card-image" style="background-image: url('${
              event.imgUrlMobile2x
            }')">
            </div>
            <div class="card-body" style="flex:1;display:flex;">
                <div style="overflow:hidden;">
                    <div class="card-title" style="font-weight:bold">${
                      event.title
                    }</div>
                    <p class="card-text" style="font-size:0.75em">${
                      event.description
                    }</p>
                </div>
            </div>
            <div style="width:30px;display:flex;justify-content:center;align-items:center;">
                <img alt="right chevron" src="./Assets/right_chevron.svg">
            </div>
        </a>`);
  }
}

function renderCardPicture(event) {
  return `
    <picture>
        <source
            srcset="${event.imgUrlDesktop2x}"
            media="(min-width: 1024px)"
        />
        <source
            srcset="${event.imgUrlDesktop}"
            media="(min-width: 768px)"
        />
        <source
            srcset="${event.imgUrlMobile2x}"
            media="(min-width: 480px)"
        />
        <source
            srcset="${event.imgUrlMobile}"
            media="(max-width: 300px)"
        />
        <img class="card-img-top" src="${event.imgUrlMobile}" alt="card image">
    </picture>
    `;
}

renderEvents();

$(window).resize(function() {
  const viewState = getViewState();

  if (viewState !== currentViewState) {
    currentViewState = viewState;
    renderEvents();
  }
});

function getViewState() {
  const vpWidth = $(window).width();
  if (vpWidth > DESKTOP) {
    return STATE.DESKTOP;
  } else if (vpWidth >= TABLET) {
    return STATE.TABLET;
  } else if (vpWidth >= MOBILE_L) {
    return STATE.MOBILE_L;
  }
  return STATE.MOBILE_P;
}
