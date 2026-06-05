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
        1: { fontSize: 56, y: 58, vbWidth: 80 },
        2: { fontSize: 52, y: 57, vbWidth: 80 },
        3: { fontSize: 48, y: 57, vbWidth: 120 },
    };

    let uid = 0;

    return (rarity) => {
        const label = RARITY_LABELS[rarity] ?? (typeof rarity === 'string' ? rarity.toUpperCase() : '?');
        const len = Math.min(label.length, 3);
        const { fontSize, y, vbWidth } = CONFIGS[len] || CONFIGS[3];
        const maskId = `cl-mask-${++uid}`;
        const width = len === 3 ? 33 : 22;

        return `<svg class="rarity-badge" width="${width}" height="22" viewBox="0 0 ${vbWidth} 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <mask id="${maskId}">
                    <rect width="${vbWidth}" height="80" rx="40" fill="white"/>
                    <text x="${vbWidth / 2}" y="${y}" font-size="${fontSize}" font-weight="900" font-family="sans-serif" text-anchor="middle" fill="black">${label}</text>
                </mask>
            </defs>
            <rect width="${vbWidth}" height="80" rx="40" fill="currentColor" mask="url(#${maskId})"/>
        </svg>`;
    };
})();
