"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email ou mot de passe incorrect.");
    } else if (result?.ok) {
      // Redirige vers la page d'accueil ou dashboard
      window.location.href = "/";
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="w-full max-w-md rounded-2xl border border-gunmetal bg-rich shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="font-hind text-2xl font-bold text-white">Se connecter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    className="border border-turquoise/40 bg-rich text-white focus-visible:ring-turquoise"
                    type="email"
                    placeholder="joe@loopara.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Mot de passe</Label>
                  </div>
                  <Input
                    className="border border-turquoise/40 bg-rich text-white focus-visible:ring-turquoise"
                    id="password"
                    type="password"
                    placeholder="mot de passe sécurisé"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <a href="/" className="text-right text-sm text-turquoise hover:underline">
                  Mot de passe oublié ?
                </a>
                <Button
                  type="submit"
                  className="hover:bg-turquoise-hover w-full rounded-xl bg-turquoise text-black transition-colors"
                  disabled={loading}
                >
                  {loading ? "Connexion..." : "Se connecter"}
                </Button>
                {error && <p className="text-center text-red-500">{error}</p>}
              </div>
              <div className="text-center text-sm">
                Pas encore de compte ?{" "}
                <a href="/register" className="text-turquoise hover:underline">
                  S'Inscrire
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
