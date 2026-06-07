// 作品数据来自简历 PDF 中提取的图片素材。
// coverImage 用作卡片封面，detailImages 用作点击后的长详情展示。
const projects = [
  {
    id: 1,
    title: "零食礼盒包装渲染",
    mainCategory: "3d",
    subCategory: "packaging3d",
    coverImage: "assets/covers/project-01.jpg",
    detailImages: [
      "assets/extracted/p04-img01.jpg",
      "assets/extracted/p05-img01.jpg",
      "assets/extracted/p05-img02.jpg"
    ],
    tags: ["渲染", "包装渲染", "礼盒场景"],
    description: "以深色棚拍氛围突出礼盒质感，通过产品摆放、主次层级和暖色灯光建立节日礼赠场景，适合电商主图、活动 KV 与详情页头图使用。"
  },
  {
    id: 2,
    title: "智能设备与消费电子渲染",
    mainCategory: "3d",
    subCategory: "product3d",
    coverImage: "assets/covers/project-02.jpg",
    detailImages: [
      "assets/extracted/p09-img01.jpg",
      "assets/extracted/p10-img01.jpg",
      "assets/extracted/p11-img01.jpg"
    ],
    tags: ["渲染", "3C数码", "产品表现"],
    description: "覆盖可穿戴、VR 设备与金属零件等不同材质产品，通过干净背景、产品角度和高光控制强化科技感与精密感。"
  },
  {
    id: 3,
    title: "耳机产品详情页视觉",
    mainCategory: "3d",
    subCategory: "product3d",
    coverImage: "assets/covers/project-03.jpg",
    detailImages: [
      "assets/extracted/p12-img01.jpg",
      "assets/extracted/p12-img04.jpg",
      "assets/extracted/p12-img05.jpg",
      "assets/extracted/p12-img06.jpg",
      "assets/extracted/p12-img07.jpg",
      "assets/extracted/p12-img08.jpg",
      "assets/extracted/p12-img09.jpg",
      "assets/extracted/p12-img10.jpg",
      "assets/extracted/p12-img11.jpg",
      "assets/extracted/p12-img12.jpg",
      "assets/extracted/p12-img13.jpg",
      "assets/extracted/p12-img14.jpg"
    ],
    tags: ["渲染", "详情页", "3C数码"],
    description: "围绕耳机产品的功能卖点与使用场景展开，结合产品渲染、场景合成、卖点版式与详情页模块，形成完整的电商页面表达。"
  },
  {
    id: 4,
    title: "IP 角色与概念场景渲染",
    mainCategory: "3d",
    subCategory: "aigc",
    coverImage: "assets/covers/project-04.jpg",
    detailImages: [
      "assets/extracted/p13-img04.jpg",
      "assets/extracted/p13-img05.jpg",
      "assets/extracted/p13-img06.jpg",
      "assets/extracted/p13-img07.jpg",
      "assets/extracted/p13-img08.jpg",
      "assets/extracted/p13-img09.jpg",
      "assets/extracted/p13-img10.jpg",
      "assets/extracted/p13-img11.jpg"
    ],
    tags: ["渲染", "IP角色", "AIGC摄影"],
    description: "展示角色、产品与空间氛围的多种视觉实验，适合用于创意提案、品牌活动延展和内容营销视觉资产。"
  },
  {
    id: 5,
    title: "自行车产品长详情页",
    mainCategory: "2d",
    subCategory: "detail",
    coverImage: "assets/covers/project-05.jpg",
    detailImages: [
      "assets/extracted/p15-img01.jpg",
      "assets/extracted/p15-img02.jpg",
      "assets/extracted/p15-img03.jpg",
      "assets/extracted/p16-img01.jpg",
      "assets/extracted/p16-img02.jpg",
      "assets/extracted/p16-img03.jpg",
      "assets/extracted/p17-img01.jpg",
      "assets/extracted/p17-img02.jpg",
      "assets/extracted/p17-img03.jpg",
      "assets/extracted/p17-img04.jpg",
      "assets/extracted/p18-img01.jpg",
      "assets/extracted/p18-img02.jpg",
      "assets/extracted/p18-img03.jpg",
      "assets/extracted/p19-img01.jpg",
      "assets/extracted/p19-img02.jpg",
      "assets/extracted/p19-img03.jpg"
    ],
    tags: ["平面", "详情页", "电商视觉"],
    description: "一组完整电商长详情页项目，包含产品卖点、结构展示、场景氛围、参数模块与购买转化模块，重点体现长页面的信息组织能力。"
  },
  {
    id: 6,
    title: "红豆居家产品视觉",
    mainCategory: "2d",
    subCategory: "poster",
    coverImage: "assets/covers/project-06.jpg",
    detailImages: [
      "assets/extracted/p20-img01.jpg",
      "assets/extracted/p20-img02.jpg",
      "assets/extracted/p20-img03.jpg",
      "assets/extracted/p20-img04.jpg",
      "assets/extracted/p20-img05.jpg",
      "assets/extracted/p20-img06.jpg",
      "assets/extracted/p20-img07.jpg",
      "assets/extracted/p20-img08.jpg",
      "assets/extracted/p20-img09.jpg",
      "assets/extracted/p20-img10.jpg",
      "assets/extracted/p20-img11.jpg",
      "assets/extracted/p20-img12.jpg",
      "assets/extracted/p20-img13.jpg",
      "assets/extracted/p20-img14.jpg"
    ],
    tags: ["平面", "个护服饰", "社媒海报"],
    description: "围绕抗菌、舒适与基础款卖点设计系列方图素材，使用柔和配色、模特图与产品图形成统一的品牌视觉节奏。"
  },
  {
    id: 7,
    title: "礼盒节日营销 KV",
    mainCategory: "2d",
    subCategory: "poster",
    coverImage: "assets/covers/project-07.jpg",
    detailImages: [
      "assets/extracted/p23-img01.jpg",
      "assets/extracted/p23-img04.jpg",
      "assets/extracted/p23-img05.jpg",
      "assets/extracted/p23-img06.jpg",
      "assets/extracted/p23-img07.jpg",
      "assets/extracted/p23-img15.jpg",
      "assets/extracted/p24-img01.jpg",
      "assets/extracted/p24-img02.jpg",
      "assets/extracted/p24-img03.jpg",
      "assets/extracted/p25-img01.jpg",
      "assets/extracted/p25-img02.jpg",
      "assets/extracted/p25-img03.jpg",
      "assets/extracted/p26-img01.jpg",
      "assets/extracted/p26-img02.jpg"
    ],
    tags: ["平面", "节日KV", "食品礼盒"],
    description: "以高饱和红色和礼赠氛围为核心，延展活动主图、明星物料、门店打法、节气海报与横版 Banner，形成完整营销视觉包。"
  },
  {
    id: 8,
    title: "包装品牌视觉系统",
    mainCategory: "2d",
    subCategory: "packaging2d",
    coverImage: "assets/covers/project-08.jpg",
    detailImages: [
      "assets/extracted/p14-img01.jpg",
      "assets/extracted/p21-img01.jpg",
      "assets/extracted/p22-img01.jpg"
    ],
    tags: ["平面", "包装规范", "品牌物料"],
    description: "展示包装识别、促销信息层级与品牌物料延展，强调版式规范、色彩系统和多规格素材的一致性。"
  },
  {
    id: 9,
    title: "家电与生活方式视觉",
    mainCategory: "3d",
    subCategory: "product3d",
    coverImage: "assets/covers/project-09.jpg",
    detailImages: [
      "assets/extracted/p08-img01.jpg",
      "assets/extracted/p13-img02.jpg",
      "assets/extracted/p13-img03.jpg",
      "assets/extracted/p13-img10.jpg"
    ],
    tags: ["渲染", "生活方式", "场景合成"],
    description: "从抽象场景、产品棚拍到居家空间合成，展示不同风格下的渲染和后期整合能力。"
  },
  {
    id: 10,
    title: "封面与视觉总览",
    mainCategory: "3d",
    subCategory: "aigc",
    coverImage: "assets/covers/project-10.jpg",
    detailImages: [
      "assets/extracted/p01-img01.jpg",
      "assets/extracted/p28-img01.jpg"
    ],
    tags: ["渲染", "作品集封面", "视觉总览"],
    description: "作品集封面与结束页素材，概括了首页、详情页、海报 KV、3D 渲染、产品渲染、包装渲染与 AIGC 摄影等能力方向。"
  }
];

