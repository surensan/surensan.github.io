// 作品数据按 PDF 页码与真实素材重新整理。
// 图片来自 assets/extracted，详情页合成图来自 assets/combined，视频来自 assets/videos。
const page = (name) => `assets/extracted/${name}`;
const detail = (name) => `assets/combined/${name}`;
const cover = (name) => `assets/covers/${name}`;
const video = (name) => `assets/videos/${name}`;

const projects = [
  imageProject(3, "甘源产品手册创意场景渲染", "3d", "product3d", page("p04-img01.jpg"), [page("p03-img01.jpg"), page("p04-img01.jpg"), page("p05-img01.jpg")], ["三维静态", "甘源", "2024"], ""),
  imageProject(6, "高梵黑金羽绒服渲染", "3d", "practice", page("p06-img01.jpg"), [page("p06-img01.jpg")], ["三维静态", "高梵", "2024"], ""),
  imageProject(7, "高梵黑金鹅绒渲染", "3d", "practice", page("p07-img01.jpg"), [page("p07-img01.jpg")], ["三维静态", "高梵", "2024"], ""),
  imageProject(8, "白翎概念渲染", "3d", "practice", page("p08-img01.jpg"), [page("p08-img01.jpg")], ["渲染", "商业作品", "写实材质"], "通过球体、雾面空间和高对比光影展示材质控制与抽象视觉表达能力。"),
  imageProject(9, "绿鼻子口罩渲染", "3d", "product3d", page("p09-img01.jpg"), [page("p09-img01.jpg")], ["三维静态", "Greennose 绿鼻子", "2024"], ""),
  imageProject(10, "蓝鲸 VR眼镜产品渲染", "3d", "product3d", page("p10-img01.jpg"), [page("p12-img02.jpg"), page("p10-img01.jpg"), page("p12-img05.jpg")], ["三维静态", "蓝鲸", "2023"], ""),
  imageProject(11, "追觅吹风机5in1渲染", "3d", "product3d", page("p11-img01.jpg"), [page("p11-img01.jpg")], ["三维静态", "Dreame追觅", "2023"], ""),

  ...singleFrameProjects(12, [
    ["p12-img01.jpg", "缇美妍彩妆卖点渲染"], ["p12-img03.jpg", "火鸡消毒柜渲染"], ["p12-img04.jpg", "Bruno吹风机卖点渲染"],
    ["p12-img11.jpg", "凉感布料渲染"], ["p12-img12.jpg", "海马爸比监视器卖点渲染"]
  ]),
  imageProject(1280, "优调拖鞋卖点渲染", "3d", "detailRender", page("p12-img08.jpg"), [page("p12-img08.jpg"), page("p12-img09.jpg")], ["三维静态", "UTUNE 优调", "2021"], ""),
  imageProject(1281, "Babycare手推车SKU渲染", "3d", "detailRender", page("p12-img13.jpg"), [page("p12-img13.jpg"), page("p12-img14.jpg")], ["三维静态", "Babycare", "2020"], ""),
  ...singleFrameProjects(13, [
    ["p13-img01.jpg", "植物写实渲染"], ["p13-img02.jpg", "颐莲活动比赛渲染"], ["p13-img03.jpg", "海马爸比卖点可视化渲染"],
    ["p13-img11.jpg", "汽车打光渲染"]
  ]),
  imageProject(1380, "IP类渲染/雕刻练习", "3d", "practice", page("p13-img05.jpg"), [page("p13-img04.jpg"), page("p13-img05.jpg"), page("p13-img06.jpg"), page("p13-img07.jpg"), page("p13-img09.jpg"), page("p13-img08.jpg")], ["三维静态", "练习", "2022-2024"], ""),
  imageProject(140, "梓晨包装渲染", "3d", "practice", page("p14-img01.jpg"), [page("p14-img01.jpg")], ["三维静态", "梓晨", "2021"], ""),

  {
    ...imageProject(15, "儿童手拍鼓详情页", "2d", "detail", cover("detail-page-15.jpg"), [page("p15-img01.jpg"), page("p15-img02.jpg"), page("p15-img03.jpg")], ["详情页", "儿童产品", "玩具"], "儿童手拍鼓产品详情页。围绕趣味互动、亲子陪伴、材质安全和产品结构展开，以活泼插画色彩和模块化卖点组织完整购买路径。"),
    galleryLayout: "detailColumns"
  },
  {
    ...imageProject(16, "紫外线消毒包详情页", "2d", "detail", cover("detail-page-16.jpg"), [page("p16-img01.jpg"), page("p16-img02.jpg"), page("p16-img03.jpg")], ["详情页", "消毒包", "母婴个护"], "紫外线消毒包详情页。重点提取消毒杀菌、便携收纳、适用多场景和安心护理等卖点，用蓝白科技感视觉强化专业度。"),
    galleryLayout: "detailColumns"
  },
  {
    ...imageProject(17, "儿童自行车详情页", "2d", "detail", cover("detail-page-17.jpg"), [page("p17-img01.jpg"), page("p17-img02.jpg"), page("p17-img03.jpg"), page("p17-img04.jpg")], ["详情页", "儿童自行车", "电商页面"], "儿童自行车详情页。围绕骑行安全、车身结构、轻便操控和儿童成长场景展开，页面节奏从氛围首屏过渡到结构、细节和参数说明。"),
    galleryLayout: "detailColumns"
  },
  {
    ...imageProject(18, "免洗洗手液详情页", "2d", "detail", cover("detail-page-18.jpg"), [page("p18-img01.jpg"), page("p18-img02.jpg"), page("p18-img03.jpg")], ["详情页", "免洗洗手液", "清洁护理"], "免洗洗手液详情页。提炼便携清洁、温和护理、随时使用和家庭场景等卖点，以清爽色调和留白强化干净、安心的产品感受。"),
    galleryLayout: "detailColumns"
  },
  {
    ...imageProject(19, "绿鼻子儿童口罩详情页", "2d", "detail", cover("detail-page-19.jpg"), [page("p19-img01.jpg"), page("p19-img02.jpg"), page("p19-img03.jpg")], ["详情页", "儿童口罩", "防护用品"], "绿鼻子儿童口罩详情页。围绕儿童防护、亲肤舒适、透气结构和多场景佩戴展开，采用清新绿色系统强化安全与健康感。"),
    galleryLayout: "detailColumns"
  },

  {
    ...imageProject(20, "红豆居家主图系列", "2d", "mainVisual", page("p20-img01.jpg"), [
      page("p20-img01.jpg"), page("p20-img02.jpg"), page("p20-img03.jpg"), page("p20-img04.jpg"),
      page("p20-img05.jpg"), page("p20-img06.jpg"), page("p20-img07.jpg"), page("p20-img08.jpg"),
      page("p20-img09.jpg"), page("p20-img10.jpg"), page("p20-img11.jpg"), page("p20-img12.jpg"),
      page("p20-img13.jpg"), page("p20-img14.jpg")
    ], ["主图", "服饰个护", "电商视觉"], "第 20 页主图系列。方图适合平台主图和社媒投放，两列展示能更快比较不同构图、产品卖点和模特场景。"),
    galleryLayout: "grid"
  },
  Object.assign(
    imageProject(21, "甘源天猫双十一活动首页规范模板", "2d", "visualSystem", page("p21-img01.jpg"), [page("p21-img01.jpg")], ["首页活动规范", "甘源", "双十一"], "电商首页活动规范项目，展示色彩、标题、元素和页面模块的统一规则。"),
    { copyrightOwner: "甘源", displayCategory: "电商首页活动规范" }
  ),
  imageProject(22, "甘源双十二电商首页视觉规范模板", "2d", "visualSystem", page("p22-img01.jpg"), [page("p22-img01.jpg")], ["首页视觉", "规范", "元素"], "第二套电商首页视觉规范，关注活动页面的信息层级、物料延展和统一视觉系统。"),
  {
    ...imageProject(2301, "AI 节气海报", "2d", "aiPoster", page("p23-img06.jpg"), [page("p23-img06.jpg"), page("p23-img07.jpg")], ["AI", "节气海报", "平面"], "第 23 页中的两张 AI 节气海报，单独与渲染作品分开展示。"),
    galleryLayout: "grid"
  },
  imageProject(2302, "详情页KV", "2d", "composite", page("p23-img15.jpg"), [
    page("p23-img04.jpg"), page("p23-img15.jpg"), page("p23-img10.jpg")
  ], ["其他", "甘源", "2024"], ""),
  imageProject(2426, "过年拜年海报", "2d", "composite", page("p24-img01.jpg"), [
    page("p24-img01.jpg"), page("p24-img02.jpg"), page("p24-img03.jpg"),
  ], ["其他", "甘源", "2024"], ""),
  imageProject(2500, "果果嘿巧主图", "2d", "mainVisual", page("p25-img02.jpg"), [
    page("p25-img01.jpg"), page("p25-img02.jpg"), page("p25-img03.jpg")
  ], ["电商主图", "甘源", "2024"], ""),
  imageProject(2600, "代言人活动手幅物料", "2d", "composite", page("p26-img01.jpg"), [
    page("p26-img01.jpg"), page("p26-img02.jpg")
  ], ["其他", "甘源", "2024"], ""),

  videoProject(3001, "绿鼻子口罩三维动画", "3d", "animation", page("p09-img01.jpg"), video("mask-animation.mp4"), ["动画", "口罩", "产品展示"], "口罩产品三维动画，用动态方式展示产品外观、结构和轻量化视觉氛围。"),
  videoProject(3002, "美朵嘉蚊帐旋转动画", "3d", "animation", "", video("mosquito-net-animation.mp4"), ["三维动态", "蚊帐", "旋转展示"], "")
];

