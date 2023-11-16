import { cn } from '@lib/utils'
import { timelineData } from './TimelineData.js'
import { motion } from 'framer-motion'
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}
export default function Timeline() {
  return (
    <div className="my-14">
      <h3 className="text-mainColor py-5 text-center text-4xl font-medium">
        Parcours professionnel
      </h3>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineData.map((activity, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={cn(
                // if its pair it will appear on the right else on the left
                index % 2 ? 'timeline-start md:text-end' : 'timeline-end',
                'mb-10'
              )}
            >
              <time className="font-mono italic">{activity.startingTime}</time>
              <div className="text-lg font-black">{activity.name}</div>
              {activity.description}

              {activity.descriptionList &&
                activity.descriptionList.map((_, index) => (
                  <p key={index}>{activity.descriptionList[index]}</p>
                ))}
            </div>
            <hr />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
