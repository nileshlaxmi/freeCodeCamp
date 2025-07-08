marked.setOptions({
  breaks: true,
});

const defaultMarkdown = `# H1 Heading

## H2 Subheading

This is a [link](https://www.example.com)

Here is some \`inline code\`.

\`\`\`
function codeBlock() {
  console.log("This is a code block");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Alt text](https://via.placeholder.com/150)

**This text is bold**
`;

const textArea = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', function () {
  const value = textArea?.value;
  preview.innerHTML = marked.parse(value);
});

window.onload = function () {
  textArea.value = defaultMarkdown;
  preview.innerHTML = marked.parse(defaultMarkdown);
};