projects.push(
  pptProject(
    6001,
    "他家品牌视觉策略",
    "assets/ppt-slides/tajia-brand-strategy",
    35,
    ["PPT", "品牌视觉策略", "视觉系统"],
    "他家品牌视觉策略围绕品牌定位、视觉气质与落地表达展开，展示从策略到设计系统的梳理过程。"
  ),
  pptProject(
    6002,
    "梓晨官旗品牌手册",
    "assets/ppt-slides/zichen-brand-manual",
    20,
    ["PPT", "品牌手册", "电商视觉"],
    "梓晨官旗品牌手册整理品牌基础视觉、页面规范与电商场景应用，帮助品牌视觉保持一致。"
  ),
  pptProject(
    6003,
    "梓晨主图规范",
    "assets/ppt-slides/zichen-main-image-guide",
    8,
    ["PPT", "主图规范", "电商视觉"],
    "梓晨主图规范聚焦电商主图的构图、信息层级与情绪表达，服务于平台转化与品牌统一。"
  )
);

projects.push(...(window.extraPortfolioProjects || []));

const featuredProjectIds = [19, 17, 15, 16, 3, 9, 1303, 1280, 1281, 11, 10];
const homeProjectMap = {
  "home-graphic": [19, 17, 15, 16],
  "home-static": [3, 9, 1303, 1280, 1281, 11, 10],
  "home-motion": [3001, 3002]
};
const wideProjectIds = new Set([10, 2500, 2302, 2426]);

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
  "2d": "平面",
  "3d": "三维",
  detailRender: "三维静态",
  product3d: "三维静态",
  animation: "三维动态",
  practice: "三维静态",
  detail: "详情页",
  mainVisual: "电商主图",
  visualSystem: "首页视觉",
  aiPoster: "其他",
  composite: "其他",
  ppt: "PPT 展示",
  icon: "电商 icon",
  other: "其他"
};

