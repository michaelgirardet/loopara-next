import type { UserProfile } from "@/types/types";
import { useCallback, useState } from "react";

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>({
    firstname: "",
    lastname: "",
    username: "",
    bio: "",
    location: "",
    website: "",
    phone: "",
    createdAt: "",
    image: "",
  });

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  return { profile, updateProfile };
}
