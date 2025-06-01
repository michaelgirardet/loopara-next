import type { UserProfile } from "@/types/types";

// Fonction à exporter pour récupérer les informations non-confidentielles de l'utilisateur

export const fetchUserProfile = async (): Promise<UserProfile> => {
  const res = await fetch("/api/user/profile", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Erreur lors du chargement du profil.");
  }

  return await res.json();
};

export const updateUserProfile = async (payload: {
  bio?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  phone?: string;
  website?: string;
  location?: string;
}) => {
  const res = await fetch("/api/user/profile", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Erreur lors de la mise à jour du profil.");
  }

  return await res.json();
};
