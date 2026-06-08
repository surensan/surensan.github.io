// 作品数据按 PDF 页码与真实素材重新整理。
// 图片来自 assets/extracted，详情页合成图来自 assets/combined，视频来自 assets/videos。
const page = (name) => `assets/extracted/${name}`;
const detail = (name) => `assets/combined/${name}`;
const cover = (name) => `assets/covers/${name}`;
const video = (name) => `assets/videos/${name}`;

const projects = [
  imageProject(3, "Job Poster 场景视觉", "3d", "practice", page("p03-img01.jpg"), [page("p03-img01.jpg")], ["渲染", "练习作品", "场景视觉"], "单页场景视觉，以完整页面形式展示画面氛围、主体关系和商业海报版式。"),
  imageProject(4, "礼盒暗场包装渲染", "3d", "product3d", page("p04-img01.jpg"), [page("p04-img01.jpg")], ["渲染", "产品渲染", "暗场灯光"], "通过低照度背景和暖色灯光突出礼盒质感，适合礼赠类产品活动主视觉与详情页头图。"),
  imageProject(5, "礼盒陈列包装渲染", "3d", "product3d", page("p05-img01.jpg"), [page("p05-img01.jpg"), page("p05-img02.jpg")], ["渲染", "产品渲染", "陈列"], "以多盒型陈列呈现产品组合关系，强调包装正面信息、货架层次和促销场景感。"),
  imageProject(6, "服装产品单帧渲染", "3d", "practice", page("p06-img01.jpg"), [page("p06-img01.jpg")], ["渲染", "练习作品", "单帧"], "突出服装结构、材质和内部视觉焦点，用单帧方式快速传达产品功能与卖点。"),
  imageProject(7, "天空场景单帧渲染", "3d", "practice", page("p07-img01.jpg"), [page("p07-img01.jpg")], ["渲染", "练习作品", "氛围"], "以蓝天和轻盈物体营造自然、轻量、舒适的视觉氛围，可作为产品概念或活动背景图。"),
  imageProject(8, "抽象球体材质渲染", "3d", "practice", page("p08-img01.jpg"), [page("p08-img01.jpg")], ["渲染", "练习作品", "材质"], "通过球体、雾面空间和高对比光影展示材质控制与抽象视觉表达能力。"),
  imageProject(9, "口罩产品阵列渲染", "3d", "product3d", page("p09-img01.jpg"), [page("p09-img01.jpg")], ["渲染", "口罩", "产品阵列"], "多色口罩产品阵列展示，强调柔和材质、颜色区分和消费品主图的干净质感。"),
  imageProject(10, "VR 产品单帧渲染", "3d", "product3d", page("p10-img01.jpg"), [page("p10-img01.jpg")], ["渲染", "3C数码", "产品"], "以白底和干净投影突出 VR 产品主体，适合 3C 产品主图和详情页核心卖点展示。"),
  imageProject(11, "精密零件产品渲染", "3d", "product3d", page("p11-img01.jpg"), [page("p11-img01.jpg")], ["渲染", "金属", "零件"], "展示金属零件的结构、比例和反射控制，突出工业产品的精密感。"),

  ...singleFrameProjects(12, [
    ["p12-img01.jpg", "耳机详情首屏渲染"], ["p12-img03.jpg", "产品包装单帧"], ["p12-img04.jpg", "手柄卖点海报"],
    ["p12-img05.jpg", "耳机产品卖点图"], ["p12-img06.jpg", "功能说明版式"], ["p12-img07.jpg", "耳机氛围海报"], ["p12-img08.jpg", "居家产品场景图"],
    ["p12-img09.jpg", "产品场景渲染"], ["p12-img10.jpg", "游戏化场景海报"], ["p12-img11.jpg", "冰雪氛围海报"], ["p12-img12.jpg", "产品角色图"],
    ["p12-img13.jpg", "滑板场景渲染"], ["p12-img14.jpg", "童车空间渲染"]
  ]),
  ...singleFrameProjects(13, [
    ["p13-img01.jpg", "户外产品氛围图"], ["p13-img02.jpg", "个护产品场景渲染"], ["p13-img03.jpg", "智能设备场景渲染"], ["p13-img04.jpg", "IP 角色单帧 01"],
    ["p13-img05.jpg", "IP 角色单帧 02"], ["p13-img06.jpg", "IP 角色单帧 03"], ["p13-img07.jpg", "IP 角色单帧 04"], ["p13-img08.jpg", "卡带产品单帧"],
    ["p13-img09.jpg", "角色场景单帧"], ["p13-img10.jpg", "居家空间渲染"], ["p13-img11.jpg", "汽车产品单帧"]
  ]),
  imageProject(140, "第 14 页渲染合集", "3d", "practice", page("p14-img01.jpg"), [page("p14-img01.jpg")], ["渲染", "练习作品", "包装视觉"], "整页渲染合集，集中展示包装视觉、品牌物料和产品陈列效果。"),

  imageProject(15, "儿童手拍鼓详情页", "2d", "detail", cover("detail-page-15.jpg"), [detail("detail-page-15.jpg")], ["详情页", "儿童产品", "玩具"], "儿童手拍鼓产品详情页。围绕趣味互动、亲子陪伴、材质安全和产品结构展开，以活泼插画色彩和模块化卖点组织完整购买路径。"),
  imageProject(16, "紫外线消毒包详情页", "2d", "detail", cover("detail-page-16.jpg"), [detail("detail-page-16.jpg")], ["详情页", "消毒包", "母婴个护"], "紫外线消毒包详情页。重点提取消毒杀菌、便携收纳、适用多场景和安心护理等卖点，用蓝白科技感视觉强化专业度。"),
  imageProject(17, "儿童自行车详情页", "2d", "detail", cover("detail-page-17.jpg"), [detail("detail-page-17.jpg")], ["详情页", "儿童自行车", "电商页面"], "儿童自行车详情页。围绕骑行安全、车身结构、轻便操控和儿童成长场景展开，页面节奏从氛围首屏过渡到结构、细节和参数说明。"),
  imageProject(18, "免洗洗手液详情页", "2d", "detail", cover("detail-page-18.jpg"), [detail("detail-page-18.jpg")], ["详情页", "免洗洗手液", "清洁护理"], "免洗洗手液详情页。提炼便携清洁、温和护理、随时使用和家庭场景等卖点，以清爽色调和留白强化干净、安心的产品感受。"),
  imageProject(19, "绿鼻子儿童口罩详情页", "2d", "detail", cover("detail-page-19.jpg"), [detail("detail-page-19.jpg")], ["详情页", "儿童口罩", "防护用品"], "绿鼻子儿童口罩详情页。围绕儿童防护、亲肤舒适、透气结构和多场景佩戴展开，采用清新绿色系统强化安全与健康感。"),

  {
    ...imageProject(20, "红豆居家主图系列", "2d", "mainVisual", page("p20-img01.jpg"), [
      page("p20-img01.jpg"), page("p20-img02.jpg"), page("p20-img03.jpg"), page("p20-img04.jpg"),
      page("p20-img05.jpg"), page("p20-img06.jpg"), page("p20-img07.jpg"), page("p20-img08.jpg"),
      page("p20-img09.jpg"), page("p20-img10.jpg"), page("p20-img11.jpg"), page("p20-img12.jpg"),
      page("p20-img13.jpg"), page("p20-img14.jpg")
    ], ["主图", "服饰个护", "电商视觉"], "第 20 页主图系列。方图适合平台主图和社媒投放，两列展示能更快比较不同构图、产品卖点和模特场景。"),
    galleryLayout: "grid"
  },
  imageProject(21, "电商首页视觉规范 01", "2d", "visualSystem", page("p21-img01.jpg"), [page("p21-img01.jpg")], ["首页视觉", "规范", "元素"], "电商首页视觉规范项目，展示色彩、标题、元素和页面模块的统一规则。"),
  imageProject(22, "电商首页视觉规范 02", "2d", "visualSystem", page("p22-img01.jpg"), [page("p22-img01.jpg")], ["首页视觉", "规范", "元素"], "第二套电商首页视觉规范，关注活动页面的信息层级、物料延展和统一视觉系统。"),
  {
    ...imageProject(2301, "AI 节气海报", "2d", "aiPoster", page("p23-img06.jpg"), [page("p23-img06.jpg"), page("p23-img07.jpg")], ["AI", "节气海报", "平面"], "第 23 页中的两张 AI 节气海报，单独与渲染作品分开展示。"),
    galleryLayout: "grid"
  },
  imageProject(2302, "第 23 页礼盒渲染组", "3d", "product3d", page("p23-img15.jpg"), [
    page("p23-img04.jpg"), page("p23-img10.jpg"), page("p23-img11.jpg"), page("p23-img12.jpg"), page("p23-img13.jpg"), page("p23-img15.jpg")
  ], ["渲染", "礼盒", "节日营销"], "第 23 页中除 AI 节气海报外的渲染图，集中展示礼盒、电商场景和节日营销氛围。"),
  imageProject(2426, "新年海报与代言人主图", "2d", "composite", page("p25-img02.jpg"), [
    page("p24-img01.jpg"), page("p24-img02.jpg"), page("p24-img03.jpg"),
    page("p25-img01.jpg"), page("p25-img02.jpg"), page("p25-img03.jpg"),
    page("p26-img01.jpg"), page("p26-img02.jpg")
  ], ["合成", "过年海报", "代言人主图"], "第 24 页过年海报、25 页代言人主图和 26 页手幅合并为一个完整营销视觉项目。"),

  videoProject(3001, "绿鼻子口罩三维动画", "3d", "animation", page("p09-img01.jpg"), video("mask-animation.mp4"), ["动画", "口罩", "产品展示"], "口罩产品三维动画，用动态方式展示产品外观、结构和轻量化视觉氛围。"),
  videoProject(3002, "美朵嘉蚊帐旋转动画", "3d", "animation", page("p13-img10.jpg"), video("mosquito-net-animation.mp4"), ["动画", "蚊帐", "旋转展示"], "蚊帐产品旋转动画，通过动态视角展示空间结构、产品形态和使用场景。")
];

