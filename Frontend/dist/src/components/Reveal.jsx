import React from "react";
import { useInView } from "../hooks/useInView";

function Reveal({ as: Tag = "div", children, className = "", delay = 0, style, ...props }) {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
