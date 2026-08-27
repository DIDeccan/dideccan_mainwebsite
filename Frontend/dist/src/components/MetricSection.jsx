import React from "react";
import { metrics } from "../data/site";
import { useCountUp, useInView } from "../hooks/useInView";
import "../styles/Metrics.css";

function formatValue(value, pad) {
  if (!pad) return String(value);
  return String(value).padStart(pad, "0");
}

function MetricItem({ value, suffix, label, pad, active }) {
  const count = useCountUp(value, active);
  return (
    <li>
      <b>
        {formatValue(count, pad)}
        {suffix}
      </b>
      <span>{label}</span>
    </li>
  );
}

function MetricSection() {
  const [ref, visible] = useInView();

  return (
    <section className="metrics-section" aria-label="Company metrics">
      <div className="container">
        <ul className="metrics-row" ref={ref}>
          {metrics.map((item) => (
            <MetricItem key={item.label} {...item} active={visible} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MetricSection;
