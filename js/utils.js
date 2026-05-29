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