projects.push(...(window.extraPortfolioProjects || []));

const featuredProjectIds = [17, 19, 2426, 2302, 1311];
const wideProjectIds = new Set([10, 1311, 2302, 2426]);

projects.forEach((projectItem) => {
  if (projectItem.subCategory === "detail" && !projectItem.updatedAt) {
    projectItem.updatedAt = "2026-06";
  }

  if (projectItem.subCategory === "detail" && !projectItem.updateMonths) {
    projectItem.updateMonths = projectItem.updatedAt ? [projectItem.updatedAt] : [];
  }

  if (!projectItem.statement) {
    projectItem.statement = createStatement(projectItem);
  }

  if (wideProjectIds.has(projectItem.id)) {
    projectItem.cardSize = "wide";
  }
});

const categoryLabels = {
  "2d": "平面设计",
  "3d": "渲染作品",
  detailRender: "详情页卖点渲染",
  product3d: "产品渲染",
  animation: "动画展示",
  practice: "练习作品",
  detail: "详情页",
  mainVisual: "主图",
  visualSystem: "视觉规范",
  aiPoster: "AI 海报",
  composite: "合成海报"
};

const subFilterMap = {
  featured: [],
  "2d": [
    { label: "详情页", value: "detail" },
    { label: "主图", value: "mainVisual" },
    { label: "视觉规范", value: "visualSystem" },
    { label: "AI 海报", value: "aiPoster" },
    { label: "合成海报", value: "composite" }
  ],
  "3d": [
    { label: "产品渲染", value: "product3d" },
    { label: "详情页卖点渲染", value: "detailRender" },
    { label: "练习作品", value: "practice" }
  ]
};

