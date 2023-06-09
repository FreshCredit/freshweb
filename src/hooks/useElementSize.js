import { useState, useEffect } from 'react';

function useElementSize(ref) {
  const [elementSize, setElementSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      const { current } = ref;
      if (current) {
        setElementSize({
          width: current.offsetWidth,
          height: current.offsetHeight,
        });
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return elementSize;
}
export default useElementSize