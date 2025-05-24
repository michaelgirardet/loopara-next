'use client'
import { motion } from "framer-motion";
import { Mail, MessageSquareHeart } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`❌ Erreur : ${errorData.error || "Envoi impossible"}`);
        return;
      }

      alert("✅ Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("❌ Erreur réseau. Réessaie plus tard.");
    }
  };

  return (
    <motion.div
      className="font-hind bg-purple text-powder sm:px flex min-h-screen flex-col items-center justify-center px-5 pt-28 pb-16 sm:pt-42 md:pt-48 md:pb-18 lg:pt-40 lg:pb-36"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="max-w-[700px] text-center text-5xl font-bold text-[#E2768A] capitalize sm:text-5xl lg:text-6xl"
        variants={titleVariants}
      >
        Contacte-nous
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-center text-lg font-bold text-[#FEFEFE]"
        variants={itemVariants}
      >
        Une idée, une suggestion ou juste envie de dire bonjour ?
        <br />
        Laisse-nous un message — on te répond vite !
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl space-y-6 rounded-2xl bg-[#2A2D34]/30 p-8 shadow-xl"
        variants={itemVariants}
      >
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-[#fefefe]"
          >
            Ton prénom
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Ex: Sarah"
            className="rounded-md border border-[#2C2F31] bg-[#030504] px-4 py-3 text-[#FEFEFE] placeholder-[#888] outline-none focus:border-[#E2768A] focus:ring-2 focus:ring-[#E2768A]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#fefefe]"
          >
            Ton email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Ex: sarah@loopara.com"
            className="rounded-md border border-[#2C2F31] bg-[#030504] px-4 py-3 text-[#FEFEFE] placeholder-[#888] outline-none focus:border-[#E2768A] focus:ring-2 focus:ring-[#E2768A]"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-[#fefefe]"
          >
            Ton message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Dis-nous tout !"
            className="rounded-md border border-[#2C2F31] bg-[#030504] px-4 py-3 text-[#FEFEFE] placeholder-[#888] outline-none focus:border-[#E2768A] focus:ring-2 focus:ring-[#E2768A]"
          />
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center">
          <motion.button
            type="submit"
            className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#E2768A] px-6 py-3 text-sm font-medium text-[#E2768A] hover:bg-[#E2768A] hover:text-[#030504] focus:ring-4 focus:ring-purple-300 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquareHeart size={18} />
            Envoyer le message
          </motion.button>
        </div>
      </motion.form>

      <motion.div
        className="text-md mt-12 flex flex-col items-center gap-2 text-white sm:flex-row"
        variants={itemVariants}
      >
        <Mail size={16} className="text-[#fefefe]" />
        <span>Votre message peut faire groover la prochaine version.</span>
      </motion.div>
    </motion.div>
  );
}
