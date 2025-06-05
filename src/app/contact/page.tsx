"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquareHeart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const { error } = await res.json();
        toast.error(`❌ Erreur : ${error || "Envoi impossible"}`);
        return;
      }

      toast.success("✅ Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("❌ Erreur réseau. Réessaie plus tard.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center px-6 pb-16 pt-28 font-hind"
    >
      <h1 className="text-center text-5xl font-bold text-turquoise">Contacte-nous</h1>
      <p className="mt-4 text-center text-lg text-white">
        Une idée, une suggestion ou juste envie de dire bonjour ?<br />
        Laisse-nous un message — on te répond vite !
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full space-y-6 rounded-2xl bg-rich/10 p-8 backdrop-blur-md"
      >
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white">
              Ton prénom
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Ex: Sarah"
              value={form.name}
              onChange={handleChange}
              required
              className="border-turquoise/20 bg-gunmetal text-white"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">
              Ton email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Ex: sarah@loopara.com"
              value={form.email}
              onChange={handleChange}
              required
              className="border-turquoise/20 bg-gunmetal text-white"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message" className="text-white">
              Ton message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Dis-nous tout !"
              value={form.message}
              onChange={handleChange}
              required
              className="border-turquoise/20 bg-gunmetal text-white"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="btn-primary btn-md rounded-full">
            <MessageSquareHeart className="mr-2 h-4 w-4" />
            Envoyer le message
          </Button>
        </div>
      </form>

      <div className="mt-8 flex items-center gap-2 text-sm text-white">
        <Mail size={16} />
        Votre message peut faire groover la prochaine version.
      </div>
    </motion.section>
  );
}
