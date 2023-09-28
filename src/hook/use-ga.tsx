import ReactGA from "react-ga";
export const GA_TRACKING_ID = "G-WC6FG8YNLV"; // Replace with your tracking ID

// Initial Google Analytics setup
export const initGA = () => {
  if (typeof window !== "undefined") {
    ReactGA.initialize(GA_TRACKING_ID);
  }
};

// Pageview tracking
export const logPageView = () => {
  if (typeof window !== "undefined") {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};
