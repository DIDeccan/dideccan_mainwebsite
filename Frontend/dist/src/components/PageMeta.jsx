import { useEffect } from "react";

function upsertMeta(attr, key, value) {
  if (!value) return;
  let node = document.querySelector(`meta[${attr}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", value);
}

function PageMeta({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const descNode = document.querySelector('meta[name="description"]');
    const previousDescription = descNode?.getAttribute("content") || "";

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    return () => {
      document.title = previousTitle;
      if (descNode) descNode.setAttribute("content", previousDescription);
    };
  }, [title, description]);

  return null;
}

export default PageMeta;
