import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../api/userApi"; // Fonctions d’API
import type { User } from "../types/User";               // Type utilisateur
import { Link } from "react-router-dom";                 // Pour la navigation

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // État local pour stocker les utilisateurs
  const [error, setError] = useState<string>(""); // État pour afficher un message d'erreur

  // Charger les utilisateurs depuis l'API
  const loadUsers = async () => {
    try {
      const data = await fetchUsers(); // Appel API
      setUsers(data);                  // Mise à jour de l'état
      setError("");                    // Réinitialise l'erreur si succès
    } catch (error) {
      setError("⚠️ Erreur lors du chargement des utilisateurs."); // Message affiché si erreur
    }
    
  };

  useEffect(() => {
    loadUsers();                     // Charger les utilisateurs au chargement du composant
  }, []);

  // Supprimer un utilisateur
  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);            // Supprimer l'utilisateur par son ID
      loadUsers();                     // Recharger la liste après suppression
    } catch (error) {
      setError("⚠️ Erreur lors de la suppression de l'utilisateur.");
    }
    
  };

  return (
    <div>
      <h2>Utilisateurs</h2>
      <Link to="/add">➕ Ajouter un utilisateur</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
            {" | "}
            <Link to={`/edit/${user.id}`}>✏️ Modifier</Link>
            {" | "}
            <button onClick={() => handleDelete(user.id)}>🗑️ Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
