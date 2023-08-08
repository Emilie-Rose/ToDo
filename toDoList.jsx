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
      setObjet2((prevObjet) => [...prevObjet, { text: objet.objet, strikethrough: false }]);
      setObjet({ objet: "" });
    }
  };

  const handleDelete = (index) => {
    setObjet2((prevObjet) => {
      const updatedObjet = prevObjet.map((item, i) => {
        if (i === index) {
          return { ...item, strikethrough: !item.strikethrough };
        }
        return item;
      });
      return updatedObjet;
    });
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
      <span style={{ textDecoration: UnObjet2.strikethrough ? "line-through" : "none" }}>
        {UnObjet2.text} {/* Utilisez la propriété 'text' de l'objet */}
      </span>
      <button onClick={() => handleDelete(index)}>Supprimer</button>
    </li>
  ))}
      </ul>
    </div>
  );
};
export default ToDoList;
