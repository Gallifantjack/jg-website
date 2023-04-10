import Link from "next/link"
import Layout from "./Layout"

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid bg-[#ffffff] text-[#494949] font-medium border-light text-sm
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy;</span>
        <Link
          href="mailto:jack.gallifant@nhs.net"
          target={"_blank"}
          className="text-sm hover:text-dark hover:underline
            "
        >
          Contact me
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
