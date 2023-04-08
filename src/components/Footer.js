import Link from "next/link"
import Layout from "./Layout"

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid bg-zinc-900 font-medium text-lg text-gray-400 border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy;</span>
        <div className="flex items-center lg:py-2">
          <Link
            href="https://jackgallifant.com"
            className="underline
            underline-offset-2
            "
            target={"_blank"}
          >
            Jack Gallifant
          </Link>
        </div>
        <Link
          href="mailto:jack.gallifant@nhs.net"
          target={"_blank"}
          className="underline
            underline-offset-2
            "
        >
          Contact
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
