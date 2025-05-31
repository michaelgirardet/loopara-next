"use client";

import { v4 as uuidv4 } from "uuid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  User,
  Camera,
  Music,
  Globe,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Edit3,
  Save,
  Crown,
  Award,
  Headphones,
  Share2,
  Settings,
  Shield,
  Bell,
  Eye,
  Lock,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="section-spacing min-h-screen w-full bg-rich p-6 text-white">
      <div className="mx-auto max-w-6xl">
        {/* En-tête de profil */}
        <div className="mb-8">
          <div className="relative">
            {/* Bannière */}
            <div className="relative h-48 overflow-hidden rounded-xl bg-gradient-to-r from-turquoise/20 to-gunmetal">
              <div className="absolute inset-0 bg-gradient-to-t from-rich/60 to-transparent" />
              <Button
                size="sm"
                variant="outline"
                className="absolute right-4 top-4 border-white/20 text-white hover:bg-white/10"
              >
                <Camera className="mr-2 h-4 w-4" />
                Modifier la bannière
              </Button>
            </div>

            {/* Photo de profil et infos */}
            <div className="relative -mt-16 px-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                <div className="relative">
                  <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-rich bg-gunmetal">
                    <img
                      src="/api/placeholder/128/128"
                      alt="avatar-de-l'utilisateur"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-turquoise p-0 text-black hover:bg-turquoise/80"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="mb-2 text-3xl font-bold text-white">Joe Beats</h1>
                      <p className="mb-3 text-lg text-gray-400">Producteur musical • Beatmaker</p>
                      <div className="mb-4 flex items-center gap-3">
                        <Badge className="border border-green-600/30 bg-green-600/20 text-green-400">
                          <Crown className="mr-1 h-3 w-3" />
                          Premium
                        </Badge>
                        <Badge variant="outline" className="border-turquoise/30 text-turquoise">
                          <Award className="mr-1 h-3 w-3" />
                          Top Producer
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-turquoise text-black hover:bg-turquoise/80">
                      <Edit3 className="mr-2 h-4 w-4" />
                      Modifier le profil
                    </Button>
                  </div>

                  {/* Statistiques rapides */}
                  <div className="mt-4 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-turquoise">124</p>
                      <p className="text-sm text-gray-400">Projets</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-turquoise">2.8k</p>
                      <p className="text-sm text-gray-400">Écoutes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-turquoise">156</p>
                      <p className="text-sm text-gray-400">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="info" className="space-y-6">
          <TabsList className="rounded-lg border border-rich/50 bg-gunmetal p-1">
            <TabsTrigger
              value="info"
              className="text-gray-300 transition-all duration-200 data-[state=active]:bg-turquoise data-[state=active]:text-black"
            >
              <User className="mr-2 h-4 w-4" />
              Informations
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="text-gray-300 transition-all duration-200 data-[state=active]:bg-turquoise data-[state=active]:text-black"
            >
              <Globe className="mr-2 h-4 w-4" />
              Réseaux sociaux
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="text-gray-300 transition-all duration-200 data-[state=active]:bg-turquoise data-[state=active]:text-black"
            >
              <Settings className="mr-2 h-4 w-4" />
              Préférences
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="text-gray-300 transition-all duration-200 data-[state=active]:bg-turquoise data-[state=active]:text-black"
            >
              <Shield className="mr-2 h-4 w-4" />
              Confidentialité
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Informations personnelles */}
              <Card className="border border-turquoise/20 bg-gunmetal">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="h-5 w-5 text-turquoise" />
                    Informations personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-400">
                        Prénom
                      </Label>
                      <Input
                        id="firstName"
                        defaultValue="Joe"
                        className="mt-1 border-turquoise/20 bg-rich text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-400">
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        defaultValue="Beats"
                        className="mt-1 border-turquoise/20 bg-rich text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="username" className="text-gray-400">
                      Nom d'utilisateur
                    </Label>
                    <Input
                      id="username"
                      defaultValue="joe_beats"
                      className="mt-1 border-turquoise/20 bg-rich text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bio" className="text-gray-400">
                      Biographie
                    </Label>
                    <Textarea
                      id="bio"
                      placeholder="Parlez-nous de votre parcours musical..."
                      defaultValue="Producteur passionné depuis 8 ans, spécialisé dans les beats hip-hop et trap. J'aime créer des atmosphères uniques et collaborer avec des artistes talentueux."
                      className="mt-1 min-h-[100px] border-turquoise/20 bg-rich text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border border-turquoise/20 bg-gunmetal">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Mail className="h-5 w-5 text-turquoise" />
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-gray-400">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="joe@loopara.com"
                      className="mt-1 border-turquoise/20 bg-rich text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-400">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+33 6 12 34 56 78"
                      className="mt-1 border-turquoise/20 bg-rich text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-gray-400">
                      Localisation
                    </Label>
                    <Input
                      id="location"
                      defaultValue="Lyon, France"
                      className="mt-1 border-turquoise/20 bg-rich text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-gray-400">
                      Site web
                    </Label>
                    <Input
                      id="website"
                      defaultValue="https://joebeats.music"
                      className="mt-1 border-turquoise/20 bg-rich text-white"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Genres musicaux */}
            <Card className="border border-turquoise/20 bg-gunmetal">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Music className="h-5 w-5 text-turquoise" />
                  Genres musicaux préférés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Hip-Hop", "Trap", "R&B", "Jazz", "Funk", "Electronic", "Lo-Fi", "Drill"].map(
                    (genre) => (
                      <Badge
                        key={genre}
                        variant="outline"
                        className="cursor-pointer border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                      >
                        {genre}
                      </Badge>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                >
                  Ajouter un genre
                </Button>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-turquoise text-black hover:bg-turquoise/80">
                <Save className="mr-2 h-4 w-4" />
                Sauvegarder les modifications
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <Card className="border border-turquoise/20 bg-gunmetal">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Globe className="h-5 w-5 text-turquoise" />
                  Liens vers vos réseaux sociaux
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Instagram className="h-4 w-4 text-pink-400" />
                      <Label htmlFor="instagram" className="text-gray-400">
                        Instagram
                      </Label>
                    </div>
                    <Input
                      id="instagram"
                      placeholder="@votre_username"
                      defaultValue="@joe_beats_official"
                      className="border-turquoise/20 bg-rich text-white"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-blue-400" />
                      <Label htmlFor="twitter" className="text-gray-400">
                        Twitter
                      </Label>
                    </div>
                    <Input
                      id="twitter"
                      placeholder="@votre_username"
                      defaultValue="@joebeatsmusic"
                      className="border-turquoise/20 bg-rich text-white"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Youtube className="h-4 w-4 text-red-400" />
                      <Label htmlFor="youtube" className="text-gray-400">
                        YouTube
                      </Label>
                    </div>
                    <Input
                      id="youtube"
                      placeholder="Lien vers votre chaîne"
                      defaultValue="youtube.com/c/joebeats"
                      className="border-turquoise/20 bg-rich text-white"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-green-400" />
                      <Label htmlFor="spotify" className="text-gray-400">
                        Spotify
                      </Label>
                    </div>
                    <Input
                      id="spotify"
                      placeholder="Lien vers votre profil"
                      defaultValue="open.spotify.com/artist/joebeats"
                      className="border-turquoise/20 bg-rich text-white"
                    />
                  </div>
                </div>

                <Separator className="bg-turquoise/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Profil public</p>
                    <p className="text-sm text-gray-400">
                      Permettre aux autres utilisateurs de voir votre profil
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="border border-turquoise/20 bg-gunmetal">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Bell className="h-5 w-5 text-turquoise" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      label: "Nouveaux followers",
                      desc: "Recevoir une notification pour chaque nouveau follower",
                    },
                    {
                      label: "Commentaires",
                      desc: "Notifications pour les commentaires sur vos projets",
                    },
                    { label: "Collaborations", desc: "Invitations à collaborer sur des projets" },
                    { label: "Newsletter", desc: "Recevoir les actualités et conseils de Loopara" },
                  ].map((item, index) => (
                    <div key={uuidv4()} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                      <Switch defaultChecked={index < 2} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border border-turquoise/20 bg-gunmetal">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Settings className="h-5 w-5 text-turquoise" />
                    Préférences d'interface
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="language" className="text-gray-400">
                      Langue
                    </Label>
                    <select className="mt-1 w-full rounded-md border border-turquoise/20 bg-rich px-3 py-2 text-white">
                      <option value="fr">Français</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="timezone" className="text-gray-400">
                      Fuseau horaire
                    </Label>
                    <select className="mt-1 w-full rounded-md border border-turquoise/20 bg-rich px-3 py-2 text-white">
                      <option value="Europe/Paris">Europe/Paris (UTC+1)</option>
                      <option value="America/New_York">America/New_York (UTC-5)</option>
                      <option value="Asia/Tokyo">Asia/Tokyo (UTC+9)</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Mode sombre</p>
                      <p className="text-sm text-gray-400">Interface en thème sombre</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="border border-turquoise/20 bg-gunmetal">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Shield className="h-5 w-5 text-turquoise" />
                  Paramètres de confidentialité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: Eye,
                    label: "Profil visible",
                    desc: "Permettre aux autres de voir votre profil public",
                    checked: true,
                  },
                  {
                    icon: Music,
                    label: "Projets publics",
                    desc: "Rendre vos projets visibles dans la galerie publique",
                    checked: true,
                  },
                  {
                    icon: Mail,
                    label: "Contact par email",
                    desc: "Permettre aux autres utilisateurs de vous contacter",
                    checked: false,
                  },
                  {
                    icon: Share2,
                    label: "Partage automatique",
                    desc: "Partager automatiquement vos nouveaux projets",
                    checked: false,
                  },
                ].map((item, index) => (
                  <div
                    key={uuidv4()}
                    className="flex items-center justify-between rounded-lg bg-rich/30 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-turquoise/10 p-2">
                        <item.icon className="h-4 w-4 text-turquoise" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{item.label}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    <Switch defaultChecked={item.checked} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-red-500/20 bg-gunmetal">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-400">
                  <Lock className="h-5 w-5" />
                  Sécurité du compte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Authentification à deux facteurs</p>
                    <p className="text-sm text-gray-400">Sécurisez votre compte avec 2FA</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                  >
                    Activer
                  </Button>
                </div>

                <Separator className="bg-turquoise/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Changer le mot de passe</p>
                    <p className="text-sm text-gray-400">Dernière modification: il y a 3 mois</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                  >
                    Modifier
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
