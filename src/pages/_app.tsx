import "~/styles/globals.css";

import { MyAppProps } from "~/layout/types";
import { Layouts } from "~/layout/Layouts";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
function App({ Component, pageProps }: MyAppProps, { session }: any) {
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  const main = useRef()
  const buttonContainer = useRef()
  const [isActive, setIsActive] = useState(false)
  const [scrollTop, setScrollTop] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const handleScroll = (e: any) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop > 0) {
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  }, [scrollToTop])
  return (
    <Layout>
      <Component {...pageProps} />
      <div className={`fixed w-12 h-12 opacity-0 rounded-full bg-[color:var(--primary-color)] top-[90%] left-[95%] ${isActive ? "scoll-active opacity-1" : "scoll-fadeOut"}`} >
        <div className="flex items-center justify-center w-full h-full ">
          <MdKeyboardArrowUp size="30" color="white" />
        </div>
      </div>

    </Layout>
  );
}
export default App;
