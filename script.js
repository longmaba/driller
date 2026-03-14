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
        ["green", "orange", "purple", "purple", "orange", { color: "green", hp: 10 }],
        ["green", "orange", "purple", "purple", "orange", "green"],
        ["green", "orange", "orange", "orange", "orange", "green"],
        ["yellow", "yellow", { color: "yellow", hp: 10 }, "yellow", "yellow", "yellow"],
        ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
      ],
      poolRows: 2,
      poolColumns: [
        [
          { color: "yellow", energy: 4 },
          { color: "green", energy: 6 },
          { color: "yellow", energy: 4 },
        ],
        [
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
  const TILE_SIZE_FALLBACK = 52;
  const DRILL_SPEED_PX_PER_SEC = 420;
  const DRILL_HIT_HOLD_DISTANCE_PX = 28;
  const TRAY_RETURN_DURATION_MS = 320;
  const HIT_SHAKE_DISTANCE_PX = 3;
  const HIT_SHAKE_DURATION_MS = 90;
  const MAX_ACTIVE_DRILLS = 5;

  const el = {
    grid: document.getElementById("grid"),
    traySlots: document.getElementById("traySlots"),
    poolColumns: document.getElementById("poolColumns"),
    statusText: document.getElementById("statusText"),
    tilesRemaining: document.getElementById("tilesRemaining"),
    restartBtn: document.getElementById("restartBtn"),
    nextLevelBtn: document.getElementById("nextLevelBtn"),
    levelText: document.getElementById("levelText"),
    poolHint: document.getElementById("poolHint"),
  };

  const game = {
    levelIndex: 0,
    level: null,
    grid: [],
    plannedGrid: [],
    tray: [],
    trayCapacity: 4,
    poolColumns: [],
    state: "running", // running | won | lost
    activeDrills: 0,
    poolRiseAnimations: [],
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

  function initLevel(index = 0) {
    game.levelIndex = index;
    game.level = normalizeLevel(LEVELS[index]);
    game.grid = cloneGrid(game.level.grid);
    game.plannedGrid = cloneGrid(game.level.grid);
    game.poolColumns = game.level.poolColumns.map((col) => col.map((d) => ({ ...d })));
    game.tray = [];
    game.state = "running";
    game.activeDrills = 0;
    game.poolRiseAnimations = [];

    renderAll();
    updateLevelUi();
    setStatus("Deploy drills from pool or tray.");
  }

  function setStatus(text) {
    el.statusText.textContent = text;
  }

  function updateLevelUi() {
    const current = game.levelIndex + 1;
    const total = LEVELS.length;
    el.levelText.textContent = `Level ${current}/${total}`;
    el.nextLevelBtn.disabled = current >= total;
  }

  function goToNextLevel() {
    const nextIndex = game.levelIndex + 1;
    if (nextIndex >= LEVELS.length) {
      setStatus("Already at final level.");
      updateLevelUi();
      return;
    }

    initLevel(nextIndex);
    setStatus(`Loaded level ${nextIndex + 1}.`);
  }

  function countTiles() {
    let total = 0;
    for (let r = 0; r < game.level.rows; r += 1) {
      for (let c = 0; c < game.level.cols; c += 1) {
        if (game.grid[r]?.[c]?.color) total += 1;
      }
    }
    return total;
  }

  function getGridMetrics() {
    const tiles = el.grid.querySelectorAll(".tile");
    const gridRect = el.grid.getBoundingClientRect();
    const fallbackStride = TILE_SIZE_FALLBACK + 8;

    if (!tiles.length) {
      return {
        baseX: 12 + TILE_SIZE_FALLBACK / 2,
        baseY: 12 + TILE_SIZE_FALLBACK / 2,
        strideX: fallbackStride,
        strideY: fallbackStride,
      };
    }

    const firstRect = tiles[0].getBoundingClientRect();
    const firstCenterX = firstRect.left + firstRect.width / 2 - gridRect.left;
    const firstCenterY = firstRect.top + firstRect.height / 2 - gridRect.top;

    let strideX = fallbackStride;
    if (game.level.cols > 1 && tiles[1]) {
      const secondRect = tiles[1].getBoundingClientRect();
      strideX = secondRect.left + secondRect.width / 2 - (firstRect.left + firstRect.width / 2);
    }

    let strideY = fallbackStride;
    const secondRowStartIndex = game.level.cols;
    if (game.level.rows > 1 && tiles[secondRowStartIndex]) {
      const secondRowRect = tiles[secondRowStartIndex].getBoundingClientRect();
      strideY = secondRowRect.top + secondRowRect.height / 2 - (firstRect.top + firstRect.height / 2);
    }

    return {
      baseX: firstCenterX,
      baseY: firstCenterY,
      strideX,
      strideY,
    };
  }

  function gridPoint(row, col) {
    const metrics = getGridMetrics();
    return {
      x: metrics.baseX + col * metrics.strideX,
      y: metrics.baseY + row * metrics.strideY,
    };
  }

  function triggerHitShake(strength = 1) {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const amplitude = HIT_SHAKE_DISTANCE_PX * Math.max(0.8, Math.min(1.6, strength));

    el.grid.animate(
      [
        { transform: "translate3d(0, 0, 0)" },
        { transform: `translate3d(${(-amplitude).toFixed(2)}px, ${(-amplitude * 0.45).toFixed(2)}px, 0)` },
        { transform: `translate3d(${(amplitude * 0.85).toFixed(2)}px, ${(amplitude * 0.35).toFixed(2)}px, 0)` },
        { transform: `translate3d(${(-amplitude * 0.35).toFixed(2)}px, ${(amplitude * 0.2).toFixed(2)}px, 0)` },
        { transform: "translate3d(0, 0, 0)" },
      ],
      {
        duration: HIT_SHAKE_DURATION_MS,
        easing: "cubic-bezier(0.2, 0.8, 0.25, 1)",
      },
    );
  }

  function spawnDrillDebris(row, col, color, incomingDir = { x: 0, y: -1 }) {
    const center = gridPoint(row, col);
    const count = 16;

    const incomingLen = Math.hypot(incomingDir.x, incomingDir.y);
    const normIncoming = incomingLen > 1e-6 ? { x: incomingDir.x / incomingLen, y: incomingDir.y / incomingLen } : { x: 0, y: -1 };

    // Debris trails behind the drill: opposite of movement direction.
    const back = { x: -normIncoming.x, y: -normIncoming.y };
    const perp = { x: -back.y, y: back.x };

    for (let i = 0; i < count; i += 1) {
      const piece = document.createElement("div");
      piece.className = `drill-debris color-${color}`;

      const speed = 56 + Math.random() * 54;
      const backWeight = 0.75 + Math.random() * 0.55;
      const sideWeight = (Math.random() - 0.5) * 0.9;
      const dx = (back.x * backWeight + perp.x * sideWeight) * speed;
      const dy = (back.y * backWeight + perp.y * sideWeight) * speed;
      const drift = (Math.random() - 0.5) * 18;
      const size = 6 + Math.random() * 6;
      const life = 900 + Math.random() * 520;

      piece.style.left = `${center.x}px`;
      piece.style.top = `${center.y}px`;
      piece.style.width = `${size}px`;
      piece.style.height = `${size}px`;
      piece.style.setProperty("--dx", `${dx.toFixed(2)}px`);
      piece.style.setProperty("--dy", `${dy.toFixed(2)}px`);
      piece.style.setProperty("--drift", `${drift.toFixed(2)}px`);
      piece.style.setProperty("--life", `${life.toFixed(0)}ms`);

      el.grid.appendChild(piece);

      window.setTimeout(() => {
        piece.remove();
      }, life + 80);
    }
  }
  function removeTopDrillAndShift(colIndex) {
    const col = game.poolColumns[colIndex] || [];
    if (!col.length) return null;

    const shifted = col.length > 1;
    const removed = col.shift() || null;

    if (shifted) {
      game.poolRiseAnimations.push({
        col: colIndex,
        createdAt: performance.now(),
        durationMs: 220,
      });
    }

    return removed;
  }

  function canDeploy() {
    return game.state === "running" && game.activeDrills < MAX_ACTIVE_DRILLS;
  }

  function canPlaceInTray() {
    return game.tray.length < game.trayCapacity;
  }

  function getBottomMostRowInCol(gridRef, col) {
    for (let r = game.level.rows - 1; r >= 0; r -= 1) {
      if (gridRef[r]?.[col]?.color) return r;
    }
    return -1;
  }

  function findFirstBottomMatchTarget(gridRef, color) {
    for (let c = 0; c < game.level.cols; c += 1) {
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
      const inBounds = candidate.row >= 0 && candidate.row < game.level.rows && candidate.col >= 0 && candidate.col < game.level.cols;

      if (!inBounds) continue;
      if (gridRef[candidate.row]?.[candidate.col]?.color === color) return candidate;
    }

    return null;
  }

  function buildDrillPath(drill, sourceGrid) {
    const virtualGrid = cloneGrid(sourceGrid);
    const path = [{ row: game.level.rows, col: 0, action: "move" }];

    const target = findFirstBottomMatchTarget(virtualGrid, drill.color);
    if (!target) {
      for (let c = 0; c < game.level.cols; c += 1) {
        path.push({ row: game.level.rows, col: c, action: "move" });
      }
      return { path, result: "tray", virtualGrid };
    }

    for (let c = 0; c <= target.col; c += 1) {
      path.push({ row: game.level.rows, col: c, action: "move" });
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

        // Keep drilling same durable tile until it breaks.
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

  function animateToTray(sprite, drill, done) {
    const slots = [...el.traySlots.querySelectorAll(".slot")];
    const targetSlot = slots[Math.min(game.tray.length, game.trayCapacity - 1)] || el.traySlots;

    const spriteRect = sprite.getBoundingClientRect();
    const targetRect = targetSlot.getBoundingClientRect();

    const energyTag = sprite.querySelector(".drill-energy");
    if (energyTag) energyTag.textContent = String(drill.energy);

    const startX = spriteRect.left + spriteRect.width / 2;
    const startY = spriteRect.top + spriteRect.height / 2;
    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;

    sprite.style.position = "fixed";
    sprite.style.left = `${startX}px`;
    sprite.style.top = `${startY}px`;
    sprite.style.zIndex = "9999";
    document.body.appendChild(sprite);

    const startedAt = performance.now();

    function frame(ts) {
      const t = Math.min(1, (ts - startedAt) / TRAY_RETURN_DURATION_MS);
      const eased = 1 - Math.pow(1 - t, 3);

      const x = startX + (endX - startX) * eased;
      const y = startY + (endY - startY) * eased;
      sprite.style.left = `${x}px`;
      sprite.style.top = `${y}px`;

      if (t >= 1) {
        sprite.remove();
        done();
        return;
      }

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function maybeWin() {
    if (game.state !== "running") return;
    if (countTiles() !== 0) return;

    game.state = "won";
    setStatus("All tiles cleared. You win!");
    renderAll();
  }

  function finalizeDrill(result, drill, sprite) {
    if (result === "tray" && drill.energy > 0) {
      if (!canPlaceInTray()) {
        sprite.remove();
        game.state = "lost";
        setStatus("Tray overflow. You lose.");
        game.activeDrills = Math.max(0, game.activeDrills - 1);
        renderAll();
        return;
      }

      animateToTray(sprite, drill, () => {
        game.tray.push({ color: drill.color, energy: drill.energy });
        game.activeDrills = Math.max(0, game.activeDrills - 1);

        if (game.state === "running") {
          setStatus(`Drill parked in tray (${drill.energy} energy).`);
        }

        renderAll();
        maybeWin();
      });
      return;
    }

    sprite.remove();
    game.activeDrills = Math.max(0, game.activeDrills - 1);

    if (result === "depleted" && game.state === "running") {
      setStatus("Drill depleted and removed.");
    }

    renderAll();
    maybeWin();
  }

  function animateDrill(deployed, resultPackage) {
    const { path, result } = resultPackage;
    if (!path.length) return;

    const liveDrill = { ...deployed };

    const sprite = document.createElement("div");
    sprite.className = `drill-sprite color-${liveDrill.color}`;

    const energyTag = document.createElement("div");
    energyTag.className = "drill-energy";
    energyTag.textContent = String(liveDrill.energy);

    sprite.appendChild(energyTag);
    el.grid.appendChild(sprite);

    game.activeDrills += 1;
    if (game.state === "running") {
      setStatus(`Drills active: ${game.activeDrills}`);
    }

    const worldPoints = path.map((node) => ({
      node,
      pos: gridPoint(node.row, node.col),
    }));

    const segmentLengths = [];
    let totalDistance = 0;

    for (let i = 0; i < worldPoints.length - 1; i += 1) {
      const a = worldPoints[i].pos;
      const b = worldPoints[i + 1].pos;
      let len = Math.hypot(b.x - a.x, b.y - a.y);

      // Only hold when we hit the same durable tile repeatedly.
      // This avoids pausing on every normal move->destroy pair.
      const fromNode = worldPoints[i].node;
      const toNode = worldPoints[i + 1].node;
      const repeatedDurableHit =
        fromNode.action === "destroy" && toNode.action === "destroy" && fromNode.row === toNode.row && fromNode.col === toNode.col;

      if (repeatedDurableHit && len < 0.001) {
        len = DRILL_HIT_HOLD_DISTANCE_PX;
      }

      segmentLengths.push(len);
      totalDistance += len;
    }

    const startTs = performance.now();
    let appliedNodeIndex = 0;

    const incomingDirs = worldPoints.map(() => ({ x: 0, y: -1 }));
    for (let i = 1; i < worldPoints.length; i += 1) {
      const prev = worldPoints[i - 1].pos;
      const curr = worldPoints[i].pos;
      const dx = curr.x - prev.x;
      const dy = curr.y - prev.y;
      const len = Math.hypot(dx, dy);

      if (len > 1e-6) {
        incomingDirs[i] = { x: dx / len, y: dy / len };
      } else {
        incomingDirs[i] = incomingDirs[i - 1];
      }
    }

    function applyPathAction(node, nodeIndex) {
      if (node.action === "destroy") {
        const tile = game.grid[node.row]?.[node.col] ?? null;
        if (tile?.color === liveDrill.color && tile.hp > 0) {
          spawnDrillDebris(node.row, node.col, liveDrill.color, incomingDirs[nodeIndex]);
          triggerHitShake(1);
          tile.hp = Math.max(0, tile.hp - 1);
          liveDrill.energy = Math.max(0, liveDrill.energy - 1);

          if (tile.hp <= 0) {
            game.grid[node.row][node.col] = null;
          }

          renderGrid();
          maybeWin();
        }
      }
      energyTag.textContent = String(liveDrill.energy);
    }

    function placeAtDistance(distance) {
      if (worldPoints.length === 1 || totalDistance <= 0) {
        const p = worldPoints[0].pos;
        sprite.style.left = `${p.x}px`;
        sprite.style.top = `${p.y}px`;
        return;
      }

      let remaining = distance;
      let segIndex = 0;

      while (segIndex < segmentLengths.length && remaining > segmentLengths[segIndex]) {
        remaining -= segmentLengths[segIndex];
        segIndex += 1;
      }

      if (segIndex >= segmentLengths.length) {
        const p = worldPoints[worldPoints.length - 1].pos;
        sprite.style.left = `${p.x}px`;
        sprite.style.top = `${p.y}px`;
        return;
      }

      const a = worldPoints[segIndex].pos;
      const b = worldPoints[segIndex + 1].pos;
      const len = Math.max(1e-6, segmentLengths[segIndex]);
      const t = remaining / len;

      const x = a.x + (b.x - a.x) * t;
      const y = a.y + (b.y - a.y) * t;
      sprite.style.left = `${x}px`;
      sprite.style.top = `${y}px`;
    }

    function frame(ts) {
      if (game.state === "lost") {
        sprite.remove();
        game.activeDrills = Math.max(0, game.activeDrills - 1);
        return;
      }

      const elapsedSec = Math.max(0, ts - startTs) / 1000;
      const traveled = Math.min(totalDistance, elapsedSec * DRILL_SPEED_PX_PER_SEC);

      // Apply all node actions reached by this frame.
      let progressed = 0;
      for (let i = 0; i < segmentLengths.length; i += 1) {
        progressed += segmentLengths[i];

        const targetNodeIndex = i + 1;
        while (appliedNodeIndex < targetNodeIndex && traveled >= progressed - 0.0001) {
          appliedNodeIndex += 1;
          applyPathAction(worldPoints[appliedNodeIndex].node, appliedNodeIndex);
        }
      }

      placeAtDistance(traveled);

      if (traveled >= totalDistance - 0.0001) {
        const finalResult = liveDrill.energy <= 0 ? "depleted" : result;
        finalizeDrill(finalResult, liveDrill, sprite);
        return;
      }

      requestAnimationFrame(frame);
    }

    const firstPos = worldPoints[0].pos;
    sprite.style.left = `${firstPos.x}px`;
    sprite.style.top = `${firstPos.y}px`;
    requestAnimationFrame(frame);
  }

  function deployDrill(drill) {
    if (!canDeploy()) return;

    const resultPackage = buildDrillPath(drill, game.plannedGrid);
    // Reserve future damage immediately so concurrent drills don't overlap.
    game.plannedGrid = resultPackage.virtualGrid;
    animateDrill(drill, resultPackage);
  }

  function tryDeploy(colIndex) {
    if (game.state !== "running") return;
    if (game.activeDrills >= MAX_ACTIVE_DRILLS) {
      setStatus(`Active drill limit reached (${MAX_ACTIVE_DRILLS}). Wait for one to finish.`);
      return;
    }

    if (!canDeploy()) return;

    const top = game.poolColumns[colIndex]?.[0] || null;
    if (!top) return;

    const deployed = removeTopDrillAndShift(colIndex);
    if (!deployed) return;

    renderPool();
    deployDrill(deployed);
  }

  function tryDeployFromTray(trayIndex) {
    if (game.state !== "running") return;
    if (game.activeDrills >= MAX_ACTIVE_DRILLS) {
      setStatus(`Active drill limit reached (${MAX_ACTIVE_DRILLS}). Wait for one to finish.`);
      return;
    }

    if (!canDeploy()) return;

    const trayDrill = game.tray[trayIndex] || null;
    if (!trayDrill) return;

    const deployed = game.tray.splice(trayIndex, 1)[0];
    renderTray();
    deployDrill(deployed);
  }

  function renderGrid() {
    const rows = game.level.rows;
    const cols = game.level.cols;

    el.grid.style.gridTemplateColumns = `repeat(${cols}, var(--tile-size))`;
    el.grid.querySelectorAll(".tile").forEach((tile) => tile.remove());

    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        const tileData = game.grid[r]?.[c] ?? null;
        const tile = document.createElement("div");
        tile.className = "tile";

        if (!tileData?.color) {
          tile.classList.add("empty");
        } else {
          tile.classList.add(`color-${tileData.color}`);
          if (tileData.hp > 1) {
            tile.dataset.hp = String(tileData.hp);
          }
        }

        el.grid.appendChild(tile);
      }
    }

    el.tilesRemaining.textContent = `Tiles: ${countTiles()}`;
  }

  function makeDrillToken(drill, extraClasses = [], options = {}) {
    const { hideColor = false } = options;
    const token = document.createElement("div");
    token.className = hideColor ? "pool-drill color-hidden" : `pool-drill color-${drill.color}`;
    if (extraClasses.length) {
      token.classList.add(...extraClasses);
    }

    const label = document.createElement("span");
    label.textContent = hideColor ? "?" : drill.color[0].toUpperCase();

    const badge = document.createElement("div");
    badge.className = "energy-badge";
    badge.textContent = String(drill.energy);

    token.appendChild(label);
    token.appendChild(badge);
    return token;
  }

  function renderTray() {
    el.traySlots.innerHTML = "";

    for (let i = 0; i < game.trayCapacity; i += 1) {
      const slot = document.createElement("div");
      slot.className = "slot";

      const drill = game.tray[i];
      if (drill) {
        slot.classList.add("full");
        const token = makeDrillToken(drill);

        if (canDeploy()) {
          token.classList.add("tray-deployable");
          token.title = "Tap to deploy from tray";
          token.addEventListener("click", () => tryDeployFromTray(i));
        } else {
          token.classList.add("disabled");
        }

        slot.appendChild(token);
      }

      el.traySlots.appendChild(slot);
    }
  }

  function renderPool() {
    const now = performance.now();
    game.poolRiseAnimations = game.poolRiseAnimations.filter((a) => now - a.createdAt < a.durationMs + 30);

    el.poolColumns.innerHTML = "";

    let hasTopDrill = false;
    const rows = game.level.poolRows;

    for (let c = 0; c < FIXED_POOL_COLS; c += 1) {
      const colWrap = document.createElement("div");
      colWrap.className = "pool-col";

      for (let r = 0; r < rows; r += 1) {
        const drill = game.poolColumns[c]?.[r] || null;

        if (!drill) {
          const empty = document.createElement("div");
          empty.className = "pool-empty";
          colWrap.appendChild(empty);
          continue;
        }

        const classes = [];
        if (r > 0) classes.push("stacked");

        const hasRise = r === 0 && game.poolRiseAnimations.some((a) => a.col === c && now - a.createdAt < a.durationMs);
        if (hasRise) {
          classes.push("rise-in");
        }

        const hideColor = Boolean(drill.hiddenUntilTopRow) && r > 0;
        const item = makeDrillToken(drill, classes, { hideColor });

        if (r === 0) {
          hasTopDrill = true;
          item.classList.add("top");

          if (canDeploy()) {
            item.addEventListener("click", () => tryDeploy(c));
            item.title = "Tap to deploy";
          } else {
            item.classList.add("disabled");
          }
        }

        colWrap.appendChild(item);
      }

      el.poolColumns.appendChild(colWrap);
    }

    if (game.state === "won") {
      el.poolHint.textContent = "Victory";
    } else if (game.state === "lost") {
      el.poolHint.textContent = "Defeat";
    } else if (!hasTopDrill && game.tray.length === 0) {
      el.poolHint.textContent = "No drills left";
    } else {
      el.poolHint.textContent = "Top row + tray deployable";
    }
  }

  function renderAll() {
    renderGrid();
    renderTray();
    renderPool();
  }

  function wireEvents() {
    el.restartBtn.addEventListener("click", () => {
      initLevel(game.levelIndex);
    });

    el.nextLevelBtn.addEventListener("click", () => {
      goToNextLevel();
    });
  }

  function bootstrap() {
    wireEvents();
    initLevel(0);
  }

  bootstrap();
})();
