const getCardBlock = (cardId, block) => {
    if (typeof block === 'number') return block;
    if (!block) return null;
    const setPrefix = cardId.replace(/-\d+$/, '');
    for (const [b, entries] of Object.entries(block)) {
        if (entries.includes(cardId) || entries.includes(setPrefix)) return Number(b);
    }
    return null;
};
