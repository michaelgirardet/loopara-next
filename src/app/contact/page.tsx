"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquareHeart } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const { error } = await response.json();
        alert(`❌ Erreur : ${error || "Envoi impossible"}`);
        return;
      }

      alert("✅ Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("❌ Erreur réseau. Réessaie plus tard.");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-purple text-powder flex min-h-screen w-full flex-col items-center justify-center px-5 pb-16 pt-28 font-hind sm:px-8 md:pt-48 lg:pt-40"
    >
      <motion.h1
        variants={fadeIn}
        custom={0}
        className="text-center text-5xl font-bold text-turquoise sm:text-5xl lg:text-6xl"
      >
        Contacte-nous
      </motion.h1>

      <motion.p
        variants={fadeIn}
        custom={1}
        className="mt-6 max-w-2xl text-center text-lg font-semibold text-white"
      >
        Une idée, une suggestion ou juste envie de dire bonjour ?<br />
        Laisse-nous un message — on te répond vite !
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        variants={fadeIn}
        custom={2}
        className="mt-10 w-full max-w-2xl space-y-6 rounded-2xl p-8"
      >
        {[
          {
            label: "Ton prénom",
            name: "name",
            type: "text",
            placeholder: "Ex: Sarah",
          },
          {
            label: "Ton email",
            name: "email",
            type: "email",
            placeholder: "Ex: sarah@loopara.com",
          },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name} className="flex flex-col space-y-2">
            <label htmlFor={name} className="text-sm font-semibold text-white">
              {label}
            </label>
            <input
              id={name}
              type={type}
              name={name}
              required
              value={form[name as keyof typeof form]}
              onChange={handleChange}
              placeholder={placeholder}
              className="placeholder-misty/70 rounded-md border border-gunmetal bg-gunmetal px-4 py-3 text-white outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise"
            />
          </div>
        ))}

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-white">
            Ton message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Dis-nous tout !"
            className="placeholder-misty/70 rounded-md border border-gunmetal bg-gunmetal px-4 py-3 text-white outline-none focus:border-turquoise focus:ring-2 focus:ring-turquoise"
          />
        </div>

        <div className="flex justify-center">
          <motion.button
            type="submit"
            className="focus:turquoise mt-4 flex items-center gap-2 rounded-full border border-turquoise px-6 py-3 text-sm font-medium text-turquoise transition-all hover:bg-turquoise hover:text-[#030504] focus:outline-none focus:ring-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquareHeart size={18} />
            Envoyer le message
          </motion.button>
        </div>
      </motion.form>

      <motion.div
        variants={fadeIn}
        custom={3}
        className="mt-12 flex flex-col items-center gap-2 text-sm text-white sm:flex-row"
      >
        <Mail size={16} className="text-[#fefefe]" />
        <span>Votre message peut faire groover la prochaine version.</span>
      </motion.div>
    </motion.div>
  );
}
