"use client";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Music,
  Settings,
  User,
  TrendingUp,
  Calendar,
  Clock,
  Play,
  Crown,
  Activity,
  Headphones,
} from "lucide-react";

export default function DashboardPage() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Récupérer le nombre de patterns générés
  useEffect(() => {
    const getCount = async () => {
      try {
        const res = await fetch("/api/midi-pattern", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (res.ok) {
          setCount(data.patterns.length);
        } else {
          setError(data.error || "Une erreur est survenue.");
        }
      } catch (err) {
        setError("Erreur de connexion au serveur.");
      }
    };

    getCount();
  }, []);

  return (
    <div className="section-spacing min-h-screen w-full bg-rich p-6 text-white">
      <div className="mx-auto max-w-7xl">
        {/* En-tête avec salutation */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bonjour, Joe ! 👋
              </h1>
              <p className="text-lg text-gray-400">Voici un aperçu de votre activité musicale</p>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <Badge variant="outline" className="border-turquoise text-turquoise">
                <Crown className="mr-1 h-3 w-3" />
                Premium
              </Badge>
              <Button size="sm" className="bg-turquoise text-black hover:bg-turquoise/80">
                Nouveau projet
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="rounded-lg border border-rich/50 bg-gunmetal p-1">
            <TabsTrigger
              value="overview"
              className="text-gray-300 transition-all duration-200 data-[state=active]:bg-turquoise data-[state=active]:text-black"
            >
              <Activity className="mr-2 h-4 w-4" />
              Aperçu
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="text-gray-300 transition-all duration-200 data-[state=active]:bg-turquoise data-[state=active]:text-black"
            >
              <Music className="mr-2 h-4 w-4" />
              Projets
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="text-gray-300 transition-all duration-200 data-[state=active]:bg-turquoise data-[state=active]:text-black"
            >
              <User className="mr-2 h-4 w-4" />
              Compte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Statistiques principales */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="group border border-turquoise/20 bg-gunmetal transition-colors hover:border-turquoise/40">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg bg-turquoise/10 p-2 transition-colors group-hover:bg-turquoise/20">
                        <Music className="h-4 w-4 text-turquoise" />
                      </div>
                      <span className="text-sm font-medium">Motifs générés</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-turquoise">{count}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <TrendingUp className="h-3 w-3 text-green-400" />
                      +18% ce mois-ci
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border border-turquoise/20 bg-gunmetal transition-colors hover:border-turquoise/40">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg bg-turquoise/10 p-2 transition-colors group-hover:bg-turquoise/20">
                        <Headphones className="h-4 w-4 text-turquoise" />
                      </div>
                      <span className="text-sm font-medium">Écoutes</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-turquoise">2.8k</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <TrendingUp className="h-3 w-3 text-green-400" />
                      +5% cette semaine
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border border-turquoise/20 bg-gunmetal transition-colors hover:border-turquoise/40">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg bg-turquoise/10 p-2 transition-colors group-hover:bg-turquoise/20">
                        <Clock className="h-4 w-4 text-turquoise" />
                      </div>
                      <span className="text-sm font-medium">Temps studio</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-turquoise">42h</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" />
                      Ce mois-ci
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group border border-turquoise/20 bg-gunmetal transition-colors hover:border-turquoise/40">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg bg-green-500/10 p-2 transition-colors group-hover:bg-green-500/20">
                        <Crown className="h-4 w-4 text-green-400" />
                      </div>
                      <span className="text-sm font-medium">Statut</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="border border-green-600/30 bg-green-600/20 text-green-400">
                    Premium
                  </Badge>
                  <p className="mt-2 text-xs text-gray-400">Expire le 12 juin</p>
                </CardContent>
              </Card>
            </div>

            {/* Section actions rapides */}
            <Card className="border border-turquoise/20 bg-gunmetal">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Settings className="h-5 w-5 text-turquoise" />
                  Actions rapides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <Button className="bg-turquoise font-medium text-black hover:bg-turquoise/80">
                    Modifier le profil
                  </Button>
                  <Button
                    variant="outline"
                    className="border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                  >
                    Télécharger les projets
                  </Button>
                  <Button
                    variant="outline"
                    className="border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                  >
                    Paramètres avancés
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Vos projets</h2>
              <Button size="sm" className="bg-turquoise text-black hover:bg-turquoise/80">
                Nouveau projet
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Projets récents */}
              <Card className="border border-turquoise/20 bg-gunmetal">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    Projets récents
                    <Badge variant="outline" className="border-turquoise/30 text-turquoise">
                      3
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Chill Beat", date: "28 mai", status: "En cours", plays: 45 },
                      { name: "Trap Fusion", date: "24 mai", status: "Terminé", plays: 128 },
                      { name: "Jazz Hop", date: "20 mai", status: "Terminé", plays: 89 },
                    ].map((project, index) => (
                      <div
                        key={uuidv4()}
                        className="flex items-center justify-between rounded-lg bg-rich/50 p-3 transition-colors hover:bg-rich/70"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-turquoise/10">
                            <Music className="h-4 w-4 text-turquoise" />
                          </div>
                          <div>
                            <p className="font-medium text-white">{project.name}</p>
                            <p className="text-sm text-gray-400">{project.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              project.status === "En cours"
                                ? "border-yellow-500/30 text-yellow-400"
                                : "border-green-500/30 text-green-400"
                            }`}
                          >
                            {project.status}
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-turquoise hover:bg-turquoise/10"
                          >
                            <Play className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Statistiques projets */}
              <Card className="border border-turquoise/20 bg-gunmetal">
                <CardHeader>
                  <CardTitle className="text-white">Progression ce mois</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-gray-400">Projets complétés</span>
                      <span className="text-sm font-medium text-turquoise">8/10</span>
                    </div>
                    <Progress value={80} className="h-2 bg-rich" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-gray-400">Objectif mensuel</span>
                      <span className="text-sm font-medium text-turquoise">12/15</span>
                    </div>
                    <Progress value={80} className="h-2 bg-rich" />
                  </div>
                  <Separator className="bg-turquoise/20" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Total écoutes</span>
                    <span className="font-semibold text-white">2,847</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Informations principales */}
              <Card className="border border-turquoise/20 bg-gunmetal lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="h-5 w-5 text-turquoise" />
                    Informations du compte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-400">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value="joe@loopara.com"
                          readOnly
                          className="mt-1 w-full rounded-md border border-gray-600 bg-gunmetal p-2 text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-400">
                          Nom d'utilisateur
                        </label>
                        <input
                          id="username"
                          type="text"
                          value="joe_beats"
                          readOnly
                          className="mt-1 w-full rounded-md border border-gray-600 bg-gunmetal p-2 text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="subscription" className="text-sm font-medium text-gray-400">
                          Abonnement
                        </label>
                        <input
                          id="subscription"
                          type="text"
                          value="Premium mensuel"
                          readOnly
                          className="mt-1 w-full rounded-md border border-gray-600 bg-gunmetal p-2 text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="member-since" className="text-sm font-medium text-gray-400">
                          Membre depuis
                        </label>
                        <input
                          id="member-since"
                          type="text"
                          value="12 janvier 2025"
                          readOnly
                          className="mt-1 w-full rounded-md border border-gray-600 bg-gunmetal p-2 text-white"
                        />
                      </div>
                    </div>

                    <Separator className="bg-turquoise/20" />

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-turquoise text-black hover:bg-turquoise/80">
                        Modifier le profil
                      </Button>
                      <Button
                        variant="outline"
                        className="border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                      >
                        Changer le mot de passe
                      </Button>
                      <Button
                        variant="outline"
                        className="border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                      >
                        Préférences
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Abonnement */}
              <Card className="border border-turquoise/20 bg-gunmetal">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Crown className="h-5 w-5 text-turquoise" />
                    Abonnement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-turquoise/20 bg-turquoise/10 p-4 text-center">
                    <Crown className="mx-auto mb-2 h-8 w-8 text-turquoise" />
                    <p className="font-semibold text-turquoise">Premium</p>
                    <p className="text-sm text-gray-400">Expire le 12 juin 2025</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Projets illimités</span>
                      <span className="text-green-400">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Export haute qualité</span>
                      <span className="text-green-400">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Support prioritaire</span>
                      <span className="text-green-400">✓</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-turquoise/30 text-turquoise hover:bg-turquoise/10"
                  >
                    Gérer l'abonnement
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Zone de danger */}
            <Card className="mt-6 border border-red-500/20 bg-gunmetal">
              <CardHeader>
                <CardTitle className="text-red-400">Zone de danger</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">Supprimer le compte</p>
                    <p className="text-sm text-gray-400">Cette action est irréversible</p>
                  </div>
                  <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                    Supprimer mon compte
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
