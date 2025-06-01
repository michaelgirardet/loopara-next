"use client";

import { useEffect, useState } from "react";
import { User, Camera, Edit3, Crown, Award, Save, MapPin, Calendar, Music } from "lucide-react";
import { fetchUserProfile, updateUserProfile } from "@/lib/api/user";
import { useUserProfile } from "@/lib/api/useUserProfile";
import toast from "react-hot-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const { profile, updateProfile } = useUserProfile();
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUserProfile();
        updateProfile(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error("Erreur inconnue");
        }
      }
    };
    load();
  }, [updateProfile]);

  const handleSave = async () => {
    await updateUserProfile({
      bio: profile.bio,
      firstname: profile.firstname,
      lastname: profile.lastname,
      username: profile.username,
      location: profile.location,
    });
  };

  return (
    <div className="section-spacing min-h-screen w-full bg-rich text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Profil Header */}
        <Card className="relative overflow-hidden border border-turquoise/20 bg-rich p-8 sm:p-12">
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
            {/* Avatar */}
            <div className="group relative mx-auto lg:mx-0">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-turquoise p-1 lg:h-40 lg:w-40">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-700">
                  <User className="h-16 w-16 text-turquoise lg:h-20 lg:w-20" />
                </div>
              </div>
              <button
                type="button"
                className="text-tich absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-turquoise font-semibold shadow-lg hover:bg-turquoisehover"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>

            {/* Infos utilisateur */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold capitalize text-transparent lg:text-5xl">
                {profile.username}
              </h1>
              <p className="mt-2 flex items-center justify-center gap-2 text-lg text-gray-400 lg:justify-start">
                <Music className="h-5 w-5 text-turquoise" />
                Producteur musical • Beatmaker
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-400 lg:justify-start">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Membre depuis {profile.joinDate}
                </div>
              </div>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Badge className="border border-green-500/30 bg-green-500/10 text-green-400">
                  <Crown className="mr-1 h-4 w-4" />
                  Premium
                </Badge>
                <Badge className="border border-turquoise/30 bg-turquoise/10 text-turquoise">
                  <Award className="mr-1 h-4 w-4" />
                  Top Producer
                </Badge>
              </div>

              {/* Action */}
              <div className="mt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-turquoise to-cyan-400 text-slate-900 hover:shadow-lg hover:shadow-turquoise/25"
                  onClick={() => {
                    setActiveTab("info");
                    document.getElementById("tab-profile")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Edit3 className="mr-2 h-4 w-4" />
                  Modifier le profil
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Formulaire infos */}
        <div id="tab-profile" className="scroll-mt-24">
          {activeTab === "info" && (
            <Card className="border border-turquoise/20 bg-rich p-8 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <User className="h-5 w-5 text-turquoise" />
                  Informations personnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-400">
                      Prénom
                      <input
                        type="text"
                        value={profile.firstname ?? ""}
                        onChange={(e) => updateProfile({ firstname: e.target.value })}
                        className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-3 text-white placeholder-gray-400 focus:border-turquoise focus:ring-1 focus:ring-turquoise"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-400">
                      Nom
                      <input
                        type="text"
                        value={profile.lastname ?? ""}
                        onChange={(e) => updateProfile({ lastname: e.target.value })}
                        className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-3 text-white placeholder-gray-400 focus:border-turquoise focus:ring-1 focus:ring-turquoise"
                      />
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-400">
                      Nom d'utilisateur
                      <input
                        type="text"
                        value={profile.username ?? ""}
                        onChange={(e) => updateProfile({ username: e.target.value })}
                        className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-3 text-white placeholder-gray-400 focus:border-turquoise focus:ring-1 focus:ring-turquoise"
                      />
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-400">
                      Biographie
                      <textarea
                        rows={4}
                        value={profile.bio ?? ""}
                        onChange={(e) => updateProfile({ bio: e.target.value })}
                        className="mt-1 w-full rounded-md border border-slate-600 bg-slate-800 p-3 text-white placeholder-gray-400 focus:border-turquoise focus:ring-1 focus:ring-turquoise"
                      />
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-8 flex justify-center">
                <Button
                  className="bg-gradient-to-r from-turquoise to-cyan-400 text-black hover:shadow-lg hover:shadow-turquoise/25"
                  onClick={handleSave}
                >
                  <Save className="mr-2 h-5 w-5" />
                  Enregistrer les modifications
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
