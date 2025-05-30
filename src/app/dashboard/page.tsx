"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Music, Settings, User } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="section-spacing min-h-screen w-full bg-rich p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tableau de bord
        </h1>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-800 text-white">
            <TabsTrigger value="overview" className="data-[state=active]:bg-turquoise">
              Aperçu
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-turquoise">
              Projets
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-turquoise">
              Compte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-turquoise/40 bg-rich">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Music size={20} /> Motifs générés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-turquoise">124</p>
                  <p className="text-gray-400">Ce mois-ci</p>
                </CardContent>
              </Card>

              <Card className="border border-turquoise/40 bg-rich">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User size={20} /> Statut
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-600 text-white">Premium</Badge>
                </CardContent>
              </Card>

              <Card className="border border-turquoise/40 bg-rich">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Settings size={20} /> Paramètres rapides
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="hover:bg-turquoise-hover bg-turquoise text-black">
                    Modifier le profil
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <Card className="border border-turquoise/40 bg-rich">
              <CardHeader>
                <CardTitle className="text-white">Derniers projets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="border-b border-turquoise/20 pb-2">
                    Projet "Chill Beat" - 28 mai
                  </li>
                  <li className="border-b border-turquoise/20 pb-2">
                    Projet "Trap Fusion" - 24 mai
                  </li>
                  <li className="pb-2">Projet "Jazz Hop" - 20 mai</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account">
            <Card className="border border-turquoise/40 bg-rich">
              <CardHeader>
                <CardTitle className="text-white">Informations du compte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Email :</strong> joe@loopara.com
                  </p>
                  <p>
                    <strong>Abonnement :</strong> Premium mensuel
                  </p>
                  <p>
                    <strong>Inscrit depuis :</strong> 12 janvier 2025
                  </p>
                  <Separator className="bg-turquoise/20" />
                  <Button variant="destructive" className="mt-4">
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
