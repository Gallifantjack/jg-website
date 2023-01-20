import { motion } from "framer-motion";

type Props = {}

function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
         src="https://media.licdn.com/dms/image/C5603AQHFOr2kp08I0w/profile-displayphoto-shrink_800_800/0/1593529357223?e=1679529600&v=beta&t=eL4LJTAzL-5i8x7TQNCf7rtt8KPZTHl5_aG7eODeNfM" //TODO: See papa react next js tutorial for how to import images properly (time 1:02:00 on portfolio tutorial)
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae
          quod, voluptate, quia, voluptas voluptatum quibusdam voluptates
          voluptatibus quidem quos quas. Quisquam, quae. Quisquam, quae. Quisquam,
        </p>
      </div>
    </motion.div>
  );
}

export default About;