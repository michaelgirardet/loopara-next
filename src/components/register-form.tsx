"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const data = await res.json();
      setError(data.message || "Une erreur est survenue.");
    }
  };

  return (
    <div
      className={cn(
        // Utilise un gradient plus proche de LoginForm si tu veux, sinon laisse comme ça
        "justify-centerpx-4 flex min-h-screen items-center",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md rounded-2xl border border-gunmetal bg-rich shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="font-hind text-2xl font-bold text-white">Créer un compte</CardTitle>
          <CardDescription className="text-gray-400">Rejoins la boucle musicale.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="joe@loopara.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-turquoise/40 bg-rich text-white focus-visible:ring-turquoise"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-turquoise/40 bg-rich text-white focus-visible:ring-turquoise"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirm-password" className="text-white">
                  Confirmer le mot de passe
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  placeholder="Confirmer le mot de passe"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border border-turquoise/40 bg-rich text-white focus-visible:ring-turquoise"
                />
              </div>

              {error && <p className="text-sm font-medium text-red-400">{error}</p>}

              <Button
                type="submit"
                className="hover:bg-turquoise-hover w-full rounded-xl bg-turquoise text-black transition-colors"
              >
                S’inscrire
              </Button>
            </div>

            <div className="text-center text-sm">
              Déjà un compte ?{" "}
              <a href="/login" className="text-turquoise hover:underline">
                Connecte-toi
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
