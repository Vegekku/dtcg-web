const getCardBlock = (cardId, block) => {
    if (typeof block === 'number') return block;
    if (!block) return null;
    const setPrefix = cardId.replace(/-\d+$/, '');
    for (const [b, entries] of Object.entries(block)) {
        if (entries.includes(cardId) || entries.includes(setPrefix)) return Number(b);
    }
    return null;
};

const getBlockBadge = (block) => {
    if (block === null || block === undefined || Number(block) === 0) return '';
    return `<span class="block-badge">${String(block).padStart(2, '0')}</span>`;
};

const updateFilterCount = () => {
    const filterCount = document.getElementById('filterCount');
    const cards = document.querySelectorAll('img.card');
    let count = 0;
    cards.forEach(card => {
        if (card.checkVisibility()) count++;
    });
    const newText = `${count} carta${count !== 1 ? 's' : ''}`;
    if (filterCount.textContent !== newText) {
        filterCount.textContent = newText;
        filterCount.classList.remove('pulse');
        void filterCount.offsetWidth;
        filterCount.classList.add('pulse');
    }
}

const rarityBadge = (() => {
    const RARITY_LABELS = {
        'c': 'C', 'u': 'U', 'r': 'R', 'sr': 'SR', 'ur': 'UR', 'sec': 'SEC',
        'p': 'P', 'sp': 'SP', 'aa': 'AA', 't': 'T'
    };

    const CONFIGS = {
        1: { fontSize: 15, y: 16, vbWidth: 22 },
        2: { fontSize: 14, y: 16, vbWidth: 22 },
        3: { fontSize: 13, y: 16, vbWidth: 33 },
    };

    const DARK_COLORS = new Set(['yellow', 'white']);

    let uid = 0;

    const badgeColor = (cardColor) => {
        if (!cardColor) return 'white';
        const parts = cardColor.split('-');
        if (parts.length === 1) return DARK_COLORS.has(parts[0]) ? 'black' : 'white';
        const stops = parts.map(c => DARK_COLORS.has(c) ? 'black' : 'white');
        if (stops.every(s => s === stops[0])) return stops[0];
        return stops;
    };

    return (rarity, cardColor = null) => {
        const label = RARITY_LABELS[rarity] ?? (typeof rarity === 'string' ? rarity.toUpperCase() : '?');
        const len = Math.min(label.length, 3);
        const { fontSize, y, vbWidth } = CONFIGS[len] || CONFIGS[3];
        const maskId = `cl-mask-${++uid}`;
        const gradId = `cl-grad-${uid}`;
        const width = len === 3 ? 33 : 22;
        const color = badgeColor(cardColor);

        let fillDef = '';
        let fillVal;

        if (Array.isArray(color)) {
            let stops;
            if (color.length === 3) {
                stops = [
                    `<stop offset="0%" stop-color="${color[0]}"/>`,
                    `<stop offset="18%" stop-color="${color[0]}"/>`,
                    `<stop offset="18%" stop-color="${color[1]}"/>`,
                    `<stop offset="83%" stop-color="${color[1]}"/>`,
                    `<stop offset="83%" stop-color="${color[2]}"/>`,
                    `<stop offset="100%" stop-color="${color[2]}"/>`,
                ].join('');
            } else {
                const step = Math.round(100 / color.length);
                stops = color.map((c, i) => {
                    const start = i * step;
                    const end = (i + 1) * step;
                    return `<stop offset="${start}%" stop-color="${c}"/><stop offset="${end}%" stop-color="${c}"/>`;
                }).join('');
            }
            fillDef = `<linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="0">${stops}</linearGradient>`;
            fillVal = `url(#${gradId})`;
        } else {
            fillVal = color;
        }

        return `<svg class="rarity-badge" width="${width}" height="22" viewBox="0 0 ${vbWidth} 22" xmlns="http://www.w3.org/2000/svg">
            <defs>
                ${fillDef}
                <mask id="${maskId}">
                    <rect width="${vbWidth}" height="22" rx="11" fill="white"/>
                    <text x="${vbWidth / 2}" y="${y}" font-size="${fontSize}" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="black">${label}</text>
                </mask>
            </defs>
            <rect width="${vbWidth}" height="22" rx="11" fill="${fillVal}" mask="url(#${maskId})"/>
        </svg>`;
    };
})();
