"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Settings, ShieldCheck, Bell, Save } from "lucide-react";
import toast from "react-hot-toast";
import { fetchUserProfile, updateUserProfile } from "@/lib/api/user";
import { useUserProfile } from "@/lib/api/useUserProfile";

export default function SettingsPage() {
  const { data: session } = useSession();
  const { profile, updateProfile } = useUserProfile();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUserProfile();
        updateProfile(data);
      } catch (err: unknown) {
        if (err instanceof Error) toast.error(err.message);
        else toast.error("Erreur inconnue");
      }
    };
    load();
  }, [updateProfile]);

  return (
    <div className="section-spacing min-h-screen w-full px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className="text-center text-4xl font-bold text-white">Paramètres</h1>

        {/* Notifications */}
        <section className="rounded-2xl border border-slate-600/30 bg-slate-800/50 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-3 text-xl font-semibold text-white">
            <Bell className="h-5 w-5 text-turquoise" />
            Notifications
          </div>
          <p className="text-sm text-gray-400">
            Gérez les notifications que vous souhaitez recevoir.
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <label className="flex items-center justify-between gap-4">
              <span className="text-white">Recevoir les e-mails de mises à jour</span>
              <input type="checkbox" className="accent-turquoise" />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span className="text-white">Alertes de sécurité</span>
              <input type="checkbox" className="accent-turquoise" defaultChecked />
            </label>
          </div>
        </section>

        {/* Confidentialité */}
        <section className="rounded-2xl border border-slate-600/30 bg-slate-800/50 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-3 text-xl font-semibold text-white">
            <ShieldCheck className="h-5 w-5 text-turquoise" />
            Confidentialité
          </div>
          <p className="text-sm text-gray-400">
            Contrôlez qui peut voir vos informations de profil.
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <label className="flex items-center justify-between gap-4">
              <span className="text-white">Afficher mon profil publiquement</span>
              <input type="checkbox" className="accent-turquoise" />
            </label>
            <label className="flex items-center justify-between gap-4">
              <span className="text-white">Masquer mon adresse email</span>
              <input type="checkbox" className="accent-turquoise" defaultChecked />
            </label>
          </div>
        </section>

        {/* Sauvegarde */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => toast.success("Modifications enregistrées")}
            className="flex items-center gap-3 rounded-full bg-turquoise px-10 py-3 font-semibold text-rich transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-turquoise/25"
          >
            <Save className="h-5 w-5" />
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}
