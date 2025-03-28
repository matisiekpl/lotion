import { test, expect } from 'vitest';
import { isTextBlock, BlockType, BlockComponents, availableBlockTypes } from '@/utils/types';
import { registerBlock } from '@/utils/utils';
import CustomBlock from '../../examples/CustomBlock.vue';
test('isTextBlock should work for text blocks', () => {
    // Keep as reminder to update textBlockMap in @/utils/types
    const knownTextBlocks = [
        BlockType.Text,
        BlockType.Quote,
    ];
    Object.values(BlockType).forEach(type => {
        if (knownTextBlocks.includes(type))
            expect(isTextBlock(type)).toBeTruthy();
        else
            expect(isTextBlock(type)).toBeFalsy();
    });
});
test('registerBlock should add block to availableBlockTypes', () => {
    const blockId = 'EXAMPLE';
    const blockLabel = 'Example';
    registerBlock('EXAMPLE', 'Example', CustomBlock);
    expect(availableBlockTypes.some(block => {
        return block.type === 'Turn into' &&
            block.icon === 'bi-text-left' &&
            block.label === blockLabel &&
            block.blockType === blockId;
    })).toBeTruthy();
    expect(BlockComponents[blockId] === CustomBlock).toBeTruthy();
});
//# sourceMappingURL=utils.test.js.map