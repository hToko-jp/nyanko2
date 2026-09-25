/* ============================================
   にゃんこバトル - Game Engine
   ============================================ */

// ===== Game Configuration =====
const CONFIG = {
    fps: 60,
    groundY: 0.78,          // ground line (% of canvas height)
    baseWidth: 80,
    moneyPerSecond: 16,
    maxMoney: 9999,
    canvasAspect: 16 / 9,
};

// ===== Cat Unit Definitions =====
const CAT_TYPES = [
    {
        id: 'tsumugu',
        name: 'つむぐ',
        emoji: '👦',
        cost: 50,
        cooldown: 1.0,
        hp: 120,
        atk: 25,
        speed: 2.5,
        range: 30,
        attackSpeed: 1.0,
        color: '#3498db',
        desc: 'バランスの取れた男の子',
        size: 30,
        kb: 3,
    },
    {
        id: 'tsumugi',
        name: 'つむぎ',
        emoji: '👧',
        cost: 65,
        cooldown: 1.2,
        hp: 90,
        atk: 35,
        speed: 3.5,
        range: 35,
        attackSpeed: 0.8,
        color: '#e74c3c',
        desc: 'すばしっこい女の子',
        size: 28,
        kb: 2,
    },
    {
        id: 'souta',
        name: 'そうた',
        emoji: '👦🏻',
        cost: 100,
        cooldown: 2.0,
        hp: 400,
        atk: 15,
        speed: 1.5,
        range: 25,
        attackSpeed: 1.5,
        color: '#2ecc71',
        desc: 'タフで頼りになるお兄ちゃん',
        size: 35,
        kb: 4,
    },
    {
        id: 'mei',
        name: 'めい',
        emoji: '👧🏻',
        cost: 120,
        cooldown: 1.8,
        hp: 150,
        atk: 30,
        speed: 2.2,
        range: 30,
        attackSpeed: 1.0,
        color: '#ffb8b8',
        desc: '優しくてかしこい女の子',
        size: 30,
        kb: 3,
    },
    {
        id: 'taishi',
        name: 'たいし',
        emoji: '👦🏼',
        cost: 180,
        cooldown: 3.0,
        hp: 750,
        atk: 20,
        speed: 1.2,
        range: 25,
        attackSpeed: 1.2,
        color: '#87ceeb',
        desc: '守りが固くみんなの壁になる',
        size: 38,
        kb: 5,
    },
    {
        id: 'kousei',
        name: 'こうせい',
        emoji: '🏃‍♂️',
        cost: 250,
        cooldown: 3.5,
        hp: 180,
        atk: 75,
        speed: 5.0,
        range: 28,
        attackSpeed: 0.6,
        color: '#2c2c54',
        desc: '足が速くてすぐ駆けつける',
        size: 28,
        kb: 2,
    },
    {
        id: 'hinami',
        name: 'ひなみ',
        emoji: '👧🌸',
        cost: 350,
        cooldown: 5.0,
        hp: 180,
        atk: 110,
        speed: 1.8,
        range: 160,
        attackSpeed: 2.5,
        color: '#9b59b6',
        desc: '遠くから的確にサポートする',
        size: 32,
        kb: 2,
    },
    {
        id: 'konomi',
        name: 'このみ',
        emoji: '👧🎀',
        cost: 500,
        cooldown: 6.0,
        hp: 550,
        atk: 140,
        speed: 2.2,
        range: 35,
        attackSpeed: 1.5,
        color: '#f1c40f',
        desc: '勇敢に一番前で戦う',
        size: 36,
        kb: 3,
    },
    {
        id: 'rentarou',
        name: 'れんたろう',
        emoji: '🏋️',
        cost: 650,
        cooldown: 8.0,
        hp: 1800,
        atk: 200,
        speed: 1.0,
        range: 45,
        attackSpeed: 3.0,
        color: '#e17055',
        desc: '強くてとても頼もしい',
        size: 55,
        kb: 6,
    },
    {
        id: 'yuuma',
        name: 'ゆうま',
        emoji: '👑',
        cost: 1100,
        cooldown: 12.0,
        hp: 4000,
        atk: 400,
        speed: 1.5,
        range: 80,
        attackSpeed: 4.0,
        color: '#fdcb6e',
        desc: '誰もが認める最強の男の子',
        size: 65,
        kb: 10,
    }
];

// ===== Enemy Unit Definitions =====
const ENEMY_TYPES = [
    {
        id: 'dog',
        name: 'ところ',
        emoji: '🐕',
        hp: 80,
        atk: 15,
        speed: 2.0,
        range: 25,
        attackSpeed: 1.0,
        color: '#b5651d',
        size: 28,
        money: 30,
        kb: 3,
    },
    {
        id: 'snake',
        name: 'えりこ',
        emoji: '🐍',
        hp: 120,
        atk: 30,
        speed: 1.5,
        range: 50,
        attackSpeed: 1.5,
        color: '#27ae60',
        size: 30,
        money: 60,
        kb: 2,
    },
    {
        id: 'robot',
        name: 'みさき',
        emoji: '🤖',
        hp: 300,
        atk: 40,
        speed: 1.0,
        range: 30,
        attackSpeed: 2.0,
        color: '#95a5a6',
        size: 38,
        money: 150,
        kb: 5,
    },
    {
        id: 'demon',
        name: 'テス',
        emoji: '👿',
        hp: 200,
        atk: 60,
        speed: 2.5,
        range: 35,
        attackSpeed: 1.5,
        color: '#e74c3c',
        size: 35,
        money: 200,
        kb: 3,
    },
    {
        id: 'dragon',
        name: 'もとこ',
        emoji: '🐉',
        hp: 1500,
        atk: 100,
        speed: 0.8,
        range: 100,
        attackSpeed: 3.0,
        color: '#6c3483',
        size: 55,
        money: 500,
        kb: 6,
    },
    {
        id: 'metal_dog',
        name: 'きょーとー',
        emoji: '🐢',
        hp: 45,
        atk: 25,
        speed: 1.2,
        range: 25,
        attackSpeed: 1.0,
        color: '#7f8c8d',
        size: 26,
        money: 100,
        kb: 2,
        isMetal: true,
    },
    {
        id: 'sniper',
        name: 'こーちょー',
        emoji: '🦅',
        hp: 150,
        atk: 80,
        speed: 1.8,
        range: 300,
        attackSpeed: 3.5,
        color: '#34495e',
        size: 30,
        money: 120,
        kb: 4,
    },
    {
        id: 'adil',
        name: 'アディル',
        emoji: '🦍',
        hp: 999999, // 圧倒的な体力
        atk: 500, // 最強の物理攻撃
        speed: 0.6, // 少し遅い
        range: 40,
        attackSpeed: 2.0,
        color: '#111111', // 黒色
        size: 85, // 大きい
        money: 2000,
        kb: 1,
        requiresItem: true, // アイテムでのみ倒せる
    }
];

