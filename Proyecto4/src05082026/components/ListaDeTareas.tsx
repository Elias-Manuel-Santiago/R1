import { useState } from 'react';

interface Tarea {
  id: number;
  texto: string;
  hecha: boolean;
}

function ListaDeTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  const agregarTarea = (texto: string) => {
    const nuevaTarea: Tarea = { id: Date.now(), texto, hecha: false };
    setTareas(prev => [...prev, nuevaTarea]);
  };

  const eliminarTarea = (id: number) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  const toggleTarea = (id: number) => {
    setTareas(prev =>
      prev.map(t => t.id === id ? { ...t, hecha: !t.hecha } : t)
    );
  };

  return (
    <ul>
      {tareas.map(tarea => (
        <li key={tarea.id} onClick={() => toggleTarea(tarea.id)}>
          {tarea.texto} {tarea.hecha ? '✅' : ''}
          <button onClick={() => eliminarTarea(tarea.id)}>Borrar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTareas