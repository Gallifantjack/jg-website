import { motion } from "framer-motion";

type Props = {};

function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://media.licdn.com/dms/image/C5603AQHFOr2kp08I0w/profile-displayphoto-shrink_800_800/0/1593529357223?e=1679529600&v=beta&t=eL4LJTAzL-5i8x7TQNCf7rtt8KPZTHl5_aG7eODeNfM"
              className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="decoration-[#F7AB0A]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias maxime, sit saepe fugit earum tempore laboriosam reiciendis error ea totam molestias nisi, corporis aliquam vitae repellat, repellendus nesciunt quo.
                Aliquam veritatis fugiat reiciendis, tempore neque odio ut molestias perspiciatis accusamus velit magni dicta dolorem sit exercitationem culpa ipsam fugit id. Cum vero laudantium, natus sit quos rerum aliquam asperiores?
                Eius cum in accusamus mollitia nesciunt amet delectus omnis tempora deserunt quos velit soluta vero laudantium iste commodi nemo ipsa architecto exercitationem maxime nam, minus ad voluptates sapiente! Veniam, labore.
                Quisquam blanditiis veritatis animi sed asperiores. Assumenda aliquid eius accusantium cupiditate amet dolor sit doloribus, officiis eos repudiandae, libero, labore blanditiis praesentium veniam similique illum porro non dolores nesciunt commodi.
                Sed, nihil ipsam odit animi adipisci repellat rerum dolorem explicabo iure totam ducimus soluta tempora provident, libero dignissimos dolor aliquam laboriosam perspiciatis! Maxime aliquam repellat eaque minima, alias similique molestias.
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
    );
}

export default Projects;