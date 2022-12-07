export const windowSizeUtil = (windowWidth: number) => {
    let columnWidth = 292
    let rowHeight = 420

    if (windowWidth > 1200) {
        columnWidth = 292
        rowHeight = 420
    }

    return {columnWidth, rowHeight}
}