import { BlockComponents, availableBlockTypes } from './types';
export function registerBlock(id, label, component, icon = 'bi-text-left') {
    BlockComponents[id] = component;
    availableBlockTypes.push({
        type: 'Turn into',
        icon,
        label,
        blockType: id,
    });
}
export function markdownToHtml(mdString) {
    // Adapted from https://randyperkins2k.medium.com/writing-a-simple-markdown-parser-using-javascript-1f2e9449a558
    return mdString
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .trim();
}
export function htmlToMarkdown(htmlString) {
    return htmlString
        .replaceAll('<p>', '')
        .replaceAll('</p>', '')
        .replaceAll('<strong>', '**')
        .replaceAll('</strong>', '**')
        .replaceAll('<em>', '*')
        .replaceAll('</em>', '*')
        .replaceAll(/\<br.*?\>/g, '');
}
//# sourceMappingURL=utils.js.map