import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = (props: {
  children: React.ReactElement;
}) => React.ReactPortal | null;

const Portal: PortalProps = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [setMounted]);

  const container = document.getElementById("portal");

  return container
    ? (mounted ? createPortal(children, container) : null)
    : null;
};

export default Portal;
