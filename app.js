// 作品数据按 PDF 页码重新整理：
// 3-11 页单图展示；12-13 页拆为单帧渲染；15-19 页合成长详情页。
const page = (name) => `assets/extracted/${name}`;

const projects = [
  project(3, "Job Poster 场景视觉", "3d", "single3d", page("p03-img01.jpg"), [page("p03-img01.jpg")], ["渲染", "单页展示", "场景视觉"], "PDF 第 3 页作品，适合作为单张海报或场景主视觉展示。"),
  project(4, "礼盒暗场包装渲染", "3d", "single3d", page("p04-img01.jpg"), [page("p04-img01.jpg")], ["渲染", "包装", "暗场灯光"], "PDF 第 4 页作品，以暗场灯光突出礼盒层次和产品质感。"),
  project(5, "礼盒陈列包装渲染", "3d", "single3d", page("p05-img01.jpg"), [page("p05-img01.jpg"), page("p05-img02.jpg")], ["渲染", "包装", "陈列"], "PDF 第 5 页作品，展示礼盒组合陈列和不同画面版本。"),
  project(6, "服装产品单帧渲染", "3d", "single3d", page("p06-img01.jpg"), [page("p06-img01.jpg")], ["渲染", "服装", "单帧"], "PDF 第 6 页作品，突出服装产品结构和材质质感。"),
  project(7, "天空场景单帧渲染", "3d", "single3d", page("p07-img01.jpg"), [page("p07-img01.jpg")], ["渲染", "场景", "氛围"], "PDF 第 7 页作品，以轻盈自然的画面氛围作为单帧视觉。"),
  project(8, "抽象球体单帧渲染", "3d", "single3d", page("p08-img01.jpg"), [page("p08-img01.jpg")], ["渲染", "抽象", "材质"], "PDF 第 8 页作品，展示抽象材质、光影和空间控制。"),
  project(9, "口罩产品单帧渲染", "3d", "single3d", page("p09-img01.jpg"), [page("p09-img01.jpg")], ["渲染", "产品", "材质"], "PDF 第 9 页作品，展示产品阵列、色彩和柔和材质表现。"),
  project(10, "VR 产品单帧渲染", "3d", "single3d", page("p10-img01.jpg"), [page("p10-img01.jpg")], ["渲染", "3C数码", "产品"], "PDF 第 10 页作品，以干净背景突出 VR 产品主体。"),
  project(11, "精密零件产品渲染", "3d", "single3d", page("p11-img01.jpg"), [page("p11-img01.jpg")], ["渲染", "产品", "金属材质"], "PDF 第 11 页作品，展示精密零件的材质和结构。"),

  ...singleFrameProjects(12, [
    ["p12-img01.jpg", "耳机详情首屏渲染", "product3d"],
    ["p12-img02.jpg", "6DOF 功能图形", "product3d"],
    ["p12-img03.jpg", "产品包装单帧", "product3d"],
    ["p12-img04.jpg", "手柄卖点海报", "product3d"],
    ["p12-img05.jpg", "耳机产品卖点图", "product3d"],
    ["p12-img06.jpg", "功能说明版式", "product3d"],
    ["p12-img07.jpg", "耳机氛围海报", "product3d"],
    ["p12-img08.jpg", "居家产品场景图", "product3d"],
    ["p12-img09.jpg", "产品场景渲染", "product3d"],
    ["p12-img10.jpg", "游戏化场景海报", "product3d"],
    ["p12-img11.jpg", "冰雪氛围海报", "product3d"],
    ["p12-img12.jpg", "产品角色图", "product3d"],
    ["p12-img13.jpg", "滑板场景渲染", "product3d"],
    ["p12-img14.jpg", "童车空间渲染", "product3d"]
  ]),
  ...singleFrameProjects(13, [
    ["p13-img01.jpg", "户外产品氛围图", "product3d"],
    ["p13-img02.jpg", "个护产品场景渲染", "product3d"],
    ["p13-img03.jpg", "智能设备场景渲染", "product3d"],
    ["p13-img04.jpg", "IP 角色单帧 01", "single3d"],
    ["p13-img05.jpg", "IP 角色单帧 02", "single3d"],
    ["p13-img06.jpg", "IP 角色单帧 03", "single3d"],
    ["p13-img07.jpg", "IP 角色单帧 04", "single3d"],
    ["p13-img08.jpg", "卡带产品单帧", "product3d"],
    ["p13-img09.jpg", "角色场景单帧", "single3d"],
    ["p13-img10.jpg", "居家空间渲染", "product3d"],
    ["p13-img11.jpg", "汽车产品单帧", "product3d"]
  ]),
  project(140, "第 14 页渲染合集", "3d", "renderSet", page("p14-img01.jpg"), [page("p14-img01.jpg")], ["渲染", "合集", "包装视觉"], "PDF 第 14 页为渲染合集，保留整页作为作品展示。"),

  {
    ...project(1519, "电商长详情页 15-19", "2d", "detail", "assets/covers/detail-15-19.jpg", ["assets/combined/ecommerce-detail-15-19.jpg"], ["平面", "详情页", "电商页面"], "PDF 第 15-19 页按从左至右、从上到下顺序拼接为完整长详情页，封面取自详情页第一屏。"),
    galleryLayout: "single"
  },
  {
    ...project(20, "红豆居家主图系列", "2d", "mainVisual", page("p20-img01.jpg"), [
      page("p20-img01.jpg"), page("p20-img02.jpg"), page("p20-img03.jpg"), page("p20-img04.jpg"),
      page("p20-img05.jpg"), page("p20-img06.jpg"), page("p20-img07.jpg"), page("p20-img08.jpg"),
      page("p20-img09.jpg"), page("p20-img10.jpg"), page("p20-img11.jpg"), page("p20-img12.jpg"),
      page("p20-img13.jpg"), page("p20-img14.jpg")
    ], ["平面", "主图", "电商视觉"], "PDF 第 20 页主图系列，采用两列宫格展示，更适合快速浏览多张方图。"),
    galleryLayout: "grid"
  },
  project(21, "电商首页视觉规范 01", "2d", "visualSystem", page("p21-img01.jpg"), [page("p21-img01.jpg")], ["平面", "首页视觉", "规范"], "PDF 第 21 页，展示电商首页视觉规范、信息层级和元素延展。"),
  project(22, "电商首页视觉规范 02", "2d", "visualSystem", page("p22-img01.jpg"), [page("p22-img01.jpg")], ["平面", "首页视觉", "规范"], "PDF 第 22 页，展示另一套电商首页视觉规范与模块系统。"),
  {
    ...project(2301, "AI 节气海报", "2d", "aiPoster", page("p23-img06.jpg"), [page("p23-img06.jpg"), page("p23-img07.jpg")], ["AI", "节气海报", "平面"], "PDF 第 23 页中的 2 张 AI 节气海报，单独归类展示。"),
    galleryLayout: "grid"
  },
  project(2302, "第 23 页礼盒渲染组", "3d", "renderSet", page("p23-img15.jpg"), [
    page("p23-img04.jpg"), page("p23-img10.jpg"), page("p23-img11.jpg"),
    page("p23-img12.jpg"), page("p23-img13.jpg"), page("p23-img15.jpg")
  ], ["渲染", "礼盒", "节日营销"], "PDF 第 23 页中除 AI 节气海报外的 6 张渲染图，按渲染作品单独归类。"),
  project(2426, "新年海报与代言人主图", "2d", "composite", page("p25-img02.jpg"), [
    page("p24-img01.jpg"), page("p24-img02.jpg"), page("p24-img03.jpg"),
    page("p25-img01.jpg"), page("p25-img02.jpg"), page("p25-img03.jpg"),
    page("p26-img01.jpg"), page("p26-img02.jpg")
  ], ["合成", "过年海报", "代言人主图"], "PDF 第 24 页过年海报、25 页代言人主图和 26 页手幅合并为一个完整营销视觉项目。")
];