const subFilterMap = {
  "home-graphic": [],
  "home-static": [],
  "home-motion": [],
  "work-detail": [],
  "work-static-render": [],
  "work-motion-render": [],
  "work-home": [],
  "work-main": [],
  "work-ppt": [],
  "work-other": [],
  featured: [],
  "2d": [
    { label: "详情页", value: "detail" },
    { label: "主图", value: "mainVisual" },
    { label: "首页视觉", value: "visualSystem" },
    { label: "其他", value: "composite" }
  ],
  "3d": [
    { label: "三维静态", value: "product3d" },
    { label: "三维动态", value: "animation" }
  ]
};

const worksCategoryMeta = {
  "work-detail": {
    empty: "详情页分类会放完整电商详情页项目。"
  },
  "work-home": {
    empty: "首页视觉分类会放电商首页、页面视觉规范和首页模块类项目。"
  },
  "work-main": {
    empty: "电商主图分类会放平台主图、产品主视觉和一屏成交图。"
  },
  "work-static-render": {
    empty: "三维静态会放产品渲染、卖点表达、KV 氛围和练习作品。"
  },
  "work-motion-render": {
    empty: "三维动态分类会放产品动画、旋转展示和三维运动镜头。"
  },
  "work-ppt": {
    empty: "PPT 展示包含品牌策略、品牌手册和主图规范等演示稿项目。"
  },
  "work-other": {
    empty: "其他分类会收纳暂时不适合放入前面分类的项目。"
  }
};

