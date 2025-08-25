import React, { useEffect, useState } from "react";
import { createUser, updateUser, fetchUser } from "../api/userApi";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../types/User";

const UserForm: React.FC = () => {
  // État local pour stocker les champs du formulaire
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    email: "",
  });

const [error, setError] = useState<string>(""); // Message d’erreur à afficher

  const navigate = useNavigate();               // Pour rediriger après un enregistrement
  const { id } = useParams<{ id: string }>();   // Récupération du paramètre URL (si modification)

  // Si en mode "édition", on charge les données de l'utilisateur à modifier
  useEffect(() => {
    if (id) {
      fetchUser(Number(id)).then((user) =>
        setFormData({ name: user.name, email: user.email }))
      .catch(()=> setError("⚠️ Impossible de charger l'utilisateur."));
    }
  }, [id]);

  // Soumission du formulaire (création ou mise à jour)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      if (id) {
        await updateUser(Number(id), formData); // Mise à jour
      } else {
        await createUser(formData); // Création
      }
      setError("");  // Nettoie l'erreur
      navigate("/"); // Redirection vers la liste
    } catch (error) {
      setError("⚠️ Une erreur s'est produite lors de l'enregistrement.");
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Modifier" : "Ajouter"} un utilisateur</h2>
      <input
        type="text"
        placeholder="Nom"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <button type="submit">💾 Enregistrer</button>
    </form>
  );
};

export default UserForm;