const state = {
  main: "featured",
  sub: ""
};

const worksGrid = document.querySelector("#worksGrid");
const subFilters = document.querySelector("#subFilters");
const modal = document.querySelector("#projectModal");
const modalImage = document.querySelector("#modalImage");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTags = document.querySelector("#modalTags");
const modalHistory = document.querySelector("#modalHistory");
const modalGallery = document.querySelector("#modalGallery");
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

function imageProject(id, title, mainCategory, subCategory, coverImage, detailImages, tags, description) {
  return { id, type: "image", title, mainCategory, subCategory, coverImage, detailImages, tags, description };
}

function videoProject(id, title, mainCategory, subCategory, coverImage, videoSrc, tags, description) {
  return { id, type: "video", title, mainCategory, subCategory, coverImage, videoSrc, detailImages: [], tags, description };
}

function singleFrameProjects(pageNumber, items) {
  return items.map(([file, title], index) => {
    const image = page(file);
    const subCategory = pageNumber === 12 ? "detailRender" : "practice";
    return imageProject(
      pageNumber * 100 + index + 1,
      title,
      "3d",
      subCategory,
      image,
      [image],
      ["渲染", `PDF 第 ${pageNumber} 页`, "单帧"],
      `PDF 第 ${pageNumber} 页单帧渲染图，已按独立作品拆分展示。`
    );
  });
}