const pageMode = document.body.dataset.page || "works";
const state = {
  main: pageMode === "home" ? "home-graphic" : "work-detail",
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
const modalNavButtons = [...document.querySelectorAll("[data-modal-nav]")];
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");
let activeModalProjectId = null;

function imageProject(id, title, mainCategory, subCategory, coverImage, detailImages, tags, description) {
  return { id, type: "image", title, mainCategory, subCategory, coverImage, detailImages, tags, description };
}

function videoProject(id, title, mainCategory, subCategory, coverImage, videoSrc, tags, description) {
  return { id, type: "video", title, mainCategory, subCategory, coverImage, videoSrc, detailImages: [], tags, description };
}

function pptProject(id, title, folder, slideCount, tags, description) {
  const slides = Array.from({ length: slideCount }, (_, index) => {
    return `${folder}/${String(index + 1).padStart(2, "0")}.jpg`;
  });

  return {
    id,
    type: "image",
    title,
    mainCategory: "2d",
    subCategory: "ppt",
    coverImage: slides[0],
    detailImages: slides,
    tags,
    description,
    galleryLayout: "slides"
  };
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
      ""
    );
  });
}

function createProjectCard(projectItem) {
  const card = document.createElement("article");
  card.className = `project-card ${projectItem.type === "video" ? "video-card" : ""}`;
  if (projectItem.cardSize === "wide") card.classList.add("wide-card");
  card.tabIndex = 0;
  card.dataset.projectId = projectItem.id;

  const cardImage = getThumbnailPath(projectItem.coverImage);
  const media = projectItem.type === "video"
    ? `<video class="card-video" src="${projectItem.videoSrc}" autoplay muted loop playsinline preload="metadata"></video>`
    : `<img class="card-image" src="${cardImage}" data-full="${projectItem.coverImage}" alt="${projectItem.title}" loading="lazy" decoding="async" onload="this.classList.add('is-loaded')" onerror="this.onerror=null;this.src=this.dataset.full;">`;

  card.innerHTML = `
    ${media}
    ${projectItem.type === "video" ? '<span class="play-badge">Play</span>' : ""}
    <div class="project-overlay">
      <p>${categoryLabels[projectItem.mainCategory]} / ${categoryLabels[projectItem.subCategory]}</p>
      <h3>${projectItem.title}</h3>
    </div>
  `;

  card.addEventListener("click", () => openModal(projectItem));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openModal(projectItem);
  });

  return card;
}

