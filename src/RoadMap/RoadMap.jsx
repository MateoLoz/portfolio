
import { useRef } from "react";
import { DataMap } from "./RoadMap.helper";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import './roadmap.css'
export default function DeveloperTimeline() {

  const {ref, inView } = useInView({
    threshold:0.5
  })

    const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div ref={ref} id="RoadMap" className="relative" style={{opacity: inView ? 1 : 0, transition: `opacity ease-in-out 300ms`}}>
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-gray-600 mb-4 ml-4">(Journey)</p>
        <h2 className="title-roadmap mb-8 ml-4 md:ml-24">My Development Journey</h2>
        <p className="text-gray-600 text-lg max-w-2xl ml-4 md:ml-24">
          From learning the basics to becoming a full-stack developer. Here's how my skills evolved over the years.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mb-8 ml-4  md:ml-24">
        <button
          onClick={scrollLeft}
          className="p-2 border border-gray-300 hover:border-gray-900 transition-colors bg-white"
        >
          Prev
        </button>
        <button
          onClick={scrollRight}
          className="p-2 border border-gray-300 hover:border-gray-900 transition-colors bg-white"
        >
         Next
        </button>
        <span className="text-gray-500 text-sm ">Scroll to explore →</span>
      </div>

      {/* Timeline */}
      <div className="relative pl-10 pr-10">
        {/* Timeline Line */}
        <motion.div
          className="absolute top-8 left-0 right-0 h-px bg-gray-300"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Scrollable Container */}
        <motion.div
          ref={scrollContainerRef}
          className="flex  gap-12 overflow-x-auto  scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {DataMap.map((item, index) => (
            <motion.div key={index} className="flex-shrink-0 relative" variants={cardVariants}>
              {/* Timeline Dot */}
              <motion.div
                className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rounded-full z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
              />

              {/* Content Card */}
              <div className="w-80 pt-16">
                <motion.div
                  className="bg-white border border-gray-200 p-6 hover:border-gray-900 transition-colors"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 font-medium">{item.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.highlight}</h3>

                  <p className="text-gray-600 leading-relaxed">{item.description}</p>

                  {/* Progress */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-200">
                      <motion.div
                        className="h-full bg-gray-900"
                        initial={{ width: 0 }}
                        animate={{ width: `${((index + 1) / DataMap.length) * 100}%` }}
                        transition={{ delay: index * 0.1 + 0.8, duration: 0.8 }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {String(index + 1).padStart(2, "0")}/{String(DataMap.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Overall Progress */}
      <motion.div
        className="mt-12 bg-gray-200 h-px overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="h-full bg-gray-900"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