const categoryLabels = {
  "2d": "平面设计",
  "3d": "渲染作品",
  single3d: "单图渲染",
  product3d: "产品渲染",
  renderSet: "渲染合集",
  detail: "详情页",
  mainVisual: "主图",
  visualSystem: "视觉规范",
  aiPoster: "AI 海报",
  composite: "合成海报"
};

const subFilterMap = {
  all: [{ label: "全部", value: "all" }],
  "2d": [
    { label: "全部", value: "all" },
    { label: "详情页", value: "detail" },
    { label: "主图", value: "mainVisual" },
    { label: "视觉规范", value: "visualSystem" },
    { label: "AI 海报", value: "aiPoster" },
    { label: "合成海报", value: "composite" }
  ],
  "3d": [
    { label: "全部", value: "all" },
    { label: "单图渲染", value: "single3d" },
    { label: "产品渲染", value: "product3d" },
    { label: "渲染合集", value: "renderSet" }
  ]
};

const state = {
  main: "all",
  sub: "all"
};

const featuredGrid = document.querySelector("#featuredGrid");
const worksGrid = document.querySelector("#worksGrid");
const subFilters = document.querySelector("#subFilters");
const modal = document.querySelector("#projectModal");
const modalImage = document.querySelector("#modalImage");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTags = document.querySelector("#modalTags");
const modalGallery = document.querySelector("#modalGallery");
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

