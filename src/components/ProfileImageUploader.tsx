"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Loader2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export function ProfileImageUploader({ onClose }: { onClose: () => void }) {
  const { update } = useSession();
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file?.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHighlighted(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile?.type.startsWith("image/")) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(droppedFile);
    }
  };

  const handleUpload = async () => {
    if (!preview || !selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile); // ⬅️ envoie le vrai fichier

    setLoading(true);
    try {
      const res = await fetch("/api/user/profile-image", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        toast.success("Photo de profil correctement mise à jout !");
      } else if (!res.ok) {
        const error = await res.json();
        throw new Error(error?.message || "Erreur lors de l'upload");
      }

      await res.json();
      await update(); // ⬅️ met à jour la session next-auth
      onClose();
    } catch (err) {
      console.error("Erreur upload image :", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Zone de drop */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setHighlighted(true)}
        onDragLeave={() => setHighlighted(false)}
        className={`relative flex h-48 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed px-4 transition-colors duration-300 ${
          highlighted ? "border-turquoise bg-turquoise/10" : "border-gray-500 bg-slate-800"
        }`}
      >
        {preview ? (
          <Image src={preview} alt="Prévisualisation" fill className="rounded-lg object-contain" />
        ) : (
          <p className="z-10 text-center text-sm text-gray-400">Glissez une image ici ou cliquez</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 z-20 cursor-pointer opacity-0"
        />
      </div>

      {/* Boutons */}
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose} disabled={loading}>
          Annuler
        </Button>
        <Button onClick={handleUpload} className="bg-turquoise text-black">
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Upload className="mr-2 h-4 w-4" />
          )}
          Sauvegarder
        </Button>
      </div>
    </div>
  );
}