const categoryLabels = {
  "2d": "平面设计",
  "3d": "渲染 / 三维",
  detail: "详情页",
  poster: "海报 KV",
  packaging2d: "包装物料",
  product3d: "产品渲染",
  packaging3d: "包装渲染",
  aigc: "AIGC / 场景"
};

const subFilterMap = {
  all: [{ label: "全部", value: "all" }],
  "2d": [
    { label: "全部", value: "all" },
    { label: "详情页", value: "detail" },
    { label: "海报 KV", value: "poster" },
    { label: "包装物料", value: "packaging2d" }
  ],
  "3d": [
    { label: "全部", value: "all" },
    { label: "产品渲染", value: "product3d" },
    { label: "包装渲染", value: "packaging3d" },
    { label: "AIGC / 场景", value: "aigc" }
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

// 创建作品卡片：统一用于精选区与作品归档区。
function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.tabIndex = 0;
  card.dataset.projectId = project.id;

  card.innerHTML = `
    <img src="${project.coverImage}" alt="${project.title}" loading="lazy">
    <div class="project-overlay">
      <p>${categoryLabels[project.mainCategory]} / ${categoryLabels[project.subCategory]}</p>
      <h3>${project.title}</h3>
    </div>
  `;

  card.addEventListener("click", () => openModal(project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openModal(project);
  });

  return card;
}

// 渲染精选作品：优先展示平面详情页、包装渲染、3C渲染和节日KV。
function renderFeaturedWorks() {
  const featuredProjects = [projects[4], projects[0], projects[2], projects[6]];
  featuredGrid.innerHTML = "";
  featuredProjects.forEach((project) => featuredGrid.appendChild(createProjectCard(project)));
}

// 根据当前筛选状态计算需要展示的项目。
function getFilteredProjects() {
  return projects.filter((project) => {
    const matchesMain = state.main === "all" || project.mainCategory === state.main;
    const matchesSub = state.sub === "all" || project.subCategory === state.sub;
    return matchesMain && matchesSub;
  });
}

// 渲染作品列表，并用短暂淡出淡入模拟平滑筛选过渡。
function renderWorks() {
  const currentCards = [...worksGrid.children];
  currentCards.forEach((card) => card.classList.add("is-hiding"));

  window.setTimeout(() => {
    worksGrid.innerHTML = "";
    getFilteredProjects().forEach((project) => {
      const card = createProjectCard(project);
      card.classList.add("is-hiding");
      worksGrid.appendChild(card);
      requestAnimationFrame(() => card.classList.remove("is-hiding"));
    });
  }, 180);
}

// 渲染联动子类筛选项。
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

// 绑定大类筛选，并在切换大类时重置子类为“全部”。
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

// 导航中的“平面设计 / 三维设计”可以直接触发作品筛选。
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

function openModal(project) {
  modalImage.src = project.coverImage;
  modalImage.alt = project.title;
  modalCategory.textContent = `${categoryLabels[project.mainCategory]} / ${categoryLabels[project.subCategory]}`;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalGallery.innerHTML = project.detailImages
    .map((image, index) => `<img src="${image}" alt="${project.title} 详情图 ${index + 1}" loading="lazy">`)
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

// 初始化页面。
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
