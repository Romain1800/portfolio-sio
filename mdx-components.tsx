import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-muted">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-accent underline underline-offset-4 hover:text-accent-2"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-accent-2">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-2 border-accent pl-4 italic text-muted">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
};

export function useMDXComponents(components_: MDXComponents): MDXComponents {
  return { ...components, ...components_ };
}
