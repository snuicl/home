/* ==========================================================================
   LINKS — every menu, button and icon on this page reads its address here.
   Change an address once and it updates everywhere.
   (Team, Publications, Gallery, Join Us and News are still on Google Sites.
    If the domain moves to GitHub, replace https://icl.snu.ac.kr with the
    Google Sites address.)
   ========================================================================== */
const LINKS = {
  team:         "team.html",
  publications: "publications.html",
  gallery:      "https://icl.snu.ac.kr/gallery",
  join:         "join.html",
  news:         "https://icl.snu.ac.kr/news",
  github:       "https://github.com/",        // e.g. https://github.com/snu-icl
  huggingface:  "https://huggingface.co/"     // e.g. https://huggingface.co/snu-icl
};
document.querySelectorAll("[data-link]").forEach(a => { a.href = LINKS[a.dataset.link] || "#"; });

const burger = document.getElementById("burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// highlight Spotlight / Highlight / Oral / Best Paper in red bold
window.highlight = (s) => s.replace(/\b(Spotlight|Highlight|Oral|Best Paper)\b/g, '<span class="hl">$1</span>');
