import { createPortal } from "react-dom";
import React, { useState, useEffect } from "react";

type PortalProps = (props: {
  children: React.ReactElement;
}) => React.ReactPortal | null;

const Portal: PortalProps = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const container = document.getElementById("portal");

  return container
    ? mounted
      ? createPortal(children, container)
      : null
    : null;
};

export default Portal;