function project(id, title, mainCategory, subCategory, coverImage, detailImages, tags, description) {
  return { id, title, mainCategory, subCategory, coverImage, detailImages, tags, description };
}

function singleFrameProjects(pageNumber, items) {
  return items.map(([file, title, subCategory], index) => {
    const image = page(file);
    return project(
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
  card.className = "project-card";
  card.tabIndex = 0;
  card.dataset.projectId = projectItem.id;

  card.innerHTML = `
    <img src="${projectItem.coverImage}" alt="${projectItem.title}" loading="lazy">
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

function renderFeaturedWorks() {
  const featuredIds = [1519, 20, 2302, 2426];
  const featuredProjects = featuredIds.map((id) => projects.find((item) => item.id === id)).filter(Boolean);
  featuredGrid.innerHTML = "";
  featuredProjects.forEach((projectItem) => featuredGrid.appendChild(createProjectCard(projectItem)));
}

function getFilteredProjects() {
  return projects.filter((projectItem) => {
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
      state.sub = "all";

      document.querySelectorAll("[data-main-filter]").forEach((item) => {
        item.classList.toggle("active", item.dataset.mainFilter === state.main);
      });

      renderSubFilters();
      renderWorks();
    });
  });
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
  modalImage.src = projectItem.coverImage;
  modalImage.alt = projectItem.title;
  modalCategory.textContent = `${categoryLabels[projectItem.mainCategory]} / ${categoryLabels[projectItem.subCategory]}`;
  modalTitle.textContent = projectItem.title;
  modalDescription.textContent = projectItem.description;
  modalTags.innerHTML = projectItem.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalGallery.className = `modal-gallery ${projectItem.galleryLayout === "grid" ? "modal-gallery-grid" : ""}`;
  modalGallery.innerHTML = projectItem.detailImages
    .map((image, index) => `<img src="${image}" alt="${projectItem.title} 详情图 ${index + 1}" loading="lazy">`)
    .join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-content").scrollTop = 0;
}

function closeModal() {
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
  renderFeaturedWorks();
  renderSubFilters();
  renderWorks();
  bindMainFilters();
  bindNavFilters();
  bindModalEvents();
  bindMobileMenu();
}

initPortfolio();
