function Text({ children, ...props }: React.HTMLProps<HTMLSpanElement>) {
  return <span {...props}>{children}</span>
}

export default Text
