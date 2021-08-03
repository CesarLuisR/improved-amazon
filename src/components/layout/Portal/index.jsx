import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [setMounted]);

  const container = document.getElementById("portal");
  return mounted ? createPortal(children, container) : null;
};

export default Portal;
