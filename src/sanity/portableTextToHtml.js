export default function portableTextToHtml(blocks = []) {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (!block) return "";
      if (block._type === "block") {
        const text = (block.children || []).map((c) => c.text || "").join("");
        return `<p>${escapeHtml(text)}</p>`;
      }

      if (block._type === "image" && block.asset && block.asset._ref) {
        const url = block.asset.url || "";
        return `<img src="${escapeHtml(url)}" alt="" class="rounded"/>`;
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
