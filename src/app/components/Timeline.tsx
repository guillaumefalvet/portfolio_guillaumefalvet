import { twClsxMerge } from '@lib/utils'
import { timelineData, TimelineDataType } from './TimelineData'
import { motion } from 'framer-motion'
import H3 from './ui/H3'
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.01 * index,
    },
  }),
}
export default function Timeline() {
  return (
    <div className="my-10">
      <H3>Parcours professionnel</H3>
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
        {timelineData.map((activity: TimelineDataType, index) => (
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
              className={twClsxMerge(
                // if its pair it will appear on the right else on the left
                index % 2 ? 'timeline-start md:text-end' : 'timeline-end',
                'mb-10'
              )}
            >
              <time className="font-mono italic">{activity.startingTime}</time>
              <div className="text-lg font-black">{activity.name}</div>
              {activity.description}

              {activity.descriptionList &&
                activity.descriptionList?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
            </div>
            <hr />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
