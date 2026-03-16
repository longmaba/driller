(() => {
  "use strict";

  const LEVELS = [
    // Per pooled drill, set hiddenUntilTopRow: true to mask color until it rises to row 0.
    {
      id: "sample-1",
      rows: 10,
      cols: 6,
      // String tile means hp=1. Object tile supports durability: { color: "orange", hp: 3 }
      grid: [
        ["orange", "orange", "green", "green", "orange", "orange"],
        ["orange", "orange", "green", "green", "orange", "orange"],
        ["orange", "orange", "green", "green", "orange", "orange"],
        ["orange", "orange", "green", "green", "orange", "orange"],
        ["orange", "orange", "green", "green", "orange", "orange"],
        ["yellow", "yellow", "green", "green", "yellow", "yellow"],
        ["yellow", "yellow", "green", "green", "yellow", "yellow"],
        ["yellow", "yellow", "green", "green", "yellow", "yellow"],
        ["yellow", "yellow", "green", "green", "yellow", "yellow"],
        ["yellow", "yellow", "green", "green", "yellow", "yellow"],
      ],
      poolRows: 2,
      poolColumns: [
        [
          { color: "yellow", energy: 10 },
          { color: "green", energy: 10 },
        ],
        [{ color: "green", energy: 10 }],
        [
          { color: "orange", energy: 10 },
          { color: "orange", energy: 10 },
        ],
        [{ color: "yellow", energy: 10 }],
      ],
    },
    {
      id: "sample-2",
      rows: 10,
      cols: 6,
      // Example durable tile: { color: "purple", hp: 3 }
      grid: [
        ["orange", "orange", "orange", "orange", "orange", "orange"],
        ["orange", "yellow", "yellow", "yellow", "yellow", "yellow"],
        ["orange", "yellow", "green", "green", "green", "green"],
        ["orange", "yellow", "green", "orange", "orange", "orange"],
        ["orange", "yellow", "green", "orange", "orange", "orange"],
        ["orange", "yellow", "green", "purple", "purple", "purple"],
        ["orange", "yellow", "green", "purple", "green", "green"],
        ["orange", { color: "yellow", hp: 10 }, "green", "purple", "green", "green"],
        ["orange", "yellow", "green", { color: "purple", hp: 10 }, "yellow", "yellow"],
        ["orange", "yellow", "green", "green", "yellow", "yellow"],
      ],
      poolRows: 2,
      poolColumns: [
        [
          { color: "yellow", energy: 12 },
          { color: "green", energy: 6 },
        ],
        [
          { color: "green", energy: 10 },
          { color: "yellow", energy: 10 },
        ],
        [
          { color: "orange", energy: 21 },
          { color: "purple", energy: 5 },
        ],
        [
          { color: "purple", energy: 10 },
          { color: "yellow", energy: 4 },
        ],
      ],
    },
    {
      id: "sample-3",
      rows: 10,
      cols: 6,
      // Example durable tile: { color: "purple", hp: 3 }
      grid: [
        ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
        ["green", "green", "green", "green", "green", "green"],
        ["green", "orange", "orange", "orange", "orange", "green"],
        ["green", "orange", "purple", "purple", "orange", "green"],
        ["green", "orange", { color: "purple", hp: 5 }, "purple", "orange", "green"],
        ["green", "orange", "purple", "blue", "orange", { color: "green", hp: 10 }],
        ["green", "orange", "purple", "purple", "orange", "green"],
        ["green", "orange", "orange", "orange", "orange", "green"],
        ["yellow", "yellow", { color: "yellow", hp: 10 }, "yellow", "yellow", "yellow"],
        ["blue", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ],
      poolRows: 2,
      poolColumns: [
        [
          { color: "yellow", energy: 4 },
          { color: "green", energy: 6 },
          { color: "yellow", energy: 4 },
        ],
        [
          { color: "blue", energy: 2 },
          { color: "green", energy: 7 },
          { color: "yellow", energy: 4 },
          { color: "green", energy: 3 },
        ],
        [
          { color: "orange", energy: 7 },
          { color: "green", energy: 11 },
          { color: "yellow", energy: 2 },
        ],
        [
          { color: "purple", energy: 8 },
          { color: "orange", energy: 9 },
          { color: "purple", energy: 4 },
          { color: "yellow", energy: 13 },
        ],
      ],
    },
    {
      id: "sample-4",
      rows: 10,
      cols: 6,
      grid: [
        ["yellow", "yellow", "orange", "orange", "yellow", "yellow"],
        ["yellow", "green", "orange", "orange", "green", "yellow"],
        ["yellow", "green", "purple", "purple", "green", "yellow"],
        ["orange", "green", "purple", "purple", "green", "orange"],
        ["orange", "green", { color: "purple", hp: 5 }, { color: "purple", hp: 5 }, "green", "orange"],
        ["orange", "green", "purple", "purple", "green", "orange"],
        ["yellow", "green", "orange", "orange", "green", "yellow"],
        ["yellow", "yellow", "orange", "orange", "yellow", "yellow"],
        ["yellow", { color: "yellow", hp: 8 }, "green", "green", { color: "yellow", hp: 8 }, "yellow"],
        ["orange", "orange", "green", "green", "orange", "orange"],
      ],
      poolRows: 3,
      poolColumns: [
        [
          { color: "yellow", energy: 6 },
          { color: "green", energy: 8 },
          { color: "yellow", energy: 6 },
        ],
        [
          { color: "green", energy: 2 },
          { color: "orange", energy: 8 },
          { color: "green", energy: 6 },
        ],
        [
          { color: "orange", energy: 6 },
          { color: "purple", energy: 10 },
          { color: "yellow", energy: 10 },
        ],
        [
          { color: "purple", energy: 6 },
          { color: "orange", energy: 4 },
          { color: "yellow", energy: 10 },
        ],
      ],
    },
    {
      id: "sample-5",
      rows: 10,
      cols: 6,
      grid: [
        ["green", "green", "green", "yellow", "yellow", "yellow"],
        ["green", "orange", "green", "yellow", "purple", "yellow"],
        ["green", "orange", "green", "yellow", "purple", "yellow"],
        ["green", "orange", "green", "yellow", "purple", "yellow"],
        ["green", "orange", { color: "orange", hp: 7 }, { color: "purple", hp: 6 }, "purple", "yellow"],
        ["green", "orange", "green", "yellow", "purple", "yellow"],
        ["green", "orange", "green", "yellow", "purple", "yellow"],
        ["green", "orange", "green", "yellow", "purple", "yellow"],
        ["orange", "orange", "orange", "purple", "purple", "purple"],
        ["orange", { color: "orange", hp: 9 }, "orange", "purple", { color: "purple", hp: 9 }, "purple"],
      ],
      poolRows: 3,
      poolColumns: [
        [
          { color: "green", energy: 3 },
          { color: "yellow", energy: 7 },
          { color: "green", energy: 6 },
        ],
        [
          { color: "yellow", energy: 3 },
          { color: "orange", energy: 11 },
          { color: "yellow", energy: 6 },
        ],
        [
          { color: "orange", energy: 9 },
          { color: "purple", energy: 10 },
          { color: "orange", energy: 8 },
        ],
        [
          { color: "purple", energy: 11 },
          { color: "green", energy: 7 },
          { color: "purple", energy: 6 },
        ],
      ],
    },
    {
      id: "sample-6",
      rows: 10,
      cols: 6,
      grid: [
        ["yellow", "yellow", "green", "green", "purple", "purple"],
        ["yellow", "orange", "green", "green", "purple", "purple"],
        ["yellow", "orange", "green", "orange", "orange", "purple"],
        ["yellow", "orange", "green", "orange", "orange", "purple"],
        ["yellow", "orange", { color: "green", hp: 6 }, { color: "orange", hp: 8 }, "orange", "purple"],
        ["yellow", "orange", "green", "orange", "orange", "purple"],
        ["yellow", "orange", "green", "orange", "orange", "purple"],
        ["yellow", "orange", "green", "green", "purple", "purple"],
        ["yellow", { color: "yellow", hp: 10 }, "green", "green", { color: "purple", hp: 10 }, "purple"],
        ["orange", "orange", "orange", "purple", "purple", "purple"],
      ],
      poolRows: 4,
      poolColumns: [
        [
          { color: "yellow", energy: 4 },
          { color: "green", energy: 2 },
          { color: "yellow", energy: 6 },
          { color: "orange", energy: 5 },
        ],
        [
          { color: "green", energy: 6 },
          { color: "orange", energy: 8 },
          { color: "green", energy: 6 },
          { color: "purple", energy: 4 },
        ],
        [
          { color: "orange", energy: 9 },
          { color: "purple", energy: 10 },
          { color: "orange", energy: 5 },
          { color: "yellow", energy: 5 },
        ],
        [
          { color: "purple", energy: 5 },
          { color: "yellow", energy: 5 },
          { color: "purple", energy: 6 },
          { color: "green", energy: 4 },
        ],
      ],
    },
    {
      id: "sample-7",
      rows: 10,
      cols: 6,
      grid: [
        ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
        ["yellow", "green", "green", "green", "green", "yellow"],
        ["yellow", "green", "orange", "orange", "green", "yellow"],
        ["yellow", "green", "orange", "purple", "green", "yellow"],
        ["yellow", "green", { color: "orange", hp: 9 }, { color: "purple", hp: 9 }, "green", "yellow"],
        ["yellow", "green", "orange", "purple", "green", "yellow"],
        ["yellow", "green", "orange", "orange", "green", "yellow"],
        ["yellow", "green", "green", "green", "green", "yellow"],
        ["yellow", { color: "yellow", hp: 12 }, "purple", "purple", { color: "yellow", hp: 12 }, "yellow"],
        ["orange", "orange", "purple", { color: "purple", hp: 14 }, "orange", "orange"],
      ],
      poolRows: 4,
      poolColumns: [
        [
          { color: "yellow", energy: 7 },
          { color: "green", energy: 5, hiddenUntilTopRow: true },
          { color: "yellow", energy: 14, hiddenUntilTopRow: true },
          { color: "orange", energy: 5, hiddenUntilTopRow: true },
        ],
        [
          { color: "green", energy: 3 },
          { color: "orange", energy: 5, hiddenUntilTopRow: true },
          { color: "green", energy: 7 },
          { color: "purple", energy: 4, hiddenUntilTopRow: true },
        ],
        [
          { color: "orange", energy: 5 },
          { color: "purple", energy: 12, hiddenUntilTopRow: true },
          { color: "orange", energy: 4 },
          { color: "yellow", energy: 15, hiddenUntilTopRow: true },
        ],
        [
          { color: "purple", energy: 4 },
          { color: "yellow", energy: 10, hiddenUntilTopRow: true },
          { color: "purple", energy: 8 },
          { color: "green", energy: 3, hiddenUntilTopRow: true },
        ],
      ],
    },
  ];

  const FIXED_POOL_COLS = 4;
  const GAME_WIDTH = 980;
  const GAME_HEIGHT = 760;

  function getViewportSize() {
    const doc = document.documentElement;
    const root = document.getElementById("gameRoot");
    const width = Math.max(320, Math.floor(root?.clientWidth || doc.clientWidth || window.innerWidth || GAME_WIDTH));
    const height = Math.max(480, Math.floor(window.innerHeight || doc.clientHeight || GAME_HEIGHT));
    return { width, height };
  }
  const DRILL_SPEED_PX_PER_SEC = 420;
  const DRILL_BOTTOM_SEARCH_SPEED_PX_PER_SEC = 240;
  const DRILL_HIT_HOLD_DISTANCE_PX = 28;
  const TRAY_RETURN_DURATION_MS = 320;
  const TILE_SHAKE_DISTANCE_PX = 5;
  const TILE_SHAKE_DURATION_MS = 90;
  const MAX_ACTIVE_DRILLS = 5;

  const el = {
    statusText: document.getElementById("statusText"),
    tilesRemaining: document.getElementById("tilesRemaining"),
    restartBtn: document.getElementById("restartBtn"),
    nextLevelBtn: document.getElementById("nextLevelBtn"),
    levelText: document.getElementById("levelText"),
    poolHint: document.getElementById("poolHint"),
    resultOverlay: document.getElementById("resultOverlay"),
    resultBanner: document.getElementById("resultBanner"),
    resultImage: document.getElementById("resultImage"),
    resultTitle: document.getElementById("resultTitle"),
    resultRetryBtn: document.getElementById("resultRetryBtn"),
    resultNextBtn: document.getElementById("resultNextBtn"),
  };

  const state = {
    levelIndex: 0,
    level: null,
    grid: [],
    plannedGrid: [],
    tray: [],
    trayCapacity: 5,
    poolColumns: [],
    state: "running", // running | won | lost
    activeDrills: 0,
    poolRiseAnimations: [],
    groundDebris: [],
  };

  function cloneJson(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function cloneGrid(grid) {
    return grid.map((row) => row.map((t) => (t ? { ...t } : null)));
  }

  function normalizeTile(raw) {
    if (!raw) return null;

    if (typeof raw === "string") {
      return { color: raw, hp: 1 };
    }

    if (typeof raw === "object") {
      const color = raw.color || null;
      if (!color) return null;
      const hp = Math.max(1, Number(raw.hp ?? raw.hits ?? 1) || 1);
      return { color, hp };
    }

    return null;
  }

  function normalizeLevel(level) {
    const providedRows = Array.isArray(level.grid) ? level.grid.length : 0;
    const maxProvidedCols = (level.grid || []).reduce((m, row) => Math.max(m, row.length), 0);

    const rows = Number.isInteger(level.rows) && level.rows > 0 ? level.rows : providedRows;
    const cols = Number.isInteger(level.cols) && level.cols > 0 ? level.cols : maxProvidedCols;

    const normalizedGrid = Array.from({ length: rows }, (_, r) =>
      Array.from({ length: cols }, (_, c) => normalizeTile(level.grid?.[r]?.[c] ?? null)),
    );

    const normalizedPoolColumns = Array.from({ length: FIXED_POOL_COLS }, (_, colIndex) => {
      const sourceCol = level.poolColumns?.[colIndex] || [];
      return sourceCol.map((drill) => ({
        color: drill.color,
        energy: drill.energy,
        hiddenUntilTopRow: Boolean(drill.hiddenUntilTopRow),
      }));
    });

    const poolRows =
      Number.isInteger(level.poolRows) && level.poolRows > 0 ? level.poolRows : Math.max(1, ...normalizedPoolColumns.map((col) => col.length));

    return {
      ...cloneJson(level),
      rows,
      cols,
      grid: normalizedGrid,
      poolRows,
      poolColumns: normalizedPoolColumns,
    };
  }

  function countTiles() {
    let total = 0;
    for (let r = 0; r < state.level.rows; r += 1) {
      for (let c = 0; c < state.level.cols; c += 1) {
        if (state.grid[r]?.[c]?.color) total += 1;
      }
    }
    return total;
  }

  function getBottomMostRowInCol(gridRef, col) {
    for (let r = state.level.rows - 1; r >= 0; r -= 1) {
      if (gridRef[r]?.[col]?.color) return r;
    }
    return -1;
  }

  function findFirstBottomMatchTarget(gridRef, color) {
    for (let c = 0; c < state.level.cols; c += 1) {
      const bottomRow = getBottomMostRowInCol(gridRef, c);
      if (bottomRow !== -1 && gridRef[bottomRow][c]?.color === color) {
        return { row: bottomRow, col: c };
      }
    }
    return null;
  }

  function findAdjacentMatch(gridRef, row, col, color) {
    const candidates = [
      { row: row - 1, col },
      { row, col: col + 1 },
      { row: row + 1, col },
      { row, col: col - 1 },
    ];

    for (let i = 0; i < candidates.length; i += 1) {
      const candidate = candidates[i];
      const inBounds = candidate.row >= 0 && candidate.row < state.level.rows && candidate.col >= 0 && candidate.col < state.level.cols;
      if (!inBounds) continue;
      if (gridRef[candidate.row]?.[candidate.col]?.color === color) return candidate;
    }

    return null;
  }

  function buildDrillPath(drill, sourceGrid) {
    const virtualGrid = cloneGrid(sourceGrid);
    const path = [{ row: state.level.rows, col: 0, action: "move" }];

    const target = findFirstBottomMatchTarget(virtualGrid, drill.color);
    if (!target) {
      for (let c = 0; c < state.level.cols; c += 1) {
        path.push({ row: state.level.rows, col: c, action: "move" });
      }
      return { path, result: "tray", virtualGrid };
    }

    for (let c = 0; c <= target.col; c += 1) {
      path.push({ row: state.level.rows, col: c, action: "move" });
    }

    let row = target.row;
    let col = target.col;
    let remainingEnergy = drill.energy;

    while (remainingEnergy > 0) {
      const current = virtualGrid[row]?.[col] ?? null;

      if (current?.color === drill.color) {
        path.push({ row, col, action: "destroy" });
        remainingEnergy -= 1;
        current.hp -= 1;

        if (current.hp <= 0) {
          virtualGrid[row][col] = null;
        }

        if (remainingEnergy <= 0) {
          return { path, result: "depleted", virtualGrid };
        }

        if (virtualGrid[row][col]) {
          continue;
        }

        const next = findAdjacentMatch(virtualGrid, row, col, drill.color);
        if (next) {
          row = next.row;
          col = next.col;
          path.push({ row, col, action: "move" });
          continue;
        }

        return { path, result: "tray", virtualGrid };
      }

      const next = findAdjacentMatch(virtualGrid, row, col, drill.color);
      if (next) {
        row = next.row;
        col = next.col;
        path.push({ row, col, action: "move" });
        continue;
      }

      return { path, result: "tray", virtualGrid };
    }

    return { path, result: "depleted", virtualGrid };
  }

  function setStatus(text) {
    el.statusText.textContent = text;
  }

  function updateLevelUi() {
    const current = state.levelIndex + 1;
    const total = LEVELS.length;
    el.levelText.textContent = `Level ${current}/${total}`;
    el.nextLevelBtn.disabled = current >= total;
  }

  function showResultOverlay(type) {
    if (!el.resultOverlay) return;

    const isVictory = type === "victory";
    const bannerSrc = isVictory ? "assets/UI/victory_banner.png" : "assets/UI/defeat_banner.png";
    const imageSrc = isVictory ? "assets/UI/victory_image.png" : "assets/UI/defeat_image.png";

    el.resultBanner.src = bannerSrc;
    el.resultImage.src = imageSrc;
    el.resultTitle.textContent = isVictory ? "Victory" : "Defeated";

    el.resultBanner.alt = isVictory ? "Victory" : "Defeat";
    el.resultImage.alt = isVictory ? "Victory illustration" : "Defeat illustration";

    // Show/hide Next button: only visible on victory
    if (el.resultNextBtn) {
      el.resultNextBtn.style.display = isVictory ? "" : "none";
    }

    el.resultOverlay.hidden = false;
  }

  function hideResultOverlay() {
    if (!el.resultOverlay) return;
    el.resultOverlay.hidden = true;
  }

  function canDeploy() {
    return state.state === "running" && state.activeDrills < MAX_ACTIVE_DRILLS;
  }

  function canPlaceInTray() {
    return state.tray.length < state.trayCapacity;
  }

  function removeTopDrillAndShift(colIndex) {
    const col = state.poolColumns[colIndex] || [];
    if (!col.length) return null;

    const shifted = col.length > 1;
    const removed = col.shift() || null;

    if (shifted) {
      state.poolRiseAnimations = state.poolRiseAnimations.filter((anim) => anim.col !== colIndex);
      state.poolRiseAnimations.push({
        col: colIndex,
        createdAt: performance.now(),
        durationMs: 220,
      });
    }

    return removed;
  }

  class BootScene extends Phaser.Scene {
    constructor() {
      super("BootScene");
    }

    preload() {
      this.load.image("tile-blue", "assets/blue.png");
      this.load.image("tile-green", "assets/green.png");
      this.load.image("tile-orange", "assets/orange.png");
      this.load.image("tile-purple", "assets/purple.png");
      this.load.image("tile-yellow", "assets/yellow.png");
      this.load.image("drill-blue", "assets/driller_blue.png");
      this.load.image("drill-green", "assets/driller_green.png");
      this.load.image("drill-orange", "assets/driller_orange.png");
      this.load.image("drill-purple", "assets/driller_purple.png");
      this.load.image("drill-yellow", "assets/driller_yellow.png");
      this.load.image("drill-side-blue", "assets/driller_blue_side.png");
      this.load.image("drill-side-green", "assets/driller_green_side.png");
      this.load.image("drill-side-orange", "assets/driller_orange_side.png");
      this.load.image("drill-side-purple", "assets/driller_purple_side.png");
      this.load.image("drill-side-yellow", "assets/driller_yellow_side.png");
    }

    create() {
      this.scene.start("PlayScene");
    }
  }

  class PlayScene extends Phaser.Scene {
    constructor() {
      super("PlayScene");
      this.layout = null;
      this.activeDrillEntities = [];
      this.traySlotPoints = [];
      this.gridTileSprites = new Map();
    }

    create() {
      playSceneRef = this;

      this.gridLayer = this.add.container(0, 0);
      this.debrisLayer = this.add.container(0, 0);
      this.poolLayer = this.add.container(0, 0);
      this.trayLayer = this.add.container(0, 0);
      this.drillLayer = this.add.container(0, 0);
      this.fxLayer = this.add.container(0, 0);

      this.scale.on("resize", () => {
        if (!state.level) return;
        this.recalculateLayout();
        this.renderAll();
      });

      this.initLevel(0);
    }

    colorToTexture(color) {
      return `tile-${color}`;
    }

    colorToDrillTexture(color) {
      return `drill-${color}`;
    }

    colorToDrillSideTexture(color) {
      return `drill-side-${color}`;
    }

    directionBetweenPoints(from, to) {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      if (Math.abs(dx) < 1e-6 && Math.abs(dy) < 1e-6) return null;

      if (Math.abs(dx) >= Math.abs(dy)) {
        return { x: Math.sign(dx), y: 0 };
      }
      return { x: 0, y: Math.sign(dy) };
    }

    orientDrillSprite(icon, color, dir) {
      if (!dir) return;

      if (dir.x !== 0) {
        icon.setTexture(this.colorToDrillSideTexture(color));
        icon.setFlipX(false);
        icon.setFlipY(false);
        icon.setAngle(dir.x < 0 ? 180 : 0);
        return;
      }

      icon.setTexture(this.colorToDrillTexture(color));
      icon.setFlipX(false);
      icon.setFlipY(false);
      icon.setAngle(dir.y < 0 ? 0 : 180);
    }

    fitImageToBox(image, maxWidth, maxHeight) {
      const src = image.texture?.getSourceImage?.();
      const srcW = Number(src?.width) || image.width || maxWidth;
      const srcH = Number(src?.height) || image.height || maxHeight;
      const scale = Math.min(maxWidth / srcW, maxHeight / srcH);
      image.setDisplaySize(srcW * scale, srcH * scale);
      return image;
    }

    getGridPoint(row, col) {
      const { grid } = this.layout;
      return {
        x: grid.x + col * (grid.tileSize + grid.gapX),
        y: grid.y + row * (grid.tileSize + grid.gapY),
      };
    }

    recalculateLayout() {
      const width = this.scale.width;
      const height = this.scale.height;
      const isDesktop = width >= 1024;
      const padding = isDesktop ? 16 : 20;
      const gridToTrayGap = isDesktop ? 30 : 26;
      const trayToPoolGap = isDesktop ? 16 : 18;
      const rowGap = 10;

      const poolRows = state.level.poolRows;
      const rows = state.level.rows;
      const cols = state.level.cols;

      const tileGapX = -22;
      const tileGapY = -24;
      const availableW = width - padding * 2;
      const availableH = height - padding * 2;
      const maxPoolCell = isDesktop ? 52 : 56;
      const maxGridTile = isDesktop ? 82 : 68;

      const poolCellByW = Math.floor((availableW - (FIXED_POOL_COLS - 1) * rowGap) / FIXED_POOL_COLS);
      const poolCellByH = Math.floor((availableH * 0.2 - Math.max(0, poolRows - 1) * rowGap) / Math.max(1, poolRows));
      const poolCell = Math.max(30, Math.min(maxPoolCell, poolCellByW, poolCellByH));
      const poolHeight = poolRows * poolCell + Math.max(0, poolRows - 1) * rowGap;

      const trayCellByW = Math.floor((availableW - Math.max(0, state.trayCapacity - 1) * rowGap) / state.trayCapacity);
      const trayCellByH = Math.floor(availableH * 0.1);
      const trayCell = Math.max(30, Math.min(isDesktop ? 54 : 58, trayCellByW, trayCellByH));
      const trayHeight = trayCell;

      const gridHeightBudget = availableH - poolHeight - trayHeight - gridToTrayGap - trayToPoolGap;
      const gridWidthBudget = availableW;
      const tileByW = Math.floor((gridWidthBudget - Math.max(0, cols - 1) * tileGapX) / cols);
      const tileByH = Math.floor((gridHeightBudget - Math.max(0, rows - 1) * tileGapY) / rows);
      const tileSize = Math.max(22, Math.min(maxGridTile, tileByW, tileByH));

      const gridWidth = cols * tileSize + Math.max(0, cols - 1) * tileGapX;
      const gridHeight = rows * tileSize + Math.max(0, rows - 1) * tileGapY;

      const poolWidth = FIXED_POOL_COLS * poolCell + Math.max(0, FIXED_POOL_COLS - 1) * rowGap;
      const trayWidth = state.trayCapacity * trayCell + Math.max(0, state.trayCapacity - 1) * rowGap;

      const gridX0 = (width - gridWidth) / 2 + tileSize / 2;
      const gridY0 = padding + tileSize / 2;
      const trayX0 = (width - trayWidth) / 2;
      const trayY0 = gridY0 + (rows - 1) * (tileSize + tileGapY) + tileSize / 2 + gridToTrayGap;
      const poolX0 = (width - poolWidth) / 2;
      const poolY0 = trayY0 + trayHeight + trayToPoolGap;

      this.layout = {
        pool: { x: poolX0, y: poolY0, cell: poolCell, rowGap, rows: poolRows },
        grid: { x: gridX0, y: gridY0, tileSize, gapX: tileGapX, gapY: tileGapY, rows, cols },
        tray: { x: trayX0, y: trayY0, cell: trayCell, gap: rowGap },
      };
    }

    clearLayer(layer) {
      layer.removeAll(true);
    }

    makeDrillToken(x, y, size, drill, hideColor) {
      const token = this.add.container(x, y);
      const shadow = this.add.ellipse(
        0,
        Math.floor(size * 0.12),
        Math.max(10, Math.floor(size * 0.56)),
        Math.max(6, Math.floor(size * 0.28)),
        0x000000,
        0.22,
      );
      token.add(shadow);

      const inset = Math.floor(size * 0.9);
      if (hideColor) {
        const q = this.add
          .text(0, -size * 0.02, "?", {
            fontFamily: "Inter, Segoe UI, sans-serif",
            fontSize: `${Math.max(14, Math.floor(size * 0.38))}px`,
            color: "#ffffff",
            fontStyle: "700",
          })
          .setOrigin(0.5);
        token.add(q);
      } else {
        const drillSprite = this.add.image(0, -size * 0.05, this.colorToDrillTexture(drill.color));
        this.fitImageToBox(drillSprite, inset, inset);
        token.add(drillSprite);
      }

      const badgeW = Math.max(20, Math.floor(size * 0.56));
      const badgeH = Math.max(16, Math.floor(size * 0.32));
      const badge = this.add.rectangle(0, size * 0.33, badgeW, badgeH, 0x0f1323, 0.96).setStrokeStyle(1, 0x7b85a6, 1);
      const energy = this.add
        .text(0, size * 0.33, String(drill.energy), {
          fontFamily: "Inter, Segoe UI, sans-serif",
          fontSize: `${Math.max(10, Math.floor(size * 0.2))}px`,
          color: "#ecf2ff",
          fontStyle: "700",
        })
        .setOrigin(0.5);
      token.add([badge, energy]);

      token.energyText = energy;
      return token;
    }

    renderGrid() {
      this.clearLayer(this.gridLayer);
      this.gridTileSprites.clear();
      const { rows, cols, tileSize } = this.layout.grid;

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const point = this.getGridPoint(r, c);
          const tileData = state.grid[r]?.[c] ?? null;

          if (!tileData?.color) {
            continue;
          }

          const sprite = this.add.image(point.x, point.y, this.colorToTexture(tileData.color));
          this.fitImageToBox(sprite, tileSize, tileSize);
          this.gridLayer.add(sprite);
          this.gridTileSprites.set(`${r},${c}`, sprite);

          if (tileData.hp > 1) {
            const hp = this.add
              .text(point.x, point.y, String(tileData.hp), {
                fontFamily: "Inter, Segoe UI, sans-serif",
                fontSize: `${Math.max(11, Math.floor(tileSize * 0.24))}px`,
                color: "#ffffff",
                fontStyle: "700",
                stroke: "#0b0f1d",
                strokeThickness: 3,
              })
              .setOrigin(0.5);
            this.gridLayer.add(hp);
          }
        }
      }

      el.tilesRemaining.textContent = `Tiles: ${countTiles()}`;
    }

    renderTray() {
      this.clearLayer(this.trayLayer);
      this.traySlotPoints = [];

      const { x, y, cell, gap } = this.layout.tray;

      for (let i = 0; i < state.trayCapacity; i += 1) {
        const slotX = x + i * (cell + gap) + cell / 2;
        const slotY = y + cell / 2;
        this.traySlotPoints[i] = { x: slotX, y: slotY };

        const indicator = this.add.rectangle(slotX, slotY, cell, cell, 0xffffff, 0.08).setStrokeStyle(1, 0x8b7a63, 0.28);
        this.trayLayer.add(indicator);

        const slot = this.add.zone(slotX, slotY, cell, cell);
        this.trayLayer.add(slot);

        const drill = state.tray[i];
        if (!drill) continue;

        const token = this.makeDrillToken(slotX, slotY, Math.floor(cell * 0.92), drill, false);
        this.trayLayer.add(token);

        if (canDeploy()) {
          slot.setInteractive({ useHandCursor: true });
          slot.on("pointerdown", () => this.tryDeployFromTray(i));
        } else {
          token.setAlpha(0.65);
        }
      }
    }

    renderPool() {
      this.clearLayer(this.poolLayer);
      const now = performance.now();
      state.poolRiseAnimations = state.poolRiseAnimations.filter((a) => now - a.createdAt < a.durationMs + 40);

      const { x, y, cell, rowGap, rows } = this.layout.pool;
      const deployable = canDeploy();
      let hasTopDrill = false;

      for (let c = 0; c < FIXED_POOL_COLS; c += 1) {
        const riseAnim = state.poolRiseAnimations.find((a) => a.col === c && now - a.createdAt < a.durationMs);

        for (let r = 0; r < rows; r += 1) {
          const drawX = x + c * (cell + rowGap) + cell / 2;
          const drawY = y + r * (cell + rowGap) + cell / 2;
          const drill = state.poolColumns[c]?.[r] || null;

          const slot = this.add.zone(drawX, drawY, cell, cell);
          this.poolLayer.add(slot);

          if (!drill) continue;

          const hideColor = Boolean(drill.hiddenUntilTopRow) && r > 0;
          const token = this.makeDrillToken(drawX, drawY, Math.floor(cell * 0.98), drill, hideColor);
          this.poolLayer.add(token);

          let targetAlpha = hideColor ? 0.38 : 0.5;

          if (r === 0) {
            hasTopDrill = true;
            if (deployable) {
              slot.setInteractive({ useHandCursor: true });
              slot.on("pointerdown", () => this.tryDeploy(c));
              targetAlpha = 1;
            } else {
              targetAlpha = 0.65;
            }
          }

          if (riseAnim) {
            token.y += cell + rowGap;
            token.alpha = Math.min(targetAlpha, 0.45);
            this.tweens.add({
              targets: token,
              y: drawY,
              alpha: targetAlpha,
              duration: riseAnim.durationMs,
              ease: "Sine.Out",
            });
          } else {
            token.setAlpha(targetAlpha);
          }
        }
      }

      if (state.state === "won") {
        el.poolHint.textContent = "Victory";
      } else if (state.state === "lost") {
        el.poolHint.textContent = "Defeat";
      } else if (!hasTopDrill && state.tray.length === 0) {
        el.poolHint.textContent = "No drills left";
      } else {
        el.poolHint.textContent = "Top row + tray deployable";
      }
    }

    renderDebris() {
      this.clearLayer(this.debrisLayer);
      const tileSize = this.layout.grid.tileSize;

      for (let i = 0; i < state.groundDebris.length; i += 1) {
        const piece = state.groundDebris[i];
        const center = this.getGridPoint(piece.row, piece.col);
        const size = Math.max(2, Math.floor(tileSize * piece.sizeRatio));
        const sprite = this.add
          .image(center.x + tileSize * piece.offsetXRatio, center.y + tileSize * piece.offsetYRatio, this.colorToTexture(piece.color))
          .setDisplaySize(size, size)
          .setAngle(piece.angle)
          .setAlpha(piece.alpha);
        this.debrisLayer.add(sprite);
      }
    }

    renderAll() {
      this.renderGrid();
      this.renderDebris();
      this.renderTray();
      this.renderPool();
    }

    triggerTileShake(row, col, strength = 1) {
      if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const distance = TILE_SHAKE_DISTANCE_PX * Math.max(0.8, Math.min(1.6, strength));
      const targets = [
        { row, col },
        { row: row - 1, col },
        { row: row + 1, col },
        { row, col: col - 1 },
        { row, col: col + 1 },
      ];

      for (let i = 0; i < targets.length; i += 1) {
        const t = targets[i];
        const key = `${t.row},${t.col}`;
        const sprite = this.gridTileSprites.get(key);
        if (!sprite) continue;

        const base = this.getGridPoint(t.row, t.col);
        sprite.setPosition(base.x, base.y);
        this.tweens.killTweensOf(sprite);
        this.tweens.add({
          targets: sprite,
          x: base.x + Phaser.Math.FloatBetween(-distance, distance),
          y: base.y + Phaser.Math.FloatBetween(-distance, distance),
          duration: Math.max(16, Math.floor(TILE_SHAKE_DURATION_MS / 2)),
          yoyo: true,
          repeat: 1,
          ease: "Sine.InOut",
          onComplete: () => {
            sprite.setPosition(base.x, base.y);
          },
        });
      }
    }

    spawnDrillDebris(row, col, color, incomingDir = { x: 0, y: -1 }) {
      const center = this.getGridPoint(row, col);
      const incomingLen = Math.hypot(incomingDir.x, incomingDir.y);
      const normIncoming = incomingLen > 1e-6 ? { x: incomingDir.x / incomingLen, y: incomingDir.y / incomingLen } : { x: 0, y: -1 };
      const back = { x: -normIncoming.x, y: -normIncoming.y };
      const baseAngle = Phaser.Math.RadToDeg(Math.atan2(back.y, back.x));

      const count = 16;
      for (let i = 0; i < count; i += 1) {
        const speed = Phaser.Math.Between(56, 110);
        const angleDeg = Phaser.Math.FloatBetween(baseAngle - 35, baseAngle + 35);
        const angle = Phaser.Math.DegToRad(angleDeg);
        const life = Phaser.Math.Between(220, 380);

        const piece = this.add.image(center.x, center.y, this.colorToTexture(color)).setDisplaySize(8, 8).setAlpha(0.9).setDepth(20);

        this.fxLayer.add(piece);

        this.tweens.add({
          targets: piece,
          x: center.x + Math.cos(angle) * speed * (life / 1000),
          y: center.y + Math.sin(angle) * speed * (life / 1000) + 24,
          alpha: 0,
          angle: Phaser.Math.Between(-160, 160),
          duration: life,
          ease: "Quad.Out",
          onComplete: () => piece.destroy(),
        });
      }
    }

    spawnGroundDebris(row, col, color) {
      const count = 9;
      const tileSize = this.layout.grid.tileSize;
      const center = this.getGridPoint(row, col);

      for (let i = 0; i < count; i += 1) {
        const scatter = Phaser.Math.FloatBetween(0.2, 0.72);
        const scatterAngle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const targetOffsetXRatio = Math.cos(scatterAngle) * scatter;
        const targetOffsetYRatio = Math.sin(scatterAngle) * scatter + 0.14;
        const startOffsetXRatio = Phaser.Math.FloatBetween(-0.05, 0.05);
        const startOffsetYRatio = Phaser.Math.FloatBetween(-0.02, 0.08);
        const sizeRatio = Phaser.Math.FloatBetween(0.07, 0.15);
        const alpha = Phaser.Math.FloatBetween(0.45, 0.9);
        const angle = Phaser.Math.Between(-180, 180);

        state.groundDebris.push({
          row,
          col,
          color,
          offsetXRatio: targetOffsetXRatio,
          offsetYRatio: targetOffsetYRatio,
          sizeRatio,
          angle,
          alpha,
        });

        const size = Math.max(2, Math.floor(tileSize * sizeRatio));
        const piece = this.add
          .image(center.x + tileSize * startOffsetXRatio, center.y + tileSize * startOffsetYRatio, this.colorToTexture(color))
          .setDisplaySize(size, size)
          .setAngle(angle)
          .setAlpha(alpha)
          .setDepth(20);
        this.fxLayer.add(piece);

        this.tweens.add({
          targets: piece,
          x: center.x + tileSize * targetOffsetXRatio,
          y: center.y + tileSize * targetOffsetYRatio,
          angle: angle + Phaser.Math.Between(-120, 120),
          duration: Phaser.Math.Between(170, 260),
          ease: "Cubic.Out",
          onComplete: () => piece.destroy(),
        });
      }

      this.renderDebris();
    }

    maybeWin() {
      if (state.state !== "running") return;
      if (countTiles() !== 0) return;

      state.state = "won";
      setStatus("All tiles cleared. You win!");
      this.renderAll();
      showResultOverlay("victory");
    }

    animateToTray(entity, drill, done) {
      const targetIndex = Math.min(state.tray.length, state.trayCapacity - 1);
      const targetPoint = this.traySlotPoints[targetIndex] || this.traySlotPoints[state.trayCapacity - 1] || { x: 0, y: 0 };
      if (entity.energyText) entity.energyText.setText(String(drill.energy));

      this.tweens.add({
        targets: entity.container,
        x: targetPoint.x,
        y: targetPoint.y,
        duration: TRAY_RETURN_DURATION_MS,
        ease: "Cubic.Out",
        onComplete: () => {
          entity.container.destroy();
          done();
        },
      });
    }

    finalizeDrill(result, drill, entity) {
      if (result === "tray" && drill.energy > 0) {
        if (!canPlaceInTray()) {
          entity.container.destroy();
          state.state = "lost";
          setStatus("Tray overflow. You lose.");
          state.activeDrills = Math.max(0, state.activeDrills - 1);
          this.renderAll();
          showResultOverlay("defeat");
          return;
        }

        this.animateToTray(entity, drill, () => {
          state.tray.push({ color: drill.color, energy: drill.energy });
          state.activeDrills = Math.max(0, state.activeDrills - 1);

          if (state.state === "running") {
            setStatus(`Drill parked in tray (${drill.energy} energy).`);
          }

          this.renderAll();
          this.maybeWin();
        });
        return;
      }

      entity.container.destroy();
      state.activeDrills = Math.max(0, state.activeDrills - 1);

      if (result === "depleted" && state.state === "running") {
        setStatus("Drill depleted and removed.");
      }

      this.renderAll();
      this.maybeWin();
    }

    animateDrill(deployed, resultPackage) {
      const { path, result } = resultPackage;
      if (!path.length) return;

      const liveDrill = { ...deployed };
      const worldPoints = path.map((node) => ({ node, pos: this.getGridPoint(node.row, node.col) }));

      const iconSize = Math.max(22, Math.floor(this.layout.grid.tileSize * 0.95));
      const container = this.add.container(worldPoints[0].pos.x, worldPoints[0].pos.y);
      const shadow = this.add.ellipse(
        0,
        Math.floor(iconSize * 0.2),
        Math.max(10, Math.floor(iconSize * 0.62)),
        Math.max(6, Math.floor(iconSize * 0.32)),
        0x000000,
        0.24,
      );
      const icon = this.add.image(0, 0, this.colorToDrillTexture(liveDrill.color));
      this.orientDrillSprite(icon, liveDrill.color, { x: 1, y: 0 });
      this.fitImageToBox(icon, iconSize, iconSize);
      const energyText = this.add
        .text(0, -iconSize * 0.62, String(liveDrill.energy), {
          fontFamily: "Inter, Segoe UI, sans-serif",
          fontSize: `${Math.max(10, Math.floor(iconSize * 0.28))}px`,
          color: "#ffffff",
          fontStyle: "700",
          stroke: "#0b0f1d",
          strokeThickness: 3,
        })
        .setOrigin(0.5);

      container.add([shadow, icon, energyText]);
      this.drillLayer.add(container);

      state.activeDrills += 1;
      if (state.state === "running") {
        setStatus(`Drills active: ${state.activeDrills}`);
      }

      const segmentLengths = [];
      const segmentEnds = [];
      let totalDistance = 0;

      for (let i = 0; i < worldPoints.length - 1; i += 1) {
        const a = worldPoints[i].pos;
        const b = worldPoints[i + 1].pos;
        let len = Math.hypot(b.x - a.x, b.y - a.y);

        const fromNode = worldPoints[i].node;
        const toNode = worldPoints[i + 1].node;
        const repeatedDurableHit =
          fromNode.action === "destroy" && toNode.action === "destroy" && fromNode.row === toNode.row && fromNode.col === toNode.col;

        if (repeatedDurableHit && len < 0.001) {
          len = DRILL_HIT_HOLD_DISTANCE_PX;
        }

        segmentLengths.push(len);
        totalDistance += len;
        segmentEnds.push(totalDistance);
      }

      const incomingDirs = worldPoints.map(() => ({ x: 0, y: -1 }));
      for (let i = 1; i < worldPoints.length; i += 1) {
        const prev = worldPoints[i - 1].pos;
        const curr = worldPoints[i].pos;
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        const len = Math.hypot(dx, dy);
        incomingDirs[i] = len > 1e-6 ? { x: dx / len, y: dy / len } : incomingDirs[i - 1];
      }

      const entity = {
        container,
        icon,
        energyText,
        liveDrill,
        result,
        worldPoints,
        segmentLengths,
        segmentEnds,
        totalDistance,
        traveled: 0,
        appliedNodeIndex: 0,
        incomingDirs,
        bottomSearchDistance: segmentLengths
          .filter((_, idx) => {
            const fromNode = worldPoints[idx].node;
            const toNode = worldPoints[idx + 1].node;
            return fromNode.row === state.level.rows && toNode.row === state.level.rows;
          })
          .reduce((sum, len) => sum + len, 0),
      };

      this.activeDrillEntities.push(entity);
    }

    applyPathAction(entity, node, nodeIndex) {
      if (node.action === "destroy") {
        const tile = state.grid[node.row]?.[node.col] ?? null;
        if (tile?.color === entity.liveDrill.color && tile.hp > 0) {
          this.spawnDrillDebris(node.row, node.col, entity.liveDrill.color, entity.incomingDirs[nodeIndex]);

          tile.hp = Math.max(0, tile.hp - 1);
          entity.liveDrill.energy = Math.max(0, entity.liveDrill.energy - 1);

          if (tile.hp <= 0) {
            state.grid[node.row][node.col] = null;
            this.spawnGroundDebris(node.row, node.col, tile.color);
          }

          this.renderGrid();
          this.triggerTileShake(node.row, node.col, 1.4);
          this.maybeWin();
        }
      }

      entity.energyText.setText(String(entity.liveDrill.energy));
    }

    placeAtDistance(entity, distance) {
      if (entity.worldPoints.length === 1 || entity.totalDistance <= 0) {
        const p = entity.worldPoints[0].pos;
        entity.container.setPosition(p.x, p.y);
        return;
      }

      let remaining = distance;
      let segIndex = 0;

      while (segIndex < entity.segmentLengths.length && remaining > entity.segmentLengths[segIndex]) {
        remaining -= entity.segmentLengths[segIndex];
        segIndex += 1;
      }

      if (segIndex >= entity.segmentLengths.length) {
        const p = entity.worldPoints[entity.worldPoints.length - 1].pos;
        entity.container.setPosition(p.x, p.y);
        return;
      }

      const a = entity.worldPoints[segIndex].pos;
      const b = entity.worldPoints[segIndex + 1].pos;
      const len = Math.max(1e-6, entity.segmentLengths[segIndex]);
      const t = remaining / len;
      entity.container.setPosition(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);

      const moveDir = this.directionBetweenPoints(a, b);
      if (moveDir) {
        this.orientDrillSprite(entity.icon, entity.liveDrill.color, moveDir);
        this.fitImageToBox(entity.icon, entity.icon.displayWidth, entity.icon.displayHeight);
      }
    }

    deployDrill(drill) {
      if (!canDeploy()) return;

      const resultPackage = buildDrillPath(drill, state.plannedGrid);
      state.plannedGrid = resultPackage.virtualGrid;
      this.animateDrill(drill, resultPackage);
      this.renderPool();
      this.renderTray();
    }

    tryDeploy(colIndex) {
      if (state.state !== "running") return;
      if (state.activeDrills >= MAX_ACTIVE_DRILLS) {
        setStatus(`Active drill limit reached (${MAX_ACTIVE_DRILLS}). Wait for one to finish.`);
        return;
      }
      if (!canDeploy()) return;

      const top = state.poolColumns[colIndex]?.[0] || null;
      if (!top) return;

      const deployed = removeTopDrillAndShift(colIndex);
      if (!deployed) return;

      this.renderPool();
      this.deployDrill(deployed);
    }

    tryDeployFromTray(trayIndex) {
      if (state.state !== "running") return;
      if (state.activeDrills >= MAX_ACTIVE_DRILLS) {
        setStatus(`Active drill limit reached (${MAX_ACTIVE_DRILLS}). Wait for one to finish.`);
        return;
      }
      if (!canDeploy()) return;

      const trayDrill = state.tray[trayIndex] || null;
      if (!trayDrill) return;

      const deployed = state.tray.splice(trayIndex, 1)[0];
      this.renderTray();
      this.deployDrill(deployed);
    }

    initLevel(index = 0) {
      hideResultOverlay();
      state.levelIndex = index;
      state.level = normalizeLevel(LEVELS[index]);
      state.grid = cloneGrid(state.level.grid);
      state.plannedGrid = cloneGrid(state.level.grid);
      state.poolColumns = state.level.poolColumns.map((col) => col.map((d) => ({ ...d })));
      state.tray = [];
      state.state = "running";
      state.activeDrills = 0;
      state.poolRiseAnimations = [];
      state.groundDebris = [];

      this.activeDrillEntities.forEach((entity) => entity.container.destroy());
      this.activeDrillEntities = [];

      this.recalculateLayout();
      this.renderAll();
      updateLevelUi();
      setStatus("Deploy drills from pool or tray.");
    }

    goToNextLevel() {
      const nextIndex = state.levelIndex + 1;
      if (nextIndex >= LEVELS.length) {
        setStatus("Already at final level.");
        updateLevelUi();
        return;
      }

      this.initLevel(nextIndex);
      setStatus(`Loaded level ${nextIndex + 1}.`);
    }

    update(_time, delta) {
      if (!this.activeDrillEntities.length) return;

      const deltaSec = Math.max(0, delta) / 1000;
      const survivors = [];

      for (let i = 0; i < this.activeDrillEntities.length; i += 1) {
        const entity = this.activeDrillEntities[i];

        if (state.state === "lost") {
          entity.container.destroy();
          state.activeDrills = Math.max(0, state.activeDrills - 1);
          continue;
        }

        const isSearchingAtBottom = entity.traveled < entity.bottomSearchDistance - 0.0001;
        const speedPxPerSec = isSearchingAtBottom ? DRILL_BOTTOM_SEARCH_SPEED_PX_PER_SEC : DRILL_SPEED_PX_PER_SEC;
        entity.traveled = Math.min(entity.totalDistance, entity.traveled + speedPxPerSec * deltaSec);

        while (entity.appliedNodeIndex < entity.segmentEnds.length && entity.traveled >= entity.segmentEnds[entity.appliedNodeIndex] - 0.0001) {
          entity.appliedNodeIndex += 1;
          this.applyPathAction(entity, entity.worldPoints[entity.appliedNodeIndex].node, entity.appliedNodeIndex);
        }

        this.placeAtDistance(entity, entity.traveled);

        if (entity.traveled >= entity.totalDistance - 0.0001) {
          const finalResult = entity.liveDrill.energy <= 0 ? "depleted" : entity.result;
          this.finalizeDrill(finalResult, entity.liveDrill, entity);
          continue;
        }

        survivors.push(entity);
      }

      this.activeDrillEntities = survivors;
    }
  }

  let playSceneRef = null;

  function wireEvents() {
    el.restartBtn.addEventListener("click", () => {
      if (!playSceneRef) return;
      playSceneRef.initLevel(state.levelIndex);
    });

    el.nextLevelBtn.addEventListener("click", () => {
      if (!playSceneRef) return;
      playSceneRef.goToNextLevel();
    });

    el.resultRetryBtn?.addEventListener("click", () => {
      if (!playSceneRef) return;
      playSceneRef.initLevel(state.levelIndex);
    });

    el.resultNextBtn?.addEventListener("click", () => {
      if (!playSceneRef) return;
      playSceneRef.goToNextLevel();
    });
  }

  function bootstrap() {
    wireEvents();

    const viewport = getViewportSize();
    new Phaser.Game({
      type: Phaser.AUTO,
      parent: "gameRoot",
      width: viewport.width,
      height: viewport.height,
      backgroundColor: "#f3e7d3",
      scene: [BootScene, PlayScene],
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    });
  }

  bootstrap();
})();
