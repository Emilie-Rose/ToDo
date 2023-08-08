import React, { useState } from "react";

const ToDoList = () => {
  /**
   * On crée des valeurs pas défaut pour initialer notre objet user.
   * qui contiendra les données saisies.
   */
  const [objet, setObjet] = useState({
    objet: "",
  });

  const [objet2, setObjet2] = useState([]);

  const handleChange = (event) => {
    /**
     * @event.target
     * Contient notre balise input de ce fait on peut s'en
     * servir pour récupérer un attribut spécifique.
     * On déstructure e.target pour récupérer l'attribut
     * name ainsi que sa value.
     * @Destructuration
     * Permet directement de déclarer une variable
     * et de lui assigner la valeur d'une propriété d'un objet.
     */
    const { name, value } = event.target;

    /**
     * @Spread (...)
     * Permet de créer une copie superficielles de notre objet
     */
    setObjet((prevObjet) => ({ ...prevObjet, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (objet.objet.trim() !== "") {
      setObjet2((prevObjet) => [...prevObjet, objet.objet]);
      setObjet({ objet: "" });
    }
  };

  const handleDelete = (index, newValue) => {
    setObjet2((prevObjet) => prevObjet.filter((_, i) => i !== index));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>To do list</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="objet"> </label>
        <input
          type="text"
          id="objet"
          name="objet"
          placeholder="A faire"
          value={objet.objet}
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
      <ul>
        {objet2.map((UnObjet2, index) => (
          <li key={index}>
            {UnObjet2}
            <button onClick={() => handleDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
