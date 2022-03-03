import { useRef, FC, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: any, fn: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, fn]);
}

/**
 * Component that alerts if you click outside of it
 */

interface IOutsideAlerterProps {
  fn: () => void;
}
const OutsideAlerter: FC<IOutsideAlerterProps> = ({ children, fn }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, fn);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
