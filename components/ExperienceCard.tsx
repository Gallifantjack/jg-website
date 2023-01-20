import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w[600px] xl:w[p00px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
        src="https://media.licdn.com/dms/image/C5603AQHFOr2kp08I0w/profile-displayphoto-shrink_800_800/0/1593529357223?e=1679529600&v=beta&t=eL4LJTAzL-5i8x7TQNCf7rtt8KPZTHl5_aG7eODeNfM" 
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-bold">Foundation Doctor</h4>
        <p className="font-bold text-2xl mt-1"> Imperial College NHS Trust</p> 
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded full"
            src="https://media.licdn.com/dms/image/C5603AQHFOr2kp08I0w/profile-displayphoto-shrink_800_800/0/1593529357223?e=1679529600&v=beta&t=eL4LJTAzL-5i8x7TQNCf7rtt8KPZTHl5_aG7eODeNfM"
            alt=""
          /> 
          </div>
        <p className="uppercase py-5 text-gray-300">
          2021 - present
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-40 overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
{/* TODO: Add a link to the company website or tech used */}