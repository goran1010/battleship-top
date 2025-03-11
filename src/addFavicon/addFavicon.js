import favicon from "./favicon.png";

export default function addFavicon() {
  const link = document.createElement("link");
  link.rel = "shortcut icon";
  link.type = "image/x-icon";
  link.href = favicon;
  document.head.appendChild(link);
}

addFavicon();
