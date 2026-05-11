export default function portableTextToHtml(blocks = []) {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (!block) return "";
      if (block._type === "block") {
        const text = (block.children || []).map((c) => c.text || "").join("");
        if (block.style === "h1") return `<h1>${escapeHtml(text)}</h1>`;
        if (block.style === "h2") return `<h2>${escapeHtml(text)}</h2>`;
        if (block.style === "h3") return `<h3>${escapeHtml(text)}</h3>`;
        if (block.style === "blockquote")
          return `<blockquote>${escapeHtml(text)}</blockquote>`;
        return `<p>${escapeHtml(text)}</p>`;
      }

      if (block._type === "image" && block.asset && block.asset._ref) {
        const url = block.asset.url || "";
        return `<img src="${escapeHtml(url)}" alt="" class="my-8 w-full rounded-lg border border-gray-200"/>`;
      }

      // fallback: stringify
      return "";
    })
    .join("");
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
