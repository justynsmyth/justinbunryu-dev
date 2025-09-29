export type ExternalLinkProps = Readonly<{
  children: React.ReactNode,
  href: string,
  label: string
}>;

export type InternalLinkProps = Readonly<{
  children: React.ReactNode
  targetId: string
  label?: string
}>;