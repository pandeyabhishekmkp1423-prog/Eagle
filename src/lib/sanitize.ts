import DOMPurify from 'dompurify';

// Blog post content is authored by the trusted single admin through the rich
// text editor, but we still sanitize before rendering with dangerouslySetInnerHTML
// as a defense-in-depth measure (e.g. against a future import path or stored data
// that didn't pass through the editor).
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's', 'mark', 'a', 'ul', 'ol', 'li',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre', 'span',
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'style', 'data-color', 'class'],
  });
}
