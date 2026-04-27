type PageHeadingProps = {
  children: React.ReactNode
}

export default function PageHeading({ children }: PageHeadingProps) {
  return (
    <div className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-2 overflow-hidden">
      <h1
        className="text-[13vw] font-black uppercase leading-none tracking-tight"
        style={{ animation: "heading-slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      >
        {children}
      </h1>
    </div>
  )
}
