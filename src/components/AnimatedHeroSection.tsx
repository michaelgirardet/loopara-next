import { motion } from "framer-motion";

const AnimatedHeroSection = () => {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <motion.div
          className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            Inspire ta prochaine boucle.
          </motion.h1>

          <motion.h2
            className="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            En une seconde.
          </motion.h2>

          <motion.p
            className="mt-6 max-w-3xl px-4 text-base leading-relaxed text-gray-300 sm:text-lg lg:mt-8 lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
          >
            Loopara est un générateur de fichiers MIDI simple et rapide. Crée en quelques secondes
            des motifs personnalisés, choisis ta gamme, ton tempo, et télécharge un fichier prêt à
            l'emploi pour Ableton, FL Studio ou Logic.
          </motion.p>

          <motion.button
            type="button"
            className="group mt-8 cursor-pointer rounded-full border-2 border-teal-400 bg-transparent px-8 py-3 text-sm font-semibold text-teal-400 transition-all duration-300 hover:scale-105 hover:bg-teal-400 hover:text-gray-900 sm:px-10 sm:py-4 sm:text-base lg:mt-10 lg:px-12 lg:py-5 lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(68, 187, 164, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              Démarrer
              <motion.span
                className="text-lg"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ♪
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Musical wave animation - représente les ondes sonores */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          {/* Sound wave 1 - Bass frequencies */}
          <motion.svg
            className="absolute bottom-0 h-32 w-full lg:h-40"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            animate={{
              x: [0, 30, 0],
              scaleY: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <title>bass-wave</title>
            <path
              fill="#44BBA4"
              fillOpacity="0.06"
              d="M0,128L21.8,160C43.6,192,87,256,131,266.7C174.5,277,218,235,262,192C305.5,149,349,107,393,96C436.4,85,480,107,524,112C567.3,117,611,107,655,85.3C698.2,64,742,32,785,42.7C829.1,53,873,107,916,133.3C960,160,1004,160,1047,160C1090.9,160,1135,160,1178,186.7C1221.8,213,1265,267,1309,256C1352.7,245,1396,171,1418,133.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            />
          </motion.svg>

          {/* Sound wave 2 - Mid frequencies */}
          <motion.svg
            className="absolute bottom-0 h-32 w-full lg:h-40"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            animate={{
              x: [0, -20, 0],
              scaleY: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <title>mid-wave</title>
            <path
              fill="#44BBA4"
              fillOpacity="0.08"
              d="M0,96L24,112C48,128,96,160,144,165.3C192,171,240,149,288,149.3C336,149,384,171,432,165.3C480,160,528,128,576,133.3C624,139,672,181,720,186.7C768,192,816,160,864,138.7C912,117,960,107,1008,122.7C1056,139,1104,181,1152,181.3C1200,181,1248,139,1296,128C1344,117,1392,139,1416,149.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            />
          </motion.svg>

          {/* Sound wave 3 - High frequencies */}
          <motion.svg
            className="absolute bottom-0 h-32 w-full lg:h-40"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            animate={{
              x: [0, 15, 0],
              scaleY: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <title>high-wave</title>
            <path
              fill="#44BBA4"
              fillOpacity="0.1"
              d="M0,160L26.7,170.7C53.3,181,107,203,160,197.3C213.3,192,267,160,320,149.3C373.3,139,427,149,480,170.7C533.3,192,587,224,640,213.3C693.3,203,747,149,800,144C853.3,139,907,181,960,197.3C1013.3,213,1067,203,1120,181.3C1173.3,160,1227,128,1280,138.7C1333.3,149,1387,203,1413,229.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            />
          </motion.svg>
        </div>

        {/* Gradient overlay for better text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/80 via-transparent to-gray-900/60" />
      </section>
    </>
  );
};

export default AnimatedHeroSection;