function createProjectCard(projectItem) {
  const card = document.createElement("article");
  card.className = `project-card ${projectItem.type === "video" ? "video-card" : ""}`;
  if (projectItem.cardSize === "wide") card.classList.add("wide-card");
  card.tabIndex = 0;
  card.dataset.projectId = projectItem.id;

  const media = projectItem.type === "video"
    ? `<video class="card-video" src="${projectItem.videoSrc}" autoplay muted loop playsinline preload="metadata"></video>`
    : `<img src="${projectItem.coverImage}" alt="${projectItem.title}" loading="lazy">`;

  card.innerHTML = `
    ${media}
    ${projectItem.type === "video" ? '<span class="play-badge">Play</span>' : ""}
    <div class="project-overlay">
      <p>${categoryLabels[projectItem.mainCategory]} / ${categoryLabels[projectItem.subCategory]}</p>
      <h3>${projectItem.title}</h3>
      <small>${projectItem.statement}</small>
    </div>
  `;

  card.addEventListener("click", () => openModal(projectItem));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openModal(projectItem);
  });

  return card;
}

function getFilteredProjects() {
  if (state.main === "featured") {
    return featuredProjectIds
      .map((id) => projects.find((item) => item.id === id))
      .filter(Boolean);
  }

  return projects.filter((projectItem) => {
    if (projectItem.type === "video") return false;
    const matchesMain = state.main === "all" || projectItem.mainCategory === state.main;
    const matchesSub = state.sub === "all" || projectItem.subCategory === state.sub;
    return matchesMain && matchesSub;
  });
}

function renderWorks() {
  const currentCards = [...worksGrid.children];
  currentCards.forEach((card) => card.classList.add("is-hiding"));

  window.setTimeout(() => {
    worksGrid.innerHTML = "";
    getFilteredProjects().forEach((projectItem) => {
      const card = createProjectCard(projectItem);
      card.classList.add("is-hiding");
      worksGrid.appendChild(card);
      requestAnimationFrame(() => card.classList.remove("is-hiding"));
    });
  }, 180);
}

