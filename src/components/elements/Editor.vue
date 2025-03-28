<!-- Adapted from https://tiptap.dev/installation/vue3 -->
<template>
  <div class="editor-wrapper">
    <editor-content :editor="editor" spellcheck="false"
      @keyup.enter.capture.prevent="() => {}"
      @keydown.enter.capture.prevent="() => {}" />
    <bubble-menu v-if="editor" class="bubble-menu" :editor="editor" :tippy-options="{ duration: 100 }">
      <button
        class="bubble-menu-item"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        bold
      </button>
      <button
        class="bubble-menu-item"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        italic
      </button>
      <button
        class="bubble-menu-item"
        @click="setLink"
        :class="{ 'is-active': editor.isActive('link') }"
      >
        link
      </button>
    </bubble-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import History from '@tiptap/extension-history'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/vue-3'
import { markdownToHtml, htmlToMarkdown } from '@/utils/utils'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get () {
    const mdValue = props.modelValue
    if (mdValue) {
      return markdownToHtml(mdValue)
    } else {
      return '<p></p>'
    }
  },
  set (newValue) {
    emit('update:modelValue', newValue)
  },
})

const editor = useEditor({
  extensions: [
    Document,
    Paragraph,
    Text,
    Bold,
    Italic,
    History,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        rel: 'noopener noreferrer',
        class: 'text-blue-500 hover:underline',
      },
    }),
    Placeholder.configure({
      placeholder: 'Type \'/\' for a menu'
    })
  ],
  editorProps: { 
    // Removing default behavior for drop event
    handleDrop : () => true,
  },
  content: value.value,
  onUpdate: () => {
    value.value = htmlToMarkdown(editor.value?.getHTML() || '')
  },
})

const setLink = () => {
  if (!editor.value) return
  
  const previousUrl = editor.value.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  if (url === null) {
    return
  }

  if (url === '') {
    editor.value.chain().focus().unsetLink().run()
    return
  }

  editor.value.chain().focus().setLink({ href: url }).run()
}

watch(() => props.modelValue, value => {
  const isSame = htmlToMarkdown(editor.value?.getHTML() || '') === value
  if (isSame) return
  editor.value?.commands.setContent(markdownToHtml(value), false)
})
</script>

<style>
.editor-wrapper {
  position: relative;
}

.bubble-menu {
  display: flex;
  background-color: #0D0D0D;
  padding: 0.2rem;
  border-radius: 0.5rem;
  z-index: 20;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.bubble-menu-item {
  border: none;
  background: none;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.2rem 0.5rem;
  opacity: 0.6;
  cursor: pointer;
  height: 1.75rem;
  border-radius: 0.2rem;
}

.bubble-menu-item:hover {
  opacity: 1;
  background-color: #1D1D1D;
}

.bubble-menu-item.is-active {
  opacity: 1;
  background-color: #1D1D1D;
}
</style>
