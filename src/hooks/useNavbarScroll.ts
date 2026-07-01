import { useEffect, useState } from "react";

export default function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    onScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  return scrolled;
}