function renderSubFilters() {
  const filters = subFilterMap[state.main];
  subFilters.innerHTML = "";

  if (!filters || filters.length === 0) {
    subFilters.hidden = true;
    return;
  }

  subFilters.hidden = false;

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip ${state.sub === filter.value ? "active" : ""}`;
    button.textContent = filter.label;
    button.dataset.subFilter = filter.value;

    button.addEventListener("click", () => {
      state.sub = filter.value;
      renderSubFilters();
      renderWorks();
    });

    subFilters.appendChild(button);
  });
}

function bindMainFilters() {
  document.querySelectorAll("[data-main-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.main = button.dataset.mainFilter;
      state.sub = getDefaultSubFilter(state.main);

      document.querySelectorAll("[data-main-filter]").forEach((item) => {
        item.classList.toggle("active", item.dataset.mainFilter === state.main);
      });

      renderSubFilters();
      renderWorks();
    });
  });
}

function getDefaultSubFilter(mainCategory) {
  return subFilterMap[mainCategory]?.[0]?.value || "";
}

function bindNavFilters() {
  document.querySelectorAll("[data-nav-filter]").forEach((link) => {
    link.addEventListener("click", () => {
      const filter = link.dataset.navFilter;
      const targetButton = document.querySelector(`[data-main-filter="${filter}"]`);
      if (targetButton) targetButton.click();
      closeMobileMenu();
    });
  });
}

function openModal(projectItem) {
  const modalCard = modal.querySelector(".modal-card");
  modalCard.className = "modal-card project-modal";
  modalImage.src = projectItem.coverImage;
  modalImage.alt = projectItem.title;
  modalCategory.textContent = `${categoryLabels[projectItem.mainCategory]} / ${categoryLabels[projectItem.subCategory]}`;
  modalTitle.textContent = projectItem.title;
  modalDescription.textContent = projectItem.description;
  modalTags.innerHTML = projectItem.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalHistory.innerHTML = renderHistory(projectItem);
  modalGallery.className = `modal-gallery ${projectItem.galleryLayout === "grid" ? "modal-gallery-grid" : ""}`;

  if (projectItem.type === "video") {
    modalGallery.innerHTML = `
      <video class="modal-video" src="${projectItem.videoSrc}" controls playsinline preload="metadata"></video>
    `;
  } else {
    modalGallery.innerHTML = projectItem.detailImages
      .map((image, index) => `<img src="${image}" alt="${projectItem.title} 详情图 ${index + 1}" loading="lazy">`)
      .join("");
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-content").scrollTop = 0;
}

function renderHistory(projectItem) {
  if (projectItem.mainCategory === "3d") return "";

  const months = projectItem.updateMonths || [];
  const limit = Number(projectItem.historyLimit || 12);
  const visibleMonths = months.slice(0, limit);

  if (visibleMonths.length === 0) return "";

  return `
    <div class="history-meta">修改记录 ${visibleMonths.join(" / ")}</div>
  `;
}

function createStatement(projectItem) {
  if (projectItem.subCategory === "detail") return "把产品卖点组织成一条清晰的购买路径。";
  if (projectItem.subCategory === "animation") return "让产品在运动中显露结构与场景。";
  if (projectItem.subCategory === "product3d") return "用光影和材质提前建立产品现场感。";
  if (projectItem.subCategory === "practice") return "在单帧中练习材质、空间和视觉秩序。";
  if (projectItem.subCategory === "visualSystem") return "让页面元素拥有统一的视觉规则。";
  if (projectItem.subCategory === "mainVisual") return "用主图快速抓住产品的第一眼印象。";
  return "以视觉秩序提高作品的识别与沟通效率。";
}

function bindSideTimeline() {
  const links = [...document.querySelectorAll("[data-section-link]")];
  if (!links.length) return;

  const sections = links
    .map((link) => document.querySelector(`#${link.dataset.sectionLink}`))
    .filter(Boolean);

  const updateActiveLink = () => {
    const current = sections.reduce((active, section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.48 ? section : active;
    }, sections[0]);

    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.sectionLink === current.id);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
}

function closeModal() {
  modal.querySelectorAll("video").forEach((item) => item.pause());
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileMenuBtn.setAttribute("aria-expanded", "false");
}

function bindModalEvents() {
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function bindMobileMenu() {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

function initPortfolio() {
  state.sub = getDefaultSubFilter(state.main);
  renderSubFilters();
  renderWorks();
  bindMainFilters();
  bindNavFilters();
  bindModalEvents();
  bindMobileMenu();
  bindSideTimeline();
}

initPortfolio();
