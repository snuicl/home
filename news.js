/* ==========================================================================
   NEWS DATA — edit only this list to update the home page and the News page.
   type: grant | paper | award | talk | people   (sets the icon and color)
   image: optional, e.g. "images/news/neurips26.jpg" (if missing, an icon is shown)
   fit: optional "contain" shows the whole image (no cropping); bg sets the color around it;
        pad adds space around a logo, e.g. "8%"
   papers: optional list shown in the pop-up
   The home page shows the first 4 items; the News page shows all of them.
   ========================================================================== */
const NEWS = [
  {
    type: "grant", date: "October 2026",
    title: "Selected for the Samsung Science & Technology Program",
    details: "The Samsung Science & Technology Foundation will support our project “Forgetting as a Fundamental Operation of Intelligence,” on selective consolidation for vision-language agents.",
    image: "images/news/samsung.jpg", fit: "contain", bg: "#01183f"
  },
  {
    type: "paper", date: "September 2026",
    title: 'Three NeurIPS 2026 papers, including a <span class="hl">Spotlight</span>',
    details: "Three papers from ICL will appear at NeurIPS 2026, with one selected as a Spotlight.",
    image: "images/news/neurips26.png", fit: "contain", bg: "#f6f2fa", pad: "6%",
    papers: [
      'H. Seo*, B. H. Lee*, M. Kim*, D. Mah, J. Lee, S. Y. Chun, “Strong Helps Weak: Directional Cross-Modal Alignment Transfer in Multi-modal LLMs.” <span class="hl">Spotlight</span>. <a href="https://arxiv.org/abs/2610.04580">report</a> · <a href="https://seohoiki3215.github.io/DCAT_project_page/">project</a>',
      'J. Bang, D. Choi, D. J. Mun, S. Y. Chun, “FLINT: Coupling Proximal Initialization and Bounded Stochasticity for Flow-Matching Inverse Problems.”',
      'J. Park, S. Y. Chun, M. Seok, “DictLLM: Post-training Compression of Large Language Model with Dictionary Kernels.”'
    ]
  },
  {
    type: "talk", date: "September 2026",
    title: "Keynote at the ECCV 2026 Beyond Euclidean Workshop",
    details: 'Se Young Chun gave an invited keynote at the <a href="https://sites.google.com/view/beyondeuclidean/home">ECCV 2026 Beyond Euclidean Workshop</a>.',
    image: "images/news/eccv26-keynote.jpg"
  },
  {
    type: "award", date: "August 2026",
    title: "Wongi Jeong wins a Youlchon AI Star award",
    details: "Congratulations to Wongi Jeong on receiving a Youlchon AI Star award.",
    image: "images/news/youlchon.jpg"
  },
  {
    type: "award", date: "June 2026",
    title: "CVPR 2026 Compute Transparency Champion award",
    details: 'Our paper “Erasing Thousands of Concepts” received the highest recognition in CVPR 2026’s Compute Reporting Initiative and was featured in <a href="https://www.popsci.co.kr/news/articleView.html?idxno=24647">Popular Science</a>.',
    image: "images/news/cvpr26-award.jpg"
  }
];
const LABEL = { grant: "Grant", paper: "Paper", award: "Award", talk: "Talk", people: "People" };

const icon = (t) => `<svg class="i"><use href="#i-${t}"/></svg>`;
const media = (n) => `<span class="big">${icon(n.type)}</span>` +
  (n.image ? `<img src="${n.image}" alt="" style="${n.fit ? "object-fit:" + n.fit + ";" : ""}${n.bg ? "background:" + n.bg + ";" : ""}${n.pad ? "padding:" + n.pad + ";box-sizing:border-box;" : ""}" onerror="this.remove()">` : "");

// render news cards into #news (count = how many, all if omitted)
function renderNews(count) {
  const grid = document.getElementById("news");
  NEWS.slice(0, count || NEWS.length).forEach((n, i) => {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.innerHTML = `
      <div class="thumb c-${n.type}">${media(n)}
        <span class="chip">${icon(n.type)}${LABEL[n.type]}</span></div>
      <h3>${n.title}</h3>
      <p class="date">${n.date}</p>
      <p class="details">${n.details.replace(/<[^>]+>/g, "")}</p>`;
    card.addEventListener("click", () => openNews(i));
    grid.appendChild(card);
  });
}

const modal = document.getElementById("modal");
function openNews(i) {
  const n = NEWS[i];
  const m = document.getElementById("m-media");
  m.className = "m-media c-" + n.type;
  m.innerHTML = media(n);
  document.getElementById("m-title").innerHTML = n.title;
  document.getElementById("m-date").textContent = n.date;
  document.getElementById("m-details").innerHTML = n.details;
  const ul = document.getElementById("m-papers");
  ul.innerHTML = (n.papers || []).map(p => `<li>${p}</li>`).join("");
  ul.style.display = n.papers ? "" : "none";
  modal.showModal();
}
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
