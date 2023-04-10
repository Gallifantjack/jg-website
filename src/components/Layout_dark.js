const Layout_dark = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 p-32 xl:p-24 lg:p-16 md:p-12 bg-[#ffffff] sm:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout_dark
