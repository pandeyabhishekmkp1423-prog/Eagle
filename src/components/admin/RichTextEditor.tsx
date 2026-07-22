import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import { TextStyle } from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Placeholder from '@tiptap/extension-placeholder';
import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  Highlighter,
  Link2,
  Link2Off,
  List,
  ListOrdered,
  Quote,
  Undo2,
  Redo2,
} from 'lucide-react';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as const;

const HIGHLIGHT_COLORS = [
  { label: 'Yellow', value: '#fde68a' },
  { label: 'Green', value: '#bbf7d0' },
  { label: 'Blue', value: '#bfdbfe' },
  { label: 'Pink', value: '#fbcfe8' },
];

const FONT_FAMILIES = [
  { label: 'Default', value: '' },
  { label: 'Manrope (Display)', value: 'Manrope' },
  { label: 'Georgia (Serif)', value: 'Georgia' },
  { label: 'Courier New (Mono)', value: 'Courier New' },
];

function ToolbarButton({
  onClick,
  active,
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`flex h-8 w-8 items-center justify-center rounded-md border transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        active ? 'border-gold bg-gold/15 text-primary' : 'border-transparent text-gray-medium hover:bg-surface hover:text-primary'
      }`}
    >
      {children}
    </button>
  );
}

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontFamily,
      Highlight.configure({ multicolor: true }),
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: placeholder || 'Write your post...' }),
    ],
    content: value,
    onUpdate: ({ editor: e }) => onChange(e.getHTML()),
  });

  // Keep the editor's document in sync if the form value is replaced from outside
  // (e.g. loading an existing post to edit) after the editor already mounted.
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, value]);

  if (!editor) return null;

  const currentHeading = HEADING_LEVELS.find((level) => editor.isActive('heading', { level }));
  const headingValue = currentHeading ? String(currentHeading) : 'p';

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Enter URL', previousUrl || 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-light bg-surface">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-gray-light bg-white p-2">
        <select
          aria-label="Text style"
          value={headingValue}
          onChange={(e) => {
            const val = e.target.value;
            if (val === 'p') {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level: Number(val) as 1 | 2 | 3 | 4 | 5 | 6 }).run();
            }
          }}
          className="h-8 rounded-md border border-gray-light bg-white px-2 text-xs font-semibold text-primary focus:border-gold focus:outline-none"
        >
          <option value="p">Paragraph</option>
          {HEADING_LEVELS.map((level) => (
            <option key={level} value={level}>Heading {level}</option>
          ))}
        </select>

        <select
          aria-label="Font family"
          value={editor.getAttributes('textStyle').fontFamily || ''}
          onChange={(e) => {
            const val = e.target.value;
            if (val) {
              editor.chain().focus().setFontFamily(val).run();
            } else {
              editor.chain().focus().unsetFontFamily().run();
            }
          }}
          className="h-8 rounded-md border border-gray-light bg-white px-2 text-xs font-semibold text-primary focus:border-gold focus:outline-none"
        >
          {FONT_FAMILIES.map((font) => (
            <option key={font.label} value={font.value}>{font.label}</option>
          ))}
        </select>

        <div className="mx-1 h-6 w-px bg-gray-light" />

        <ToolbarButton label="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough className="h-4 w-4" />
        </ToolbarButton>

        <div className="mx-1 h-6 w-px bg-gray-light" />

        {HIGHLIGHT_COLORS.map((color) => (
          <button
            key={color.value}
            type="button"
            title={`Highlight: ${color.label}`}
            aria-label={`Highlight: ${color.label}`}
            onClick={() => editor.chain().focus().toggleHighlight({ color: color.value }).run()}
            className={`flex h-8 w-8 items-center justify-center rounded-md border transition-colors ${
              editor.isActive('highlight', { color: color.value }) ? 'border-gold' : 'border-transparent hover:border-gray-light'
            }`}
            style={{ backgroundColor: color.value }}
          >
            <Highlighter className="h-3.5 w-3.5 text-primary/70" />
          </button>
        ))}
        <ToolbarButton label="Remove highlight" onClick={() => editor.chain().focus().unsetHighlight().run()}>
          <Highlighter className="h-4 w-4 opacity-40" />
        </ToolbarButton>

        <div className="mx-1 h-6 w-px bg-gray-light" />

        <ToolbarButton label="Insert link" active={editor.isActive('link')} onClick={setLink}>
          <Link2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          label="Remove link"
          disabled={!editor.isActive('link')}
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          <Link2Off className="h-4 w-4" />
        </ToolbarButton>

        <div className="mx-1 h-6 w-px bg-gray-light" />

        <ToolbarButton label="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Quote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote className="h-4 w-4" />
        </ToolbarButton>

        <div className="mx-1 h-6 w-px bg-gray-light" />

        <ToolbarButton label="Undo" onClick={() => editor.chain().focus().undo().run()}>
          <Undo2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Redo" onClick={() => editor.chain().focus().redo().run()}>
          <Redo2 className="h-4 w-4" />
        </ToolbarButton>
      </div>

      {/* Editable area */}
      <EditorContent editor={editor} className="admin-rich-text prose-blog min-h-[280px] bg-white px-4 py-3 text-sm text-primary" />
    </div>
  );
}
