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
    type: "grant",
    date: "October 2026",
    title: "Selected for the Samsung Science & Technology Program",
    details: "The Samsung Science & Technology Foundation will support our project “Forgetting as a Fundamental Operation of Intelligence,” on selective consolidation for vision-language agents.",
    image: "images/news/samsung.jpg",
    fit: "contain",
    bg: "#01183f"
  },
  {
    type: "paper",
    date: "September 2026",
    title: "Three NeurIPS 2026 papers, including a <span class=\"hl\">Spotlight</span>",
    details: "Three papers from ICL will appear at NeurIPS 2026, with one selected as a Spotlight.",
    image: "images/news/neurips26.png",
    fit: "contain",
    bg: "#f6f2fa",
    pad: "6%",
    papers: [
      "Hoigi Seo*, Byung Hyun Lee*, Minjun Kim*, Dohyun Mah, Jongho Lee, Se Young Chun, “Strong Helps Weak: Directional Cross-Modal Alignment Transfer in Multi-modal LLMs.” <span class=\"mini hot\">Spotlight</span> <a href=\"https://arxiv.org/abs/2610.04580\">report</a> <a href=\"https://seohoiki3215.github.io/DCAT_project_page/\">project</a>",
      "Junseo Bang, Daewon Choi, Dong Ju Mun, Se Young Chun, “FLINT: Coupling Proximal Initialization and Bounded Stochasticity for Flow-Matching Inverse Problems.”",
      "Jinho Park, Se Young Chun, Mingoo Seok, “DictLLM: Post-training Compression of Large Language Model with Dictionary Kernels.”"
    ]
  },
  {
    type: "award",
    date: "August 2026",
    title: "Wongi Jeong wins a Youlchon AI Star award",
    details: "Congratulations to Wongi Jeong on receiving a Youlchon AI Star award.",
    image: "images/news/youlchon.jpg"
  },
  {
    type: "paper",
    date: "June 2026",
    title: "One paper accepted at ECCV 2026",
    details: "Our paper on hyperbolic fine-tuning of CLIP for long-context understanding will appear at ECCV 2026.",
    papers: [
      "Ji Ha Jang*, Hayeon Kim*, Chulwon Lee, Junghun J. Kim, Se Young Chun, “HyFL-CLIP: Hyperbolic Fine-Tuning of CLIP for Robust Long-Context Understanding.” <a href=\"https://arxiv.org/abs/2607.00428\">report</a> <a href=\"https://janeyeon.github.io/hyflclip/\">project</a>"
    ]
  },
  {
    type: "paper",
    date: "June 2026",
    title: "One collaboration paper accepted at MICCAI 2026",
    details: "A collaboration paper on megapixel artifact inpainting in whole slide images will appear at MICCAI 2026.",
    papers: [
      "H S Lee, E S Kim, D M Bappy, H H Kim, Y S Lee, Se Young Chun, J-H Choi, S H Lee, S J Ahn, “Patch-to-Global: Random Patch Diffusion for Globally Consistent Megapixel Artifact Inpainting in Whole Slide Images.”"
    ]
  },
  {
    type: "award",
    date: "June 2026",
    title: "CVPR 2026 Compute Transparency Champion award",
    details: "Our paper “Erasing Thousands of Concepts” received the Compute Transparency Champion award, the highest recognition in CVPR 2026’s Compute Reporting Initiative. The work was also highlighted in <a href=\"https://www.popsci.co.kr/news/articleView.html?idxno=24647\">Popular Science</a>.",
    image: "images/news/cvpr26-award.jpg",
    papers: [
      "Hoigi Seo*, Byung Hyun Lee*, Jaehyun Cho, Sungjin Lim, Se Young Chun, “Erasing Thousands of Concepts: Towards Scalable and Practical Concept Erasure for Text-to-Image Diffusion Models,” CVPR 2026."
    ]
  },
  {
    type: "paper",
    date: "May 2026",
    title: "One paper accepted at ICML 2026",
    details: "Our paper on diffusion posterior sampling for inverse problems will appear at ICML 2026.",
    papers: [
      "Junseo Bang*, Dong Ju Mun*, Hoigi Seo, Seongmin Hong, Se Young Chun, “Triadic Dynamics Aware Diffusion Posterior Sampling for Inverse Problems: Optimizing Guidance and Stochasticity Schedules.” <a href=\"https://arxiv.org/abs/2605.26470\">report</a> <a href=\"https://mundongju.github.io/TriPS/\">project</a>"
    ]
  },
  {
    type: "people",
    date: "April 2026",
    title: "Gwanghyun Kim joins NVIDIA as a Research Scientist",
    details: "Gwanghyun Kim has joined NVIDIA, USA, as a Research Scientist. Congratulations!"
  },
  {
    type: "paper",
    date: "April 2026",
    title: "Seven CVPR 2026 papers, including three <span class=\"hl\">Highlights</span>",
    details: "Seven papers from ICL were accepted at CVPR 2026, and three of them were selected as Highlights.",
    papers: [
      "Gwanghyun Kim*, Junghun J. Kim*, Suh Yoon Jeon*, Jason Park, Se Young Chun, “Human Interaction-Aware 3D Reconstruction from a Single Image.” <span class=\"mini hot\">Highlight</span> <a href=\"https://arxiv.org/abs/2604.05436\">report</a> <a href=\"https://jongheean11.github.io/HUG3D_project/\">project</a>",
      "Hayeon Kim*, Ji Ha Jang*, Junghun J. Kim, Se Young Chun, “Uncertainty-guided Compositional Alignment with Part-to-Whole Semantic Representativeness in Hyperbolic Vision-Language Models.” <span class=\"mini hot\">Highlight</span> <a href=\"https://arxiv.org/abs/2603.22042\">report</a> <a href=\"https://jeeit17.github.io/UNCHA-project_page/\">project</a>",
      "Hoigi Seo*, Byung Hyun Lee*, Jaehyun Cho, Sungjin Lim, Se Young Chun, “Erasing Thousands of Concepts: Towards Scalable and Practical Concept Erasure for Text-to-Image Diffusion Models.” <a href=\"https://arxiv.org/abs/2604.16481\">report</a> <a href=\"https://seohoiki3215.github.io/ETC_project_page/\">project</a>",
      "Wongi Jeong*, Hoigi Seo*, Se Young Chun, “Training-free, Perceptually Consistent Low-Resolution Previews with High-Resolution Image for Efficient Workflows of Diffusion Models.” <a href=\"https://arxiv.org/abs/2604.09227\">report</a> <a href=\"https://ignoww.github.io/Preview_project/\">project</a>",
      "Wongi Jeong*, Kyungryeol Lee*, Hoigi Seo, Se Young Chun, “Training-free Mixed-Resolution Latent Upsampling for Spatially Accelerated Diffusion Transformers.” <span class=\"mini hot\">Highlight</span> <a href=\"https://arxiv.org/abs/2507.08422\">report</a> <a href=\"https://ignoww.github.io/RALU_project/\">project</a>",
      "Seongmin Hong*, Junghun J. Kim*, Daehyeop Kim, Insoo Chung, Se Young Chun, “DiffBMP: Differentiable Rendering with Bitmap Primitives.” <a href=\"https://arxiv.org/abs/2602.22625\">report</a> <a href=\"https://diffbmp.com\">project</a>",
      "Jinho Park, Se Young Chun, Mingoo Seok, “AdaRadar: Rate Adaptive Spectral Compression for Radar-based Perception.” <a href=\"https://arxiv.org/abs/2603.17979\">report</a> <a href=\"https://jp4327.github.io/adaradar/\">project</a>"
    ]
  },
  {
    type: "paper",
    date: "March 2026",
    title: "One collaboration paper published in Theranostics",
    details: "A collaboration paper on collagen hydrogels for extrachromosomal DNA-associated colorectal cancer research was published in Theranostics (IF 13.3).",
    papers: [
      "S Y Jo, J W Shon, S H An, Y J Nam, D W Choi, S M Lee, Hoigi Seo, Se Young Chun, H Kim, G H Kim, “Tailorable porous collagen hydrogels as a physiologically relevant platform for extrachromosomal DNA-associated colorectal cancer research,” Theranostics 16(10):5240-58, 2026. <a href=\"https://doi.org/10.7150/thno.128574\">paper</a>"
    ]
  },
  {
    type: "grant",
    date: "March 2026",
    title: "Selected for the NVIDIA Academic Grant Program",
    details: "In collaboration with Prof. Hoon Kim at SKKU, ICL has been selected for the NVIDIA Academic Grant Program. NVIDIA will provide 32,000 A100 GPU-hours to SNU in support of our megabase-scale DNA foundation model project."
  },
  {
    type: "paper",
    date: "March 2026",
    title: "One paper accepted at IEEE Access",
    details: "Our paper on open-vocabulary semantic segmentation in remote sensing was accepted at IEEE Access (IEEE Geoscience and Remote Sensing Society Section, IF 3.6).",
    papers: [
      "Sungjin Lim*, Dong Un Kang*, Yeong Mok Cho, Se Young Chun, “Dual Context-Conditioned Open-Vocabulary Semantic Segmentation in Remote Sensing.” <a href=\"https://doi.org/10.1109/ACCESS.2026.3674757\">paper</a>"
    ]
  },
  {
    type: "award",
    date: "February 2026",
    title: "Sungjin Lim wins the IPAI Best Master's Thesis Award",
    details: "Congratulations to Sungjin Lim on winning the IPAI Best Master's Thesis Award."
  },
  {
    type: "people",
    date: "December 2025",
    title: "Thesis defenses completed",
    details: "Joonhee Lee and Gwanghyun Kim successfully completed their PhD thesis defenses, and Sungjin Lim completed his MS thesis defense. Congratulations!"
  },
  {
    type: "paper",
    date: "October 2025",
    title: "Papers accepted at Image and Vision Computing, IEEE Access and IEEE TCI",
    details: "One paper was accepted at Image and Vision Computing (IF 4.2), and two collaboration papers at IEEE Access (IF 3.6) and IEEE Transactions on Computational Imaging (IF 4.8).",
    papers: [
      "Haechang Lee*, Dong Ju Mun*, Hyunwoo Lee*, Kyung Chul Lee, Seongmin Hong, Gwanghyun Kim, Seung Ah Lee**, Se Young Chun**, “Fidelity-Preserving Zero-shot Diffusion Models for Highly Ill-posed Inverse Problems in Lensless Imaging,” Image and Vision Computing. <a href=\"https://doi.org/10.1016/j.imavis.2025.105786\">paper</a> <a href=\"https://github.com/mundongju/Dilack\">code</a>",
      "J H Yoon, H G Park, M J Kim, H H Jeong, Se Young Chun, S Y Ji, J H Lee, “Clinical dementia rating classification using integrated vision and language information,” IEEE Access. <a href=\"https://doi.org/10.1109/ACCESS.2025.3624215\">paper</a>",
      "T Hong, Z Xu, Se Young Chun, L Hernandez-Garcia, J A Fessler, “Convergent Complex Quasi-Newton Proximal Methods for Gradient-Driven Denoisers in Compressed Sensing MRI Reconstruction,” IEEE Transactions on Computational Imaging. <a href=\"https://doi.org/10.1109/TCI.2025.3625052\">paper</a>"
    ]
  },
  {
    type: "people",
    date: "October 2025",
    title: "Byung Hyun Lee joins Naver Cloud as an intern",
    details: "Byung Hyun Lee has joined Naver Cloud as a research intern."
  },
  {
    type: "award",
    date: "October 2025",
    title: "Hoigi Seo wins a BK21 FOUR SNU Fellowship of Research Excellence",
    details: "Congratulations to Hoigi Seo on receiving a BK21 FOUR SNU Fellowship of Research Excellence."
  },
  {
    type: "award",
    date: "September 2025",
    title: "2nd place at the MICCAI 2025 REG Challenge",
    details: "ICL won 2nd place at the MICCAI 2025 Challenge on REport Generation in pathology using Pan-Asia Giga-pixel WSIs (REG). Congratulations to Byung Hyun Lee, Sungjin Lim, Joohoon Lee and Gwanghyun Kim!"
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


// paper links in the pop-up use the same icon buttons as the Publications page
const LINK_ICON = {
  paper:   '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  report:  '<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  project: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  code:    '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  video:   '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>'
};
const LINK_LABEL = { paper: "Paper", report: "arXiv", project: "Project", code: "Code", video: "Video" };
function paperHtml(p) {
  const btns = [];
  const text = p.replace(/<a href="([^"]+)">(paper|report|project|code|video)<\/a>/gi, (_, u, l) => {
    l = l.toLowerCase();
    btns.push(`<a class="lnk l-${l}" href="${u}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24">${LINK_ICON[l]}</svg>${LINK_LABEL[l]}</a>`);
    return "";
  }).replace(/(\s*·\s*)+$/, "").replace(/\s*·\s*(?=\s*$)/, "").trim();
  return text + (btns.length ? `<span class="btns">${btns.join("")}</span>` : "");
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
  ul.innerHTML = (n.papers || []).map(p => `<li>${paperHtml(p)}</li>`).join("");
  ul.style.display = n.papers ? "" : "none";
  modal.showModal();
}
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
