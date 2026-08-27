import React from "react";
import { ArrowRight } from "react-feather";
import { NavLink } from "react-router-dom";

function MegaMenu({ id, open, title, items, onNavigate }) {
  if (!open) return null;

  return (
    <div className="mega" id={id} role="menu" aria-label={title}>
      <div className="mega-inner">
        <p className="mega-kicker">{title}</p>
        <ul className="mega-grid">
          {items.map((item) => (
            <li key={`${item.to}-${item.name || item.title || item.num}`}>
              <NavLink to={item.to} className="mega-item" onClick={onNavigate} role="menuitem">
                {item.logo ? (
                  <span className="mega-logo" style={{ background: item.lightAccent || "#EFF6FF" }}>
                    <img src={item.logo} alt="" />
                  </span>
                ) : item.num ? (
                  <span className="mega-index">{item.num}</span>
                ) : null}
                <span className="mega-copy">
                  <strong>{item.name || item.title}</strong>
                  <small>{item.description || item.category}</small>
                </span>
                <ArrowRight className="mega-arrow" size={16} aria-hidden="true" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MegaMenu;