function getThumbnailPath(imagePath) {
  if (!imagePath || !imagePath.startsWith("assets/")) return imagePath;
  return imagePath
    .replace(/^assets\//, "assets/thumbs/")
    .replace(/\.(jpe?g|png|webp)$/i, ".webp");
}

function getFilteredProjects() {
  if (pageMode === "home" && homeProjectMap[state.main]) {
    return homeProjectMap[state.main]
      .map((id) => projects.find((item) => item.id === id))
      .filter(Boolean);
  }

  if (pageMode === "works") {
    return getWorksCategoryProjects(state.main);
  }

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

function getWorksCategoryProjects(category) {
  const isPageProject = (projectItem) => projectItem.type !== "video";
  const knownProject = (projectItem) => {
    return [
      "detail",
      "visualSystem",
      "mainVisual",
      "detailRender",
      "product3d",
      "practice",
      "composite",
      "animation"
    ].includes(projectItem.subCategory);
  };

  if (category === "work-detail") {
    return projects.filter((projectItem) => projectItem.subCategory === "detail");
  }

  if (category === "work-home") {
    return projects.filter((projectItem) => projectItem.subCategory === "visualSystem");
  }

  if (category === "work-main") {
    return projects.filter((projectItem) => projectItem.subCategory === "mainVisual");
  }

  if (category === "work-static-render") {
    return projects.filter((projectItem) => {
      if (!isPageProject(projectItem)) return false;
      return projectItem.mainCategory === "3d" && ["detailRender", "product3d", "practice"].includes(projectItem.subCategory);
    });
  }

  if (category === "work-motion-render") {
    return projects.filter((projectItem) => projectItem.subCategory === "animation");
  }

  if (category === "work-ppt") {
    return projects.filter((projectItem) => projectItem.subCategory === "ppt");
  }

  if (category === "work-other") {
    return projects.filter((projectItem) => {
      return ["aiPoster", "composite"].includes(projectItem.subCategory) || !knownProject(projectItem);
    });
  }

  return [];
}

function renderWorks() {
  const currentCards = [...worksGrid.children];
  currentCards.forEach((card) => card.classList.add("is-hiding"));

  window.setTimeout(() => {
    worksGrid.innerHTML = "";
    const projectsToRender = getFilteredProjects();

    if (projectsToRender.length === 0) {
      worksGrid.innerHTML = `
        <div class="empty-state">
          ${worksCategoryMeta[state.main]?.empty || "这个分类暂时还没有明确作品。"}
        </div>
      `;
      return;
    }

    projectsToRender.forEach((projectItem) => {
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
  activeModalProjectId = projectItem.id;
  const modalCard = modal.querySelector(".modal-card");
  const isDetailPage = projectItem.subCategory === "detail";
  const isMediaOnly = !isDetailPage;
  modalCard.className = `modal-card project-modal ${isMediaOnly ? "media-modal" : "detail-modal"}`;
  modalImage.src = projectItem.coverImage;
  modalImage.alt = projectItem.title;
  modalCategory.textContent = `${categoryLabels[projectItem.mainCategory]} / ${categoryLabels[projectItem.subCategory]}`;
  modalTitle.textContent = projectItem.title;
  modalDescription.textContent = "";
  modalTags.innerHTML = projectItem.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalHistory.innerHTML = renderHistory(projectItem);
  modalGallery.className = `modal-gallery ${getGalleryClass(projectItem)}`;
  modalInfoAsBrief(projectItem);

  if (projectItem.type === "video") {
    modalGallery.innerHTML = `
      <video class="modal-video" src="${projectItem.videoSrc}" controls playsinline preload="metadata"></video>
    `;
  } else {
    modalGallery.innerHTML = projectItem.detailImages
      .map((image, index) => `<img src="${image}" alt="${projectItem.title} 详情图 ${index + 1}">`)
      .join("");
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-content").scrollTop = 0;
  updateModalNavState();
}

function getModalProjectList() {
  return getFilteredProjects().filter(Boolean);
}

function switchModalProject(direction) {
  const projectList = getModalProjectList();
  if (projectList.length < 2 || activeModalProjectId === null) return;

  const currentIndex = projectList.findIndex((projectItem) => projectItem.id === activeModalProjectId);
  if (currentIndex < 0) return;

  const nextIndex = (currentIndex + direction + projectList.length) % projectList.length;
  openModal(projectList[nextIndex]);
}

function updateModalNavState() {
  const hasMultipleProjects = getModalProjectList().length > 1;
  modalNavButtons.forEach((button) => {
    button.hidden = !hasMultipleProjects;
  });
}

function getGalleryClass(projectItem) {
  if (projectItem.galleryLayout === "grid") return "modal-gallery-grid";
  if (projectItem.galleryLayout === "detailColumns") return "modal-gallery-detail-columns";
  if (projectItem.galleryLayout === "slides" || projectItem.subCategory === "ppt") return "modal-gallery-slides";
  return "";
}

function modalInfoAsBrief(projectItem) {
  const copyrightOwner = projectItem.copyrightOwner || projectItem.client || projectItem.tags?.[1] || "品牌方";
  const year = projectItem.year || "2019";

  modalCategory.textContent = "三十二哩";
  modalTitle.textContent = projectItem.title;
  modalDescription.innerHTML = "";
  modalTags.innerHTML = `
    <span>Design：三三</span>
    <span>Year：${year}</span>
    <span>Copyright Owner：${copyrightOwner}</span>
    <span>作品仅做展示，版权归品牌方所有，不承担任何法律责任。</span>
  `;
}

function getCopyrightOwnerLabel(projectItem) {
  const copyrightOwnerMap = {
    21: "甘源",
    22: "甘源"
  };

  return projectItem.copyrightOwner || projectItem.client || copyrightOwnerMap[projectItem.id] || "品牌方";
}

function getServiceLabel(projectItem) {
  if (projectItem.subCategory === "detail") return projectItem.tags[1] || "电商详情页";
  if (projectItem.subCategory === "mainVisual") return "电商主图";
  if (projectItem.subCategory === "product3d" || projectItem.subCategory === "detailRender") return "产品渲染";
  if (projectItem.subCategory === "animation") return "三维动态";
  if (projectItem.subCategory === "composite") return "营销合成视觉";
  if (projectItem.subCategory === "aiPoster") return "其他";
  if (projectItem.subCategory === "ppt") return projectItem.tags[1] || "PPT 展示";
  return projectItem.tags[1] || "视觉设计项目";
}

function getEnglishDescription(projectItem) {
  const service = getEnglishServiceLabel(projectItem);
  const copyrightOwner = getEnglishCopyrightOwnerLabel(projectItem);

  if (projectItem.id === 21) {
    return "A Tmall Double 11 campaign homepage guideline template for Ganyuan, defining color, headline, module, and component rules for consistent campaign execution.";
  }

  if (projectItem.id === 22) {
    return "An e-commerce campaign homepage guideline for Ganyuan, organizing promotional modules, visual hierarchy, and reusable page components into one consistent system.";
  }

  return `A ${service} project for ${copyrightOwner}, focused on clear product presentation, structured visual rhythm, and practical commercial communication.`;
}

function getEnglishServiceLabel(projectItem) {
  if (projectItem.subCategory === "detail") return "e-commerce detail page";
  if (projectItem.subCategory === "mainVisual") return "e-commerce hero image";
  if (projectItem.subCategory === "visualSystem") return "e-commerce visual guideline";
  if (projectItem.subCategory === "product3d" || projectItem.subCategory === "detailRender") return "product rendering";
  if (projectItem.subCategory === "animation") return "motion rendering";
  if (projectItem.subCategory === "composite") return "composite campaign visual";
  if (projectItem.subCategory === "aiPoster") return "visual design";
  if (projectItem.subCategory === "ppt") return "presentation";
  return "visual design";
}

function getEnglishCopyrightOwnerLabel(projectItem) {
  const copyrightOwner = getCopyrightOwnerLabel(projectItem);
  const copyrightOwnerMap = {
    "甘源": "Ganyuan",
    "品牌方": "the copyright owner"
  };

  return copyrightOwnerMap[copyrightOwner] || "the copyright owner";
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
  activeModalProjectId = null;
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileMenuBtn.setAttribute("aria-expanded", "false");
}

function bindModalEvents() {
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  modalNavButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchModalProject(button.dataset.modalNav === "next" ? 1 : -1);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    if (!modal.classList.contains("open")) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      switchModalProject(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      switchModalProject(1);
    }
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
