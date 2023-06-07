import "@/styles/globals.css";
import { NavBar } from "@/components";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps}></Component>
  </div>
);

export default MyApp;
