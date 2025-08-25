import type { User } from "../types/User"; // Import de notre type

const API_URL = "https://jsonplaceholder.typicode.com/users"; // URL de base de l'API

// Obtenir la liste de tous les utilisateurs
export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch(API_URL); // Appel GET
    if (!response.ok) throw new Error("Erreur http"); // Si le statut HTTP n’est pas OK (ex: 404), on déclenche une erreur
    return response.json();                // Conversion de la réponse en JSON
  } catch (error) {
    console.error("Erreur fetchUsers:", error); // Log technique pour les devs
    throw error; // On relance l’erreur pour que le composant appelant la gère
  }
 
}

// Obtenir un utilisateur spécifique par ID
export async function fetchUser(id: number): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Erreur HTTP");
    return response.json();
  } catch (error) {
    console.error("Erreur fetchUser:", error);
    throw error;
  }
  
}

// Créer un nouvel utilisateur
export async function createUser(user: Omit<User, "id">): Promise<User> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",                                  // Méthode POST pour créer
      headers: { "Content-Type": "application/json" }, // Type de contenu. On précise qu'on envoie du JSON
      body: JSON.stringify(user),                      // Données à envoyer (stringifiées). Conversion en JSON
    });
    if (!response.ok) throw new Error("Erreur HTTP");
    return response.json();    
  } catch (error) {
    console.error("Erreur createUser:", error);
    throw error;   
  }

}

// Mettre à jour un utilisateur existant
export async function updateUser(id: number, user: Omit<User, "id">): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT", // Méthode PUT pour mise à jour
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error("Erreur HTTP");
    return response.json();
  } catch (error) {
    console.error("Erreur updateUser:", error);
    throw error;
  }
  
}

// Supprimer un utilisateur
export async function deleteUser(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" }); // Suppression par ID
    if (!response.ok) throw new Error("Erreur HTTP");
  } catch (error) {
    console.error("Erreur deleteUser:", error);
    throw error;
  }
 
}
