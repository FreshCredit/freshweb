import { useRef, useEffect } from 'react';
import './index.css'

const BasicModal = ({ isModal, handleClose, children, style }) => {
  const modalRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef])

  return (
    <>
      {
        isModal &&
        <div className="modal" style={style} ref={modalRef}>
          {children}
        </div>
      }
    </>
  );
}

export default BasicModal