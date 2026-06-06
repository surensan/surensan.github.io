// 作品数据：实际项目中只需要替换标题、图片、说明与标签即可
const projects = [
  {
    id: 1,
    title: "Nurture Baby Care Identity",
    mainCategory: "2d",
    subCategory: "mom",
    coverImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80",
    tags: ["母婴类", "包装设计", "品牌识别"],
    description: "围绕温和、安心、专业的品牌关键词建立母婴护理视觉系统，使用柔和色阶、圆角图形与低对比排版，让产品在货架与电商场景中保持高识别度。"
  },
  {
    id: 2,
    title: "Home Ritual Packaging System",
    mainCategory: "2d",
    subCategory: "home",
    coverImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    tags: ["居家类", "包装系统", "版式设计"],
    description: "为居家香氛与清洁用品建立统一包装语言，通过克制的字体层级、材质留白与生活方式图像，强化产品的高级感与日常使用场景。"
  },
  {
    id: 3,
    title: "Smart Audio Product Render",
    mainCategory: "3d",
    subCategory: "3c",
    coverImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80",
    tags: ["3C数码", "产品渲染", "材质灯光"],
    description: "针对智能音频产品制作三维主视觉，包含硬表面建模、磨砂材质、边缘高光控制与暗场灯光，用于新品首发海报和详情页头图。"
  },
  {
    id: 4,
    title: "Beauty Serum 3D Campaign",
    mainCategory: "3d",
    subCategory: "beauty",
    coverImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
    tags: ["美妆个护", "三维场景", "KV"],
    description: "为精华产品搭建三维视觉场景，结合玻璃材质、液体折射与柔性布光，输出主视觉、通道图、白模图与多比例电商素材。"
  },
  {
    id: 5,
    title: "Minimal Furniture Visual Direction",
    mainCategory: "2d",
    subCategory: "home",
    coverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    tags: ["居家类", "画册", "视觉规范"],
    description: "面向现代家具品牌建立画册与社媒视觉规范，以网格系统控制图片比例、文字节奏与留白关系，形成安静、耐看的品牌表达。"
  },
  {
    id: 6,
    title: "Personal Care Bottle Study",
    mainCategory: "3d",
    subCategory: "beauty",
    coverImage: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["美妆个护", "白模展示", "材质研究"],
    description: "围绕个护瓶型进行建模与材质实验，输出白模、AO、反射通道与最终合成图，帮助团队快速验证瓶身比例与视觉触感。"
  },
  {
    id: 7,
    title: "Infant Nutrition Poster Series",
    mainCategory: "2d",
    subCategory: "mom",
    coverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    tags: ["母婴类", "海报设计", "电商视觉"],
    description: "为婴幼儿营养品设计一组电商传播海报，使用明亮但不过度甜腻的色彩与清晰卖点层级，兼顾品牌温度和转化效率。"
  },
  {
    id: 8,
    title: "Wearable Device Launch Visual",
    mainCategory: "3d",
    subCategory: "3c",
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    tags: ["3C数码", "新品视觉", "场景搭建"],
    description: "为穿戴设备制作发布会与线上首发视觉，强调产品轮廓、屏幕高光与金属材质，以极简空间突出科技感和精密感。"
  },
  {
    id: 9,
    title: "Experimental Object Forms",
    mainCategory: "3d",
    subCategory: "others",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["其他", "概念视觉", "形体实验"],
    description: "一组用于视觉提案的抽象物体实验，探索半透明材质、弧面结构和空间秩序，可延展为品牌活动主视觉或数字艺术资产。"
  }
];

const categoryLabels = {
  "2d": "平面设计",
  "3d": "三维设计",
  mom: "母婴类",
  home: "居家类",
  "3c": "3C数码",
  beauty: "美妆个护",
  others: "其他"
};

const subFilterMap = {
  all: [{ label: "全部", value: "all" }],
  "2d": [
    { label: "全部", value: "all" },
    { label: "母婴类", value: "mom" },
    { label: "居家类", value: "home" }
  ],
  "3d": [
    { label: "全部", value: "all" },
    { label: "3C数码", value: "3c" },
    { label: "美妆个护", value: "beauty" },
    { label: "其他", value: "others" }
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
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

// 创建作品卡片：统一用于精选区与作品归档区
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

// 渲染精选作品：默认取前四个，混合平面与三维作品
function renderFeaturedWorks() {
  const featuredProjects = projects.slice(0, 4);
  featuredGrid.innerHTML = "";
  featuredProjects.forEach((project) => featuredGrid.appendChild(createProjectCard(project)));
}

// 根据当前筛选状态计算需要展示的项目
function getFilteredProjects() {
  return projects.filter((project) => {
    const matchesMain = state.main === "all" || project.mainCategory === state.main;
    const matchesSub = state.sub === "all" || project.subCategory === state.sub;
    return matchesMain && matchesSub;
  });
}

// 渲染作品列表，并用短暂淡出淡入模拟平滑筛选过渡
function renderWorks() {
  worksGrid.classList.add("is-transitioning");
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
    worksGrid.classList.remove("is-transitioning");
  }, 180);
}

// 渲染联动子类筛选项
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

// 绑定大类筛选，并在切换大类时重置子类为“全部”
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

// 导航中的“平面设计 / 三维设计”可以直接触发作品筛选
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

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
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

// 初始化页面
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