// ===== Stage Definitions =====
const STAGES = [
    {
        id: 1,
        name: 'はじまりの草原',
        baseHp: 800,
        moneyRate: 1.2,
        waves: [
            { time: 3, type: 0, count: 2, interval: 3.0 },
            { time: 15, type: 0, count: 3, interval: 2.5 },
            { time: 30, type: 0, count: 4, interval: 2.0 },
        ],
        bg: '#87ceeb',
    },
    {
        id: 2,
        name: '夕焼けの丘',
        baseHp: 1000,
        moneyRate: 1.2,
        waves: [
            { time: 3, type: 0, count: 3, interval: 2.5 },
            { time: 15, type: 0, count: 4, interval: 2.0 },
            { time: 28, type: 1, count: 2, interval: 4.0 },
        ],
        bg: '#f39c12',
    },
    {
        id: 3,
        name: '暗黒の森',
        baseHp: 1500,
        moneyRate: 1.3,
        waves: [
            { time: 3, type: 0, count: 3, interval: 2.0 },
            { time: 14, type: 1, count: 2, interval: 3.0 },
            { time: 25, type: 0, count: 5, interval: 1.8 },
            { time: 40, type: 1, count: 3, interval: 2.5 },
        ],
        bg: '#2c3e50',
    },
    {
        id: 4,
        name: '炎の洞窟',
        baseHp: 2000,
        moneyRate: 1.3,
        waves: [
            { time: 3, type: 0, count: 4, interval: 2.0 },
            { time: 14, type: 1, count: 3, interval: 2.5 },
            { time: 26, type: 2, count: 1, interval: 1.0 },
            { time: 35, type: 0, count: 6, interval: 1.5 },
            { time: 48, type: 1, count: 3, interval: 2.0 },
        ],
        bg: '#c0392b',
    },
    {
        id: 5,
        name: '氷の城',
        baseHp: 2500,
        moneyRate: 1.4,
        waves: [
            { time: 3, type: 1, count: 3, interval: 2.5 },
            { time: 14, type: 0, count: 5, interval: 1.5 },
            { time: 25, type: 2, count: 2, interval: 4.0 },
            { time: 35, type: 3, count: 1, interval: 1.0 },
            { time: 45, type: 0, count: 6, interval: 1.2 },
            { time: 60, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#3498db',
    },
    {
        id: 6,
        name: '天空の塔',
        baseHp: 3500,
        moneyRate: 1.5,
        waves: [
            { time: 3, type: 0, count: 8, interval: 1.5 },
            { time: 18, type: 1, count: 4, interval: 2.0 },
            { time: 30, type: 2, count: 2, interval: 3.0 },
            { time: 42, type: 3, count: 2, interval: 3.0 },
            { time: 55, type: 4, count: 1, interval: 1.0 },
            { time: 70, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#8e44ad',
    },
    {
        id: 7,
        name: '魔王の城',
        baseHp: 5000,
        moneyRate: 1.6,
        waves: [
            { time: 3, type: 0, count: 10, interval: 1.0 },
            { time: 16, type: 1, count: 5, interval: 1.5 },
            { time: 28, type: 2, count: 3, interval: 2.5 },
            { time: 42, type: 3, count: 3, interval: 2.0 },
            { time: 58, type: 4, count: 1, interval: 1.0 },
            { time: 70, type: 3, count: 2, interval: 2.0 },
            { time: 85, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#1a1a2e',
    },
    {
        id: 8,
        name: '最終決戦',
        baseHp: 7000,
        moneyRate: 1.8,
        waves: [
            { time: 3, type: 0, count: 15, interval: 0.8 },
            { time: 18, type: 1, count: 6, interval: 1.5 },
            { time: 32, type: 2, count: 4, interval: 2.0 },
            { time: 45, type: 3, count: 4, interval: 2.0 },
            { time: 60, type: 4, count: 1, interval: 1.0 },
            { time: 75, type: 4, count: 1, interval: 1.0 },
            { time: 90, type: 3, count: 5, interval: 1.2 },
            { time: 105, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#0d0d0d',
    },
    {
        id: 9,
        name: '鋼鉄の谷',
        baseHp: 9000,
        moneyRate: 2.0,
        waves: [
            { time: 3, type: 5, count: 2, interval: 4.0 },
            { time: 15, type: 6, count: 2, interval: 3.0 },
            { time: 30, type: 5, count: 5, interval: 2.0 },
            { time: 45, type: 6, count: 3, interval: 2.5 },
            { time: 60, type: 1, count: 10, interval: 0.5 },
            { time: 70, type: 5, count: 5, interval: 1.0 },
            { time: 85, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#7f8c8d',
    },
    {
        id: 10,
        name: '5年生の卒業式',
        baseHp: 15000,
        moneyRate: 2.2,
        waves: [
            { time: 3, type: 0, count: 20, interval: 0.5 },
            { time: 10, type: 2, count: 3, interval: 1.5 },
            { time: 25, type: 6, count: 4, interval: 2.0 },
            { time: 40, type: 5, count: 6, interval: 1.5 },
            { time: 55, type: 4, count: 2, interval: 2.0 },
            { time: 75, type: 3, count: 8, interval: 1.0 },
            { time: 90, type: 4, count: 3, interval: 1.0 },
            { time: 105, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#c0392b',
    },
    {
        id: 11,
        name: '中学校への道',
        baseHp: 20000,
        moneyRate: 2.4,
        waves: [
            { time: 3, type: 0, count: 10, interval: 1.0 },
            { time: 10, type: 1, count: 10, interval: 1.0 },
            { time: 25, type: 2, count: 5, interval: 1.5 },
            { time: 40, type: 6, count: 5, interval: 2.0 },
            { time: 55, type: 4, count: 3, interval: 2.5 },
            { time: 75, type: 5, count: 8, interval: 1.5 },
            { time: 90, type: 4, count: 4, interval: 2.0 },
            { time: 110, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#34495e',
    },
    {
        id: 12,
        name: '青春の始まり',
        baseHp: 25000,
        moneyRate: 2.6,
        waves: [
            { time: 3, type: 1, count: 15, interval: 0.8 },
            { time: 12, type: 3, count: 5, interval: 1.5 },
            { time: 30, type: 6, count: 8, interval: 1.5 },
            { time: 45, type: 4, count: 4, interval: 2.0 },
            { time: 65, type: 5, count: 10, interval: 1.0 },
            { time: 85, type: 2, count: 8, interval: 1.0 },
            { time: 100, type: 4, count: 5, interval: 2.0 },
            { time: 115, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#16a085',
    },
    {
        id: 13,
        name: '試練の山',
        baseHp: 32000,
        moneyRate: 2.8,
        waves: [
            { time: 3, type: 2, count: 10, interval: 1.0 },
            { time: 15, type: 3, count: 8, interval: 1.2 },
            { time: 35, type: 5, count: 12, interval: 1.5 },
            { time: 55, type: 6, count: 10, interval: 1.5 },
            { time: 75, type: 4, count: 6, interval: 1.8 },
            { time: 95, type: 3, count: 15, interval: 0.8 },
            { time: 110, type: 4, count: 7, interval: 1.5 },
            { time: 125, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#8e44ad',
    },
    {
        id: 14,
        name: '宇宙への挑戦',
        baseHp: 40000,
        moneyRate: 3.0,
        waves: [
            { time: 3, type: 3, count: 10, interval: 1.0 },
            { time: 15, type: 6, count: 12, interval: 1.2 },
            { time: 35, type: 4, count: 5, interval: 2.0 },
            { time: 55, type: 5, count: 15, interval: 1.0 },
            { time: 75, type: 2, count: 15, interval: 0.8 },
            { time: 95, type: 4, count: 8, interval: 1.5 },
            { time: 115, type: 4, count: 4, interval: 1.0 },
            { time: 130, type: 3, count: 20, interval: 0.5 },
            { time: 145, type: 7, count: 1, interval: 1.0 },
        ],
        bg: '#2c3e50',
    },
    {
        id: 15,
        name: '最強の伝説',
        baseHp: 50000,
        moneyRate: 3.2,
        waves: [
            { time: 3, type: 5, count: 15, interval: 1.0 },
            { time: 15, type: 6, count: 15, interval: 1.0 },
            { time: 35, type: 4, count: 10, interval: 1.5 },
            { time: 60, type: 4, count: 10, interval: 1.0 },
            { time: 85, type: 4, count: 5, interval: 0.5 },
            { time: 105, type: 4, count: 15, interval: 1.0 },
            { time: 130, type: 3, count: 30, interval: 0.3 },
            { time: 150, type: 4, count: 20, interval: 0.8 },
            { time: 165, type: 7, count: 2, interval: 10.0 }, // 最終面は2体
        ],
        bg: '#000000',
    },
];

// ===== Game State =====
class GameState {
    constructor() {
        this.screen = 'title';
        this.clearedStages = this.loadProgress();
        this.globalStats = this.loadStats();
        this.currentStage = null;
    }

    loadProgress() {
        try {
            const data = localStorage.getItem('nyanko_progress');
            return data ? JSON.parse(data) : {};
        } catch {
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('nyanko_progress', JSON.stringify(this.clearedStages));
        } catch { }
    }

    loadStats() {
        try {
            const data = localStorage.getItem('nyanko_stats');
            return data ? JSON.parse(data) : { unitsSpawned: 0, moneySpent: 0, cannonUsed: 0, bananaUsed: 0, playTimeTotal: 0 };
        } catch {
            return { unitsSpawned: 0, moneySpent: 0, cannonUsed: 0, bananaUsed: 0, playTimeTotal: 0 };
        }
    }

    saveStats() {
        try {
            localStorage.setItem('nyanko_stats', JSON.stringify(this.globalStats));
        } catch { }
    }

    clearStage(stageId, stars) {
        const prev = this.clearedStages[stageId] || 0;
        if (stars > prev) {
            this.clearedStages[stageId] = stars;
            this.saveProgress();
        }
    }

    isStageUnlocked(stageId) {
        if (stageId === 1) return true;
        return (this.clearedStages[stageId - 1] || 0) > 0;
    }
}

// ===== Battle Unit Entity =====
class Unit {
    constructor(type, isCat, x, statMultiplier = 1) {
        this.type = type;
        this.isCat = isCat;
        this.x = x;
        this.maxHp = Math.floor(type.hp * statMultiplier);
        this.hp = this.maxHp;
        this.atk = Math.floor(type.atk * statMultiplier);
        // Add random variance to speed (-5% to +5%) and range (-3 to +3) to prevent perfect overlapping
        this.speed = type.speed * (0.95 + Math.random() * 0.1);
        this.range = type.range + (Math.random() * 6 - 3);
        this.attackSpeed = type.attackSpeed;
        this.size = type.size;
        this.color = type.color;
        this.emoji = type.emoji;
        this.kb = type.kb;
        this.kbRemaining = type.kb;
        this.kbThreshold = this.maxHp / this.kb;

        this.state = 'walk'; // walk, attack, kb, dead
        this.attackTimer = 0;
        this.attackAnimTime = 0;
        this.kbTimer = 0;
        this.kbDistance = 0;
        this.deathTimer = 0;
        this.animOffset = 0;
        this.walkCycle = Math.random() * Math.PI * 2; // Randomize walk cycle start
        this.yOffset = (Math.random() - 0.5) * 16; // Random visual Y offset (depth)
        this.damageDealtInSwing = false;
    }

    getBounds() {
        return {
            left: this.x - this.size / 2,
            right: this.x + this.size / 2,
        };
    }
}

// ===== Battle Scene =====
class Battle {
    constructor(stageData, canvas, ctx) {
        this.stage = stageData;
        this.canvas = canvas;
        this.ctx = ctx;

        // State
        this.playerBase = { hp: 5000, maxHp: 5000, x: 0 };
        this.enemyBase = { hp: stageData.baseHp, maxHp: stageData.baseHp, x: 0 };
        this.catUnits = [];
        this.enemyUnits = [];
        this.money = 200;
        this.time = 0;
        this.speed = 1;
        this.paused = false;
        this.gameOver = false;
        this.result = null;
        this.effects = [];

        // Cannon State
        this.cannonCooldown = 30; // 30 seconds to charge
        this.cannonTimer = 0;
        this.cannonFiringTime = 0;

        // Cooldowns
        this.cooldowns = CAT_TYPES.map(() => 0);

        // Wave management
        this.waveIndex = 0;
        this.waveSpawnTimers = [];
        this.initWaves();

        // Stats tracking
        this.stats = { unitsSpawned: 0, moneySpent: 0, cannonUsed: 0, bananaUsed: 0 };

        // Visual
        this.bgOffset = 0;
        this.clouds = this.generateClouds();
        this.particles = [];
    }

    initWaves() {
        this.waveSpawnTimers = this.stage.waves.map(w => ({
            ...w,
            spawned: 0,
            nextSpawn: w.time,
            active: false,
        }));
    }

    generateClouds() {
        const clouds = [];
        for (let i = 0; i < 6; i++) {
            clouds.push({
                x: Math.random() * 2000,
                y: 20 + Math.random() * 80,
                w: 60 + Math.random() * 80,
                speed: 0.2 + Math.random() * 0.3,
                opacity: 0.3 + Math.random() * 0.4,
            });
        }
        return clouds;
    }

    get fieldWidth() {
        return this.canvas.width;
    }

    get groundY() {
        return this.canvas.height * CONFIG.groundY;
    }

    spawnCat(typeIndex) {
        if (this.gameOver || this.paused) return false;
        const type = CAT_TYPES[typeIndex];
        if (this.money < type.cost) return false;
        if (this.cooldowns[typeIndex] > 0) return false;

        this.money -= type.cost;
        this.cooldowns[typeIndex] = type.cooldown;

        this.stats.unitsSpawned++;
        this.stats.moneySpent += type.cost;

        const unit = new Unit(type, true, this.playerBase.x + CONFIG.baseWidth + 20);
        this.catUnits.push(unit);

        // Spawn effect
        this.addEffect(unit.x, this.groundY - unit.size / 2, '✨', 0.5);
        return true;
    }

    spawnEnemy(typeIndex, statMultiplier = 1) {
        const type = ENEMY_TYPES[typeIndex];
        const unit = new Unit(type, false, this.enemyBase.x - CONFIG.baseWidth - 20, statMultiplier);
        this.enemyUnits.push(unit);
    }

    addEffect(x, y, text, duration) {
        this.effects.push({ x, y, text, duration, timer: 0 });
    }

    addDamageNumber(x, y, damage, isCrit = false) {
        this.effects.push({
            x: x + (Math.random() - 0.5) * 20,
            y: y - 10,
            text: `-${damage}`,
            duration: 0.8,
            timer: 0,
            isDamage: true,
            isCrit,
            vy: -2,
        });
    }

    update(dt) {
        if (this.paused || this.gameOver) return;

        dt *= this.speed;
        this.time += dt;

        // Money generation
        this.money = Math.min(CONFIG.maxMoney,
            this.money + CONFIG.moneyPerSecond * (this.stage.moneyRate || 1) * dt);

        // Cannon generation
        if (this.cannonTimer < this.cannonCooldown) {
            this.cannonTimer = Math.min(this.cannonCooldown, this.cannonTimer + dt);
        }

        // Cannon Visual Timer
        if (this.cannonFiringTime > 0) {
            this.cannonFiringTime -= dt;
        }

        // Cooldowns
        for (let i = 0; i < this.cooldowns.length; i++) {
            if (this.cooldowns[i] > 0) {
                this.cooldowns[i] = Math.max(0, this.cooldowns[i] - dt);
            }
        }

        // Wave spawning
        for (const wave of this.waveSpawnTimers) {
            if (wave.spawned >= wave.count) continue;
            if (this.time >= wave.nextSpawn) {
                // Scale enemy stats based on stage
                const stageMultiplier = 1 + (this.stage.id - 1) * 0.15;
                this.spawnEnemy(wave.type, stageMultiplier);
                wave.spawned++;
                wave.nextSpawn = this.time + wave.interval;
            }
        }

        // Update units
        this.updateUnits(this.catUnits, this.enemyUnits, this.enemyBase, dt);
        this.updateUnits(this.enemyUnits, this.catUnits, this.playerBase, dt);

        // Remove dead units
        this.catUnits = this.catUnits.filter(u => u.state !== 'dead' || u.deathTimer < 0.5);
        this.enemyUnits = this.enemyUnits.filter(u => u.state !== 'dead' || u.deathTimer < 0.5);

        // Update effects
        this.effects = this.effects.filter(e => {
            e.timer += dt;
            if (e.vy !== undefined) {
                e.y += e.vy;
                e.vy += 3 * dt;
            }
            return e.timer < e.duration;
        });

        // Update clouds
        for (const cloud of this.clouds) {
            cloud.x -= cloud.speed * this.speed;
            if (cloud.x + cloud.w < 0) {
                cloud.x = this.fieldWidth + 20;
            }
        }

        // Check win/lose
        if (this.enemyBase.hp <= 0) {
            this.gameOver = true;
            this.result = 'win';
        } else if (this.playerBase.hp <= 0) {
            this.gameOver = true;
            this.result = 'lose';
        }
    }

    fireCannon() {
        if (this.cannonTimer < this.cannonCooldown) return;
        this.cannonTimer = 0;
        this.cannonFiringTime = 0.6; // duration of laser beam
        this.stats.cannonUsed++;

        // Huge screen-wide effect
        this.addEffect(this.fieldWidth / 2, this.groundY - 100, '🌋 5年生キャノン!! 🌋', 1.5);

        // Damage all active enemies
        for (const opp of this.enemyUnits) {
            if (opp.state === 'dead') continue;

            // Cannon does 500 flat damage, ignores metal defense slightly (5 dmg to metal)
            let dmg = opp.type.isMetal ? 5 : 500;
            if (opp.type.requiresItem) dmg = 0;

            if (dmg > 0) {
                opp.hp -= dmg;
                this.addDamageNumber(opp.x, this.groundY - opp.size, dmg, true);
            } else {
                this.addEffect(opp.x, this.groundY - opp.size / 2, '🛡️', 0.5);
            }

            if (opp.hp <= 0) {
                opp.state = 'dead';
                opp.deathTimer = 0;
                this.addEffect(opp.x, this.groundY - opp.size / 2, '💀', 0.5);
                if (opp.type.money) {
                    this.money = Math.min(CONFIG.maxMoney, this.money + opp.type.money);
                }
            } else {
                opp.state = 'kb';
                opp.kbTimer = 0.8; // Huge knockback
            }
        }
    }

    useItem() {
        if (this.money < 1000) return;
        this.money -= 1000;
        this.stats.bananaUsed++;
        this.stats.moneySpent += 1000;
        this.addEffect(this.fieldWidth / 2, this.groundY - 150, '🍌 伝説のバナナ!! 🍌', 2.0);

        let hit = false;
        for (const opp of this.enemyUnits) {
            if (opp.type.requiresItem && opp.state !== 'dead') {
                opp.hp = 0;
                opp.state = 'dead';
                opp.deathTimer = 0;
                this.addDamageNumber(opp.x, this.groundY - opp.size, 999999, true);
                this.addEffect(opp.x, this.groundY - opp.size / 2, '💫', 0.8);
                if (opp.type.money) {
                    this.money = Math.min(CONFIG.maxMoney, this.money + opp.type.money);
                    this.addEffect(opp.x, this.groundY - opp.size - 15, `+💰${opp.type.money}`, 1.0);
                }
                hit = true;
            }
        }

        if (!hit) {
            // Missed the boss, damage others
            for (const opp of this.enemyUnits) {
                if (opp.state !== 'dead') {
                    opp.hp -= 2000;
                    this.addDamageNumber(opp.x, this.groundY - opp.size, 2000, true);
                    if (opp.hp <= 0) {
                        opp.state = 'dead';
                        opp.deathTimer = 0;
                    }
                }
            }
        }
    }

    updateUnits(units, opponents, targetBase, dt) {
        for (const unit of units) {
            if (unit.state === 'dead') {
                unit.deathTimer += dt;
                continue;
            }

            // Knockback state
            if (unit.state === 'kb') {
                unit.kbTimer -= dt;
                const kbDir = unit.isCat ? -1 : 1;
                unit.x += kbDir * 200 * dt;
                if (unit.kbTimer <= 0) {
                    unit.state = 'walk';
                }
                continue;
            }

            // Find nearest opponent (check BOTH in front and behind)
            const dir = unit.isCat ? 1 : -1;
            let target = null;
            let minAbsDist = Infinity;
            let targetSignedDist = 0;

            for (const opp of opponents) {
                if (opp.state === 'dead') continue;
                const signedDist = unit.isCat ? (opp.x - unit.x) : (unit.x - opp.x);
                const absDist = Math.abs(signedDist);
                // Prefer opponents ahead (positive dist), but also detect ones behind/overlapping
                const priority = signedDist >= 0 ? absDist : absDist + 10000;
                if (priority < minAbsDist) {
                    minAbsDist = priority;
                    target = opp;
                    targetSignedDist = signedDist;
                }
            }

            // Effective distance: front-edge to front-edge
            const edgeDist = target
                ? Math.max(0, targetSignedDist - (unit.size / 2) - (target.size / 2))
                : Infinity;

            // Check base distance
            const baseDist = unit.isCat
                ? (targetBase.x - unit.x)
                : (unit.x - targetBase.x);

            const inBaseRange = baseDist > 0 && baseDist <= unit.range + CONFIG.baseWidth / 2;
            const inUnitRange = target && edgeDist <= unit.range;
            // Physical collision: units are overlapping/touching
            const isColliding = target && targetSignedDist <= (unit.size / 2 + target.size / 2);

            // Once an attack starts, we lock the state to 'attack' until it finishes
            const isAttacking = unit.state === 'attack' && unit.attackTimer > 0;

            if (isAttacking || inUnitRange || isColliding || inBaseRange) {
                // Attack
                unit.state = 'attack';
                unit.attackTimer += dt;
                unit.walkCycle = 0;

                // Deal damage at the midpoint of the attack animation
                if (!unit.damageDealtInSwing && unit.attackTimer >= unit.attackSpeed * 0.5) {
                    unit.damageDealtInSwing = true;
                    unit.attackAnimTime = 0.15;

                    // Only actually deal damage if the target/base is currently valid and in range
                    if ((inUnitRange || isColliding) && target) {
                        this.dealDamage(unit, target);
                    }
                    if (inBaseRange) {
                        targetBase.hp = Math.max(0, targetBase.hp - unit.atk);
                        this.addEffect(targetBase.x, this.groundY - 40, '💥', 0.3);
                    }
                }

                // Attack cycle finished
                if (unit.attackTimer >= unit.attackSpeed) {
                    unit.attackTimer = 0;
                    unit.damageDealtInSwing = false;
                    unit.state = 'ready'; // ready for next action next frame
                }
            } else {
                // Walk
                unit.state = 'walk';
                unit.x += dir * unit.speed * 60 * dt;
                unit.walkCycle += dt * unit.speed * 3;

                // Reset attack if we cleanly returned to walking
                unit.attackTimer = 0;
                unit.damageDealtInSwing = false;

                // Physical collision: clamp position so unit can't pass through opponents
                if (target && targetSignedDist >= 0) {
                    const minAllowed = (unit.size / 2) + (target.size / 2);
                    const newSignedDist = unit.isCat ? (target.x - unit.x) : (unit.x - target.x);
                    if (newSignedDist < minAllowed) {
                        // Push unit back to the collision boundary
                        if (unit.isCat) {
                            unit.x = target.x - minAllowed;
                        } else {
                            unit.x = target.x + minAllowed;
                        }
                        // Immediately start attacking since we're touching
                        unit.state = 'attack';
                        unit.attackTimer = 0;
                        unit.damageDealtInSwing = false;
                    }
                }
            }

            if (unit.attackAnimTime > 0) {
                unit.attackAnimTime -= dt;
            }
        }
    }

    dealDamage(attacker, defender) {
        const dmg = defender.type.requiresItem ? 0 : (defender.type.isMetal ? 1 : attacker.atk);

        if (dmg > 0) {
            defender.hp -= dmg;
            this.addDamageNumber(defender.x, this.groundY - defender.size, dmg);
        } else {
            this.addEffect(defender.x, this.groundY - defender.size / 2, '🛡️', 0.2);
        }

        // Knockback check
        const hpThreshold = defender.maxHp - (defender.maxHp / defender.kb) * (defender.kb - defender.kbRemaining + 1);
        if (defender.hp <= hpThreshold && defender.kbRemaining > 0) {
            defender.kbRemaining--;
            defender.state = 'kb';
            defender.kbTimer = 0.3;
            this.addEffect(defender.x, this.groundY - defender.size / 2, '💫', 0.3);
        }

        if (defender.hp <= 0) {
            defender.state = 'dead';
            defender.deathTimer = 0;
            this.addEffect(defender.x, this.groundY - defender.size / 2, '💀', 0.5);

            // Money reward
            if (!defender.isCat && defender.type.money) {
                this.money = Math.min(CONFIG.maxMoney, this.money + defender.type.money);
                this.addEffect(defender.x, this.groundY - defender.size - 15, `+💰${defender.type.money}`, 1.0);
            }
        }
    }

    draw() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const gy = this.groundY;

        // Clear
        ctx.clearRect(0, 0, w, h);

        // Sky gradient
        const skyGrad = ctx.createLinearGradient(0, 0, 0, gy);
        skyGrad.addColorStop(0, this.stage.bg);
        skyGrad.addColorStop(1, this.lightenColor(this.stage.bg, 40));
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, gy);

        // Clouds
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        for (const cloud of this.clouds) {
            this.drawCloud(ctx, cloud.x, cloud.y, cloud.w, cloud.opacity);
        }

        // Hills (bg decoration)
        this.drawHills(ctx, w, gy);

        // Ground
        const groundGrad = ctx.createLinearGradient(0, gy, 0, h);
        groundGrad.addColorStop(0, '#5daa3a');
        groundGrad.addColorStop(0.3, '#4a8c2f');
        groundGrad.addColorStop(1, '#3d7226');
        ctx.fillStyle = groundGrad;
        ctx.fillRect(0, gy, w, h - gy);

        // Ground line detail
        ctx.strokeStyle = '#6bc043';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(w, gy);
        ctx.stroke();

        // Draw grass tufts
        this.drawGrass(ctx, w, gy);

        // Bases
        this.drawBase(ctx, this.playerBase.x, gy, this.playerBase, true);
        this.drawBase(ctx, this.enemyBase.x, gy, this.enemyBase, false);

        // Draw units (sorted by Y for depth, then by X)
        const allUnits = [...this.catUnits, ...this.enemyUnits]
            .filter(u => u.state !== 'dead' || u.deathTimer < 0.4)
            .sort((a, b) => a.x - b.x);

        for (const unit of allUnits) {
            this.drawUnit(ctx, unit, gy);
        }

        // --- Cannon Laser Visual ---
        if (this.cannonFiringTime > 0) {
            ctx.save();
            const alpha = Math.min(1, this.cannonFiringTime * 2);
            ctx.globalAlpha = alpha;
            const baseY = gy - 30; // Fire from slightly above ground (middle of base)
            const laserHeight = 60 + Math.random() * 30; // Shivering effect

            // Ensure composite operation overlays bright colors nicely
            ctx.globalCompositeOperation = 'screen';

            const startX = this.playerBase.x + CONFIG.baseWidth / 2;

            // Core beam (pure white)
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(startX, baseY - laserHeight / 2, w, laserHeight);

            // Inner glow (bright cyan)
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 30;
            ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
            ctx.fillRect(startX, baseY - laserHeight / 1.5, w, laserHeight * 1.5);

            // Outer glow (deep blue)
            ctx.shadowColor = '#0000ff';
            ctx.shadowBlur = 50;
            ctx.fillStyle = 'rgba(0, 0, 255, 0.3)';
            ctx.fillRect(startX, baseY - (laserHeight * 1.2), w, laserHeight * 2.4);

            ctx.restore();
        }

        // Effects
        for (const effect of this.effects) {
            const alpha = 1 - (effect.timer / effect.duration);
            ctx.save();
            ctx.globalAlpha = alpha;
            if (effect.isDamage) {
                ctx.font = `bold ${effect.isCrit ? '18px' : '14px'} ${getComputedStyle(document.body).fontFamily}`;
                ctx.fillStyle = effect.isCrit ? '#ff0' : '#ff4444';
                ctx.strokeStyle = 'rgba(0,0,0,0.7)';
                ctx.lineWidth = 3;
                ctx.textAlign = 'center';
                ctx.strokeText(effect.text, effect.x, effect.y);
                ctx.fillText(effect.text, effect.x, effect.y);
            } else {
                ctx.font = `24px serif`;
                ctx.textAlign = 'center';
                ctx.fillText(effect.text, effect.x, effect.y - effect.timer * 30);
            }
            ctx.restore();
        }

        // Paused overlay
        if (this.paused) {
            ctx.save();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, w, h);
            ctx.font = `bold 48px ${getComputedStyle(document.body).fontFamily}`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('⏸ 一時停止', w / 2, h / 2);
            ctx.restore();
        }
    }

    drawCloud(ctx, x, y, w, opacity) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = 'white';
        const h = w * 0.4;
        // Simple cloud shape with circles
        ctx.beginPath();
        ctx.arc(x + w * 0.3, y + h * 0.6, h * 0.5, 0, Math.PI * 2);
        ctx.arc(x + w * 0.5, y + h * 0.3, h * 0.6, 0, Math.PI * 2);
        ctx.arc(x + w * 0.7, y + h * 0.5, h * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    drawHills(ctx, w, gy) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.beginPath();
        ctx.moveTo(0, gy);
        for (let x = 0; x <= w; x += 5) {
            const y = gy - 30 * Math.sin(x * 0.005) - 20 * Math.sin(x * 0.01 + 1);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(w, gy);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        ctx.beginPath();
        ctx.moveTo(0, gy);
        for (let x = 0; x <= w; x += 5) {
            const y = gy - 50 * Math.sin(x * 0.003 + 2) - 25 * Math.sin(x * 0.008);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(w, gy);
        ctx.closePath();
        ctx.fill();
    }

    drawGrass(ctx, w, gy) {
        ctx.strokeStyle = '#6bc043';
        ctx.lineWidth = 1.5;
        for (let x = 10; x < w; x += 25) {
            const h = 5 + Math.sin(x * 0.3 + this.time) * 3;
            ctx.beginPath();
            ctx.moveTo(x, gy);
            ctx.lineTo(x - 2, gy - h);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x + 3, gy);
            ctx.lineTo(x + 5, gy - h * 0.8);
            ctx.stroke();
        }
    }

    drawBase(ctx, bx, gy, base, isPlayer) {
        const bw = CONFIG.baseWidth;
        const bh = 80;
        const x = isPlayer ? bx : bx - bw;
        const y = gy - bh;

        // Castle tower shape
        ctx.save();

        // Main body
        const bodyGrad = ctx.createLinearGradient(x, y, x + bw, y + bh);
        if (isPlayer) {
            bodyGrad.addColorStop(0, '#4ecdc4');
            bodyGrad.addColorStop(1, '#2ea89e');
        } else {
            bodyGrad.addColorStop(0, '#e74c3c');
            bodyGrad.addColorStop(1, '#c0392b');
        }
        ctx.fillStyle = bodyGrad;

        // Body
        ctx.fillRect(x + 5, y + 20, bw - 10, bh - 20);

        // Battlements
        const merlon = 12;
        for (let i = 0; i < 4; i++) {
            ctx.fillRect(x + 5 + i * (merlon + 5), y + 8, merlon, 16);
        }

        // Door
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.beginPath();
        ctx.arc(x + bw / 2, gy - 20, 12, Math.PI, 0);
        ctx.fillRect(x + bw / 2 - 12, gy - 20, 24, 20);
        ctx.fill();

        // Flag
        const flagX = x + bw / 2;
        const flagY = y;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(flagX, flagY + 10);
        ctx.lineTo(flagX, flagY - 15);
        ctx.stroke();

        ctx.fillStyle = isPlayer ? '#4ecdc4' : '#e74c3c';
        ctx.beginPath();
        ctx.moveTo(flagX, flagY - 15);
        ctx.lineTo(flagX + 15, flagY - 10);
        ctx.lineTo(flagX, flagY - 5);
        ctx.closePath();
        ctx.fill();

        // HP bar on base
        const hpRatio = base.hp / base.maxHp;
        const hpW = bw - 10;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(x + 5, y - 5, hpW, 6);
        ctx.fillStyle = hpRatio > 0.5 ? '#4ecdc4' : hpRatio > 0.25 ? '#f39c12' : '#e74c3c';
        ctx.fillRect(x + 5, y - 5, hpW * hpRatio, 6);
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 5, y - 5, hpW, 6);

        ctx.restore();
    }

    drawUnit(ctx, unit, gy) {
        const s = unit.size;
        const x = unit.x;
        const y = gy;
        const dir = unit.isCat ? 1 : -1;

        ctx.save();

        // Death animation
        if (unit.state === 'dead') {
            const alpha = 1 - (unit.deathTimer / 0.5);
            ctx.globalAlpha = alpha;
            ctx.translate(x, y);
            ctx.scale(1 + unit.deathTimer, 1 - unit.deathTimer * 0.5);
            ctx.translate(-x, -y);
        }

        // Walking bob animation
        let yOff = 0;
        if (unit.state === 'walk') {
            yOff = Math.sin(unit.walkCycle * 5) * 3;
        }

        // Attack lunge
        let xOff = 0;
        if (unit.attackAnimTime > 0) {
            xOff = dir * Math.sin(unit.attackAnimTime * Math.PI / 0.15) * 8;
        }

        // Knockback shake
        if (unit.state === 'kb') {
            xOff = Math.sin(unit.kbTimer * 40) * 4;
        }

        // Draw body (round shape)
        const bx = x + xOff;
        const by = y - s / 2 + yOff + (unit.yOffset || 0);

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(bx, y, s * 0.4, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Body shape
        ctx.fillStyle = unit.color;
        ctx.beginPath();
        ctx.ellipse(bx, by, s * 0.45, s * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Body outline
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(bx, by, s * 0.45, s * 0.5, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Eyes
        const eyeY = by - s * 0.1;
        const eyeX = bx + dir * s * 0.12;
        // White
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(eyeX - 4, eyeY, 4, 0, Math.PI * 2);
        ctx.arc(eyeX + 4, eyeY, 4, 0, Math.PI * 2);
        ctx.fill();
        // Pupils
        ctx.fillStyle = '#222';
        ctx.beginPath();
        ctx.arc(eyeX - 4 + dir * 1.5, eyeY, 2, 0, Math.PI * 2);
        ctx.arc(eyeX + 4 + dir * 1.5, eyeY, 2, 0, Math.PI * 2);
        ctx.fill();

        // Cat ears (for cat units)
        if (unit.isCat) {
            ctx.fillStyle = unit.color;
            ctx.beginPath();
            ctx.moveTo(bx - s * 0.3, by - s * 0.35);
            ctx.lineTo(bx - s * 0.15, by - s * 0.55);
            ctx.lineTo(bx - s * 0.05, by - s * 0.3);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(bx + s * 0.3, by - s * 0.35);
            ctx.lineTo(bx + s * 0.15, by - s * 0.55);
            ctx.lineTo(bx + s * 0.05, by - s * 0.3);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        // Legs (little stubs)
        ctx.fillStyle = unit.color;
        const legY = y - 4;
        const legPhase = unit.walkCycle || 0;
        if (unit.state === 'walk') {
            ctx.fillRect(bx - s * 0.25 + Math.sin(legPhase) * 4, legY, 6, 6);
            ctx.fillRect(bx + s * 0.1 + Math.sin(legPhase + Math.PI) * 4, legY, 6, 6);
        } else {
            ctx.fillRect(bx - s * 0.25, legY, 6, 6);
            ctx.fillRect(bx + s * 0.1, legY, 6, 6);
        }

        // Emoji icon above (character identifier)
        ctx.font = `${Math.max(14, s * 0.5)}px serif`;
        ctx.textAlign = 'center';
        ctx.fillText(unit.emoji, bx, by - s * 0.5 - 2);

        // Name above emoji for enemies
        if (!unit.isCat) {
            ctx.font = `bold 12px sans-serif`;
            const nameY = by - s * 0.5 - 20;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeText(unit.type.name, bx, nameY);
            ctx.fillStyle = '#c0392b';
            ctx.fillText(unit.type.name, bx, nameY);
        }

        // HP bar
        if (unit.hp < unit.maxHp && unit.state !== 'dead') {
            const hpW = s * 0.8;
            const hpH = 4;
            const hpX = bx - hpW / 2;
            const hpY = by - s * 0.55 - 12;
            const hpRatio = unit.hp / unit.maxHp;

            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.fillRect(hpX, hpY, hpW, hpH);

            ctx.fillStyle = unit.isCat
                ? (hpRatio > 0.5 ? '#4ecdc4' : '#f39c12')
                : (hpRatio > 0.5 ? '#e74c3c' : '#ff6b6b');
            ctx.fillRect(hpX, hpY, hpW * hpRatio, hpH);
        }

        ctx.restore();
    }

    lightenColor(hex, amount) {
        hex = hex.replace('#', '');
        const r = Math.min(255, parseInt(hex.substr(0, 2), 16) + amount);
        const g = Math.min(255, parseInt(hex.substr(2, 2), 16) + amount);
        const b = Math.min(255, parseInt(hex.substr(4, 2), 16) + amount);
        return `rgb(${r}, ${g}, ${b})`;
    }

    resize() {
        this.playerBase.x = 40;
        this.enemyBase.x = this.canvas.width - 40;
    }
}

// ===== Main Game Controller =====
class Game {
    constructor() {
        this.state = new GameState();
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.battle = null;
        this.lastTime = 0;
        this.animFrame = null;

        this.bindEvents();
        this.showScreen('title');
        this.createTitleParticles();
    }

    // ===== Screen Management =====
    showScreen(name) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(`${name}-screen`);
        if (screen) screen.classList.add('active');
        this.state.screen = name;

        if (name === 'stage') {
            this.renderStageSelect();
        }
    }

    createTitleParticles() {
        const container = document.getElementById('title-screen');
        const emojis = ['🐱', '🐾', '⭐', '💖', '✨', '🎀', '🐟'];
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            p.style.left = `${Math.random() * 100}%`;
            p.style.fontSize = `${12 + Math.random() * 20}px`;
            p.style.animationDuration = `${5 + Math.random() * 10}s`;
            p.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(p);
        }
    }

    // ===== Stage Select =====
    renderStageSelect() {
        const list = document.getElementById('stage-list');
        list.innerHTML = '';

        for (const stage of STAGES) {
            const card = document.createElement('div');
            card.className = 'stage-card';
            const unlocked = this.state.isStageUnlocked(stage.id);
            const stars = this.state.clearedStages[stage.id] || 0;

            if (!unlocked) {
                card.classList.add('locked');
            }

            card.innerHTML = `
                <div class="stage-number">${unlocked ? stage.id : '🔒'}</div>
                <div class="stage-title">${unlocked ? stage.name : '???'}</div>
                <div class="stage-stars">
                    ${[1, 2, 3].map(s => `<span class="${s <= stars ? 'star-on' : 'star-off'}">★</span>`).join('')}
                </div>
                ${stars > 0 ? '<div class="clear-stamp">CLEAR</div>' : ''}
            `;

            if (unlocked) {
                card.addEventListener('click', () => this.startBattle(stage));
            }

            list.appendChild(card);
        }
    }

    // ===== Battle =====
    startBattle(stageData) {
        this.showScreen('battle');
        this.resizeCanvas();

        this.battle = new Battle(stageData, this.canvas, this.ctx);
        this.battle.resize();

        // Update HUD
        document.getElementById('current-stage-name').textContent = `${stageData.id}. ${stageData.name}`;
        this.renderUnitButtons();

        // Speed reset
        this.battle.speed = 1;
        this.updateSpeedBtn();

        // Start game loop
        this.lastTime = performance.now();
        if (this.animFrame) cancelAnimationFrame(this.animFrame);
        this.gameLoop();
    }

    renderUnitButtons() {
        const container = document.getElementById('unit-buttons');
        container.innerHTML = '';

        CAT_TYPES.forEach((cat, i) => {
            const btn = document.createElement('div');
            btn.className = 'unit-btn';
            btn.id = `unit-btn-${i}`;
            btn.innerHTML = `
                <div class="unit-emoji">${cat.emoji}</div>
                <div class="unit-name">${cat.name}</div>
                <div class="unit-cost">💰${cat.cost}</div>
                <div class="cooldown-overlay" id="cd-overlay-${i}"></div>
            `;
            btn.addEventListener('click', () => {
                if (this.battle) {
                    this.battle.spawnCat(i);
                }
            });

            // Touch support
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                if (this.battle) {
                    this.battle.spawnCat(i);
                }
            });

            container.appendChild(btn);
        });
    }

    updateUnitButtons() {
        if (!this.battle) return;

        CAT_TYPES.forEach((cat, i) => {
            const btn = document.getElementById(`unit-btn-${i}`);
            const overlay = document.getElementById(`cd-overlay-${i}`);
            if (!btn || !overlay) return;

            const canAfford = this.battle.money >= cat.cost;
            const onCooldown = this.battle.cooldowns[i] > 0;

            btn.classList.toggle('disabled', !canAfford || onCooldown);
            btn.classList.toggle('cooldown', onCooldown);

            if (onCooldown) {
                const cdRatio = this.battle.cooldowns[i] / cat.cooldown;
                overlay.style.height = `${cdRatio * 100}%`;
            } else {
                overlay.style.height = '0%';
            }
        });
    }

    updateHUD() {
        if (!this.battle) return;

        document.getElementById('money-text').textContent = Math.floor(this.battle.money);

        // Cannon progress
        const cannonBtn = document.getElementById('cannon-btn');
        if (cannonBtn) {
            if (this.battle.cannonTimer >= this.battle.cannonCooldown) {
                cannonBtn.disabled = false;
                cannonBtn.textContent = '💥 キャノン (撃てます!)';
            } else {
                cannonBtn.disabled = true;
                const pct = Math.floor((this.battle.cannonTimer / this.battle.cannonCooldown) * 100);
                cannonBtn.textContent = `💥 キャノン (${pct}%)`;
            }
        }

        const itemBtn = document.getElementById('item-btn');
        if (itemBtn) {
            if (this.battle.money >= 1000) {
                itemBtn.disabled = false;
                itemBtn.style.opacity = '1';
                itemBtn.style.cursor = 'pointer';
            } else {
                itemBtn.disabled = true;
                itemBtn.style.opacity = '0.5';
                itemBtn.style.cursor = 'not-allowed';
            }
        }

        const playerRatio = this.battle.playerBase.hp / this.battle.playerBase.maxHp;
        const enemyRatio = this.battle.enemyBase.hp / this.battle.enemyBase.maxHp;

        document.getElementById('player-hp-bar').style.width = `${playerRatio * 100}%`;
        document.getElementById('player-hp-text').textContent = `${Math.ceil(playerRatio * 100)}%`;

        document.getElementById('enemy-hp-bar').style.width = `${enemyRatio * 100}%`;
        document.getElementById('enemy-hp-text').textContent = `${Math.ceil(enemyRatio * 100)}%`;
    }

    gameLoop() {
        const now = performance.now();
        const dt = Math.min(0.05, (now - this.lastTime) / 1000);
        this.lastTime = now;

        if (this.battle) {
            this.battle.update(dt);
            this.battle.draw();
            this.updateHUD();
            this.updateUnitButtons();

            if (this.battle.gameOver) {
                setTimeout(() => this.showResult(), 500);
                return;
            }
        }

        this.animFrame = requestAnimationFrame(() => this.gameLoop());
    }

    showResult() {
        if (!this.battle) return;

        const isWin = this.battle.result === 'win';

        // Calculate stars based on HP remaining
        let stars = 0;
        if (isWin) {
            const hpRatio = this.battle.playerBase.hp / this.battle.playerBase.maxHp;
            if (hpRatio >= 0.8) stars = 3;
            else if (hpRatio >= 0.5) stars = 2;
            else stars = 1;

            this.state.clearStage(this.battle.stage.id, stars);
        }

        const content = document.getElementById('result-content');
        content.className = `result-content ${isWin ? 'win' : 'lose'}`;

        document.getElementById('result-title').textContent = isWin ? '🎉 ステージクリア！' : '😢 敗北...';
        document.getElementById('result-stars').innerHTML = isWin
            ? [1, 2, 3].map(s => `<span style="color: ${s <= stars ? '#ffd700' : '#444'}; font-size: 3rem;">★</span>`).join('')
            : '';

        const timeStr = `${Math.floor(this.battle.time / 60)}:${String(Math.floor(this.battle.time % 60)).padStart(2, '0')}`;
        document.getElementById('result-stats').innerHTML = isWin
            ? `
                <div>⏱️ クリアタイム: ${timeStr}</div>
                <div>🏰 残り体力: ${Math.ceil(this.battle.playerBase.hp / this.battle.playerBase.maxHp * 100)}%</div>
            `
            : `<div>⏱️ 戦闘時間: ${timeStr}</div>`;

        // Accumulate stats
        this.state.globalStats.unitsSpawned += this.battle.stats.unitsSpawned;
        this.state.globalStats.moneySpent += this.battle.stats.moneySpent;
        this.state.globalStats.cannonUsed += this.battle.stats.cannonUsed;
        this.state.globalStats.bananaUsed += this.battle.stats.bananaUsed;
        this.state.globalStats.playTimeTotal += this.battle.time;
        this.state.saveStats();

        const endingBtn = document.getElementById('ending-btn');
        if (isWin && this.battle.stage.id === 15) {
            if (endingBtn) endingBtn.style.display = 'inline-block';
        } else {
            if (endingBtn) endingBtn.style.display = 'none';
        }

        this.showScreen('result');
    }

    showEndRoll() {
        this.showScreen('endroll');
        const statsContent = document.getElementById('endroll-stats');
        const stats = this.state.globalStats;
        const timeStr = `${Math.floor(stats.playTimeTotal / 60)}分${String(Math.floor(stats.playTimeTotal % 60)).padStart(2, '0')}秒`;

        statsContent.innerHTML = `
            <h2>🎊 あなたの戦績 🎊</h2>
            <div class="stats-list">
                <p>🌟 プレイ時間: ${timeStr}</p>
                <p>🎒 召喚した5年生: ${stats.unitsSpawned} 人</p>
                <p>💰 使ったお金: ${Math.floor(stats.moneySpent)} 円</p>
                <p>💥 キャノン発射回数: ${stats.cannonUsed} 回</p>
                <p>🍌 バナナ使用回数: ${stats.bananaUsed} 回</p>
            </div>
        `;

        // Start scrolling animation
        const scroller = document.getElementById('endroll-scroll');
        if (scroller) {
            scroller.style.transform = 'translateY(100vh)';
            scroller.style.transition = 'none';
            scroller.offsetHeight; // force reflow
            scroller.style.transition = 'transform 25s linear';
            scroller.style.transform = 'translateY(-150%)';
        }
    }

    // ===== Event Bindings =====
    bindEvents() {
        // Title screen
        document.getElementById('start-btn').addEventListener('click', () => {
            this.showScreen('stage');
        });

        // Stage screen
        document.getElementById('back-to-title').addEventListener('click', () => {
            this.showScreen('title');
        });

        // Battle controls
        const cannonBtn = document.getElementById('cannon-btn');
        if (cannonBtn) {
            cannonBtn.addEventListener('click', () => {
                if (this.battle) this.battle.fireCannon();
            });
        }

        const itemBtn = document.getElementById('item-btn');
        if (itemBtn) {
            itemBtn.addEventListener('click', () => {
                if (this.battle) this.battle.useItem();
            });
        }

        document.getElementById('speed-btn').addEventListener('click', () => {
            if (this.battle) {
                if (this.battle.speed === 1) this.battle.speed = 2;
                else if (this.battle.speed === 2) this.battle.speed = 3;
                else this.battle.speed = 1;
                this.updateSpeedBtn();
            }
        });

        document.getElementById('pause-btn').addEventListener('click', () => {
            if (this.battle) {
                this.battle.paused = !this.battle.paused;
                document.getElementById('pause-btn').textContent = this.battle.paused ? '▶' : '⏸';
            }
        });

        document.getElementById('retreat-btn').addEventListener('click', () => {
            if (this.battle && confirm('撤退しますか？')) {
                cancelAnimationFrame(this.animFrame);
                this.battle = null;
                this.showScreen('stage');
            }
        });

        // Result screen
        document.getElementById('retry-btn').addEventListener('click', () => {
            if (this.battle) {
                this.startBattle(this.battle.stage);
            }
        });

        document.getElementById('to-stage-btn').addEventListener('click', () => {
            this.battle = null;
            this.showScreen('stage');
        });

        const endingBtn = document.getElementById('ending-btn');
        if (endingBtn) {
            endingBtn.addEventListener('click', () => {
                this.battle = null;
                this.showEndRoll();
            });
        }

        const endRollBackBtn = document.getElementById('endroll-back-btn');
        if (endRollBackBtn) {
            endRollBackBtn.addEventListener('click', () => {
                this.showScreen('title');
            });
        }

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (this.state.screen !== 'battle' || !this.battle) return;

            const num = parseInt(e.key);
            if (num >= 1 && num <= 5) {
                this.battle.spawnCat(num - 1);
            }
            if (e.key === ' ') {
                e.preventDefault();
                this.battle.paused = !this.battle.paused;
                document.getElementById('pause-btn').textContent = this.battle.paused ? '▶' : '⏸';
            }
        });

        // Resize
        window.addEventListener('resize', () => {
            if (this.state.screen === 'battle') {
                this.resizeCanvas();
                if (this.battle) this.battle.resize();
            }
        });
    }

    updateSpeedBtn() {
        if (!this.battle) return;
        document.getElementById('speed-btn').textContent = `▶ x${this.battle.speed}`;
    }

    resizeCanvas() {
        const battle = document.getElementById('battle-screen');
        const hud = document.getElementById('game-hud');
        const panel = document.getElementById('unit-panel');

        const w = battle.clientWidth;
        const h = battle.clientHeight - hud.clientHeight - panel.clientHeight;

        this.canvas.width = w;
        this.canvas.height = Math.max(h, 200);
    }
}

// ===== Start Game =====
window.addEventListener('DOMContentLoaded', () => {
    new Game();
});
