// Const
import { ROUTES } from 'src/constants/routes';

export const NAVIGATION = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Destinations', href: ROUTES.DESTINATIONS },
  { label: 'Pricing', href: ROUTES.PRICING }
];

export const IMAGES_HOME = {
  bgVideoDesktop: '../images/home/webp/bg-video.webp',
  bgVideoMobile: '../images/home/webp/bg-video-mobile.webp',
  bgVideoMobile2x: '../images/home/webp/bg-video-mobile-2x.webp',
  bgVideoDefault: '../images/home/png/bg-video.png'
};

export const IMAGES_DESTINATIONS = {
  bgDestiniesDesktop: '../images/destinations/webp/destinies.webp',
  bgDestiniesMobile: '../images/destinations/webp/destinies-mobile.webp',
  bgDestiniesMobile2x: '../images/destinations/webp/destinies.webp',
  bgDestiniesDefault: '../images/destinations/png/destinies.png',

  bgDestiniesOneDesktop: '../images/destinations/webp/destinies-one.webp',
  bgDestiniesOneMobile: '../images/destinations/webp/destinies-one-mobile.webp',
  bgDestiniesOneMobile2x:
    '../images/destinations/webp/destinies-one-mobile-2x.webp',
  bgDestiniesOneDefault: '../images/destinations/png/destinies-one.png',

  bgDestiniesTwoDesktop: '../images/destinations/webp/destinies-two.webp',
  bgDestiniesTwoMobile: '../images/destinations/webp/destinies-two-mobile.webp',
  bgDestiniesTwoMobile2x: '../images/destinations/webp/destinies-two.webp',
  bgDestiniesTwoDefault: '../images/destinations/png/destinies-two.png',

  bgDestiniesThreeDesktop: '../images/destinations/webp/destinies-three.webp',
  bgDestiniesThreeMobile:
    '../images/destinations/webp/destinies-three-mobile.webp',
  bgDestiniesThreeMobile2x: '../images/destinations/webp/destinies-three.webp',
  bgDestiniesThreeDefault: '../images/destinations/png/destinies-three.png',

  bgDestiniesFourDesktop: '../images/destinations/webp/destinies-four.webp',
  bgDestiniesFourMobile:
    '../images/destinations/webp/destinies-four-mobile.webp',
  bgDestiniesFourMobile2x: '../images/destinations/webp/destinies-four.webp',
  bgDestiniesFourDefault: '../images/destinations/png/destinies-four.png'
};

export const IMAGES_ABOUT = {
  bgAboutDesktop: '../images/about/webp/bg-about.webp',
  bgAboutMobile: '../images/about/webp/bg-about-mobile.webp',
  bgAboutMobile2x: '../images/about/webp/bg-about-mobile-2x.webp',
  bgAboutDefault: '../images/about/png/bg-about.png',

  avatarThreeDesktop: '../images/about/webp/avatar-three.webp',
  avatarThreeMobile: '../images/about/webp/avatar-three-mobile.webp',
  avatarThreeMobile2x: '../images/about/webp/avatar-three-mobile-2x.webp',
  avatarThreeDefault: '../images/about/png/avatar-three.png',

  avatarTwoDesktop: '../images/about/webp/avatar-two.webp',
  avatarTwoMobile: '../images/about/webp/avatar-two-mobile.webp',
  avatarTwoMobile2x: '../images/about/webp/avatar-two-mobile-2x.webp',
  avatarTwoDefault: '../images/about/png/avatar-two.png',

  avatarOneDesktop: '../images/about/webp/avatar-one.webp',
  avatarOneMobile: '../images/about/webp/avatar-one-mobile.webp',
  avatarOneMobile2x: '../images/about/webp/avatar-one-mobile-2x.webp',
  avatarOneDefault: '../images/about/png/avatar-one.png'
};

export const PRICING_LIST = [
  {
    className: 'min-h-446 min-w-375 sm:min-h-434 sm:min-w-356',
    nameHotels: ['Hotel King Lux - Europe', 'Hotel Barchelor - France'],
    salary: 1000,
    imageUrls: {
      desktop: '../images/pricing/webp/hotel-one.webp',
      mobile: '../images/pricing/webp/hotel-one-mobile.webp',
      mobile2x: '../images/pricing/webp/hotel-one-mobile-2x.webp',
      default: '../images/pricing/png/hotel-one.png'
    }
  },
  {
    className: 'sm:mx-4 min-h-504 min-w-375 sm:min-h-492 sm:min-w-356',
    nameHotels: [
      'Hotel King Lux - Europe',
      'Hotel Barchelor - France',
      'Hotel Altair -  Italy',
      'Hotel Horsking - Germany'
    ],
    salary: 1500,
    imageUrls: {
      desktop: '../images/pricing/webp/hotel-two.webp',
      mobile: '../images/pricing/webp/hotel-two-mobile.webp',
      mobile2x: '../images/pricing/webp/hotel-two.webp',
      default: '../images/pricing/png/hotel-two.png'
    }
  },
  {
    className: 'min-h-417 min-w-375 sm:min-h-full sm:min-w-356',
    nameHotels: ['12 Destinies Random across Europe'],
    salary: 1300,
    imageUrls: {
      desktop: '../images/pricing/webp/hotel-three.webp',
      mobile: '../images/pricing/webp/hotel-three-mobile.webp',
      mobile2x: '../images/pricing/webp/hotel-three.webp',
      default: '../images/pricing/png/hotel-three.png'
    }
  }
];
