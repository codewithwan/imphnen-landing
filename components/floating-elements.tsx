"use client"

import { motion } from "framer-motion"
import { Code, Braces, Hash, Terminal, FileCode, Database, Server, Cpu, Wifi, ChevronRight, ChevronLeft, ArrowRight, ArrowLeft, Type, FunctionSquare, Variable, Parentheses, Brackets, Slash, Equal, Plus, Minus, Asterisk, Percent, AtSign, DollarSign } from "lucide-react"

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Code symbol */}
      <motion.div
        className="absolute top-[15%] left-[10%] text-blue-300 opacity-60"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Code size={30} />
      </motion.div>

      {/* Braces symbol */}
      <motion.div
        className="absolute top-[30%] right-[15%] text-blue-300 opacity-60"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Braces size={40} />
      </motion.div>

      {/* Brackets */}
      <motion.div
        className="absolute top-[20%] right-[30%] text-blue-300 opacity-60"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Brackets size={35} />
      </motion.div>

      {/* Hash symbol */}
      <motion.div
        className="absolute bottom-[25%] left-[20%] text-blue-200 opacity-60"
        animate={{
          y: [0, 10, 0],
          x: [0, 10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Hash size={25} />
      </motion.div>

      {/* Terminal symbol */}
      <motion.div
        className="absolute bottom-[15%] right-[25%] text-blue-200 opacity-60"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Terminal size={35} />
      </motion.div>

      {/* Additional code elements */}
      <motion.div
        className="absolute top-[45%] left-[25%] text-blue-400 opacity-60"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <FileCode size={28} />
      </motion.div>

      {/* Arrow symbols */}
      <motion.div
        className="absolute top-[20%] left-[40%] text-blue-300 opacity-60"
        animate={{
          y: [0, 12, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ArrowRight size={25} />
      </motion.div>

      <motion.div
        className="absolute bottom-[35%] right-[35%] text-blue-300 opacity-60"
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ArrowLeft size={25} />
      </motion.div>

      {/* Type and Function symbols */}
      <motion.div
        className="absolute top-[60%] right-[20%] text-blue-400 opacity-60"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Type size={22} />
      </motion.div>

      <motion.div
        className="absolute bottom-[40%] left-[35%] text-blue-400 opacity-60"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <FunctionSquare size={22} />
      </motion.div>

      {/* Parentheses */}
      <motion.div
        className="absolute top-[25%] right-[30%] text-blue-300 opacity-60"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Parentheses size={30} />
      </motion.div>

      {/* Variable */}
      <motion.div
        className="absolute bottom-[30%] left-[30%] text-blue-300 opacity-60"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Variable size={25} />
      </motion.div>

      {/* Additional symbols */}
      <motion.div
        className="absolute top-[10%] left-[30%] text-blue-300 opacity-60"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Slash size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[20%] text-blue-300 opacity-60"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Equal size={20} />
      </motion.div>

      <motion.div
        className="absolute top-[35%] left-[15%] text-blue-300 opacity-60"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Plus size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-[45%] right-[15%] text-blue-300 opacity-60"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Minus size={20} />
      </motion.div>

      <motion.div
        className="absolute top-[50%] right-[10%] text-blue-300 opacity-60"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Asterisk size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[10%] text-blue-300 opacity-60"
        animate={{
          y: [0, 12, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Percent size={20} />
      </motion.div>

      <motion.div
        className="absolute top-[15%] right-[5%] text-blue-300 opacity-60"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <AtSign size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-[5%] right-[5%] text-blue-300 opacity-60"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <DollarSign size={20} />
      </motion.div>

      {/* Text elements */}
      <motion.div
        className="absolute top-[10%] right-[10%] text-blue-400 opacity-50 font-mono text-sm"
        animate={{
          y: [0, -5, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"{ enggan: true }"}
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[10%] text-blue-400 opacity-50 font-mono text-sm"
        animate={{
          y: [0, 5, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"mending bed rest"}
      </motion.div>

      <motion.div
        className="absolute top-[40%] right-[5%] text-blue-400 opacity-50 font-mono text-sm"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"ngapain ngoding"}
      </motion.div>

      {/* Additional text elements */}
      <motion.div
        className="absolute top-[25%] left-[5%] text-blue-400 opacity-50 font-mono text-sm"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"const malas = true"}
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] right-[10%] text-blue-400 opacity-50 font-mono text-sm"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"function procrastinate() {}"}
      </motion.div>

      <motion.div
        className="absolute top-[70%] left-[10%] text-blue-400 opacity-50 font-mono text-sm"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {"while(true) { sleep() }"}
      </motion.div>
    </div>
  )
}
