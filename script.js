const malla = [
  {
    semestre: 1,
    cursos: [
      { nombre: "Fundamentos de Economía I" },
      { nombre: "Introducción a la Investigación Social" },
      { nombre: "Fundamentos Generales del Derecho" },
      { nombre: "Sociología General" },
      { nombre: "Pensamientos y Doctrinas Políticas" },
    ],
  },
  {
    semestre: 2,
    cursos: [
      { nombre: "Fundamentos de Economía II", prereqs: ["Fundamentos de Economía I"] },
      { nombre: "Métodos y Técnicas de Investigación", prereqs: ["Introducción a la Investigación Social"] },
      { nombre: "Teoría del Estado y Sistema Constitucional Salvadoreño", prereqs: ["Fundamentos Generales del Derecho"] },
      { nombre: "Introducción a las Relaciones Internacionales", prereqs: ["Sociología General"] },
      { nombre: "Cultura e Identidad Nacional", prereqs: ["Pensamientos y Doctrinas Políticas"] },
    ],
  },
  {
    semestre: 3,
    cursos: [
      { nombre: "Economía Internacional", prereqs: ["Fundamentos de Economía II"] },
      { nombre: "Práctica de Investigación", prereqs: ["Métodos y Técnicas de Investigación"] },
      { nombre: "Sociología Política", prereqs: ["Teoría del Estado y Sistema Constitucional Salvadoreño"] },
      { nombre: "Teoría de las Relaciones Internacionales", prereqs: ["Introducción a las Relaciones Internacionales"] },
      { nombre: "Geografía Política y Económica Internacional", prereqs: ["Cultura e Identidad Nacional"] },
    ],
  },
  {
    semestre: 4,
    cursos: [
      { nombre: "Economía de El Salvador", prereqs: ["Economía Internacional", "Práctica de Investigación"] },
      { nombre: "Instituciones e Instrumentos de Derecho Internacional Público", prereqs: ["Sociología Política"] },
      { nombre: "Realidad Política de El Salvador y Centroamérica", prereqs: ["Sociología Política"] },
      { nombre: "Historia de las Relaciones Internacionales I", prereqs: ["Teoría de las Relaciones Internacionales"] },
      { nombre: "Globalización y Libre Comercio", prereqs: ["Geografía Política y Económica Internacional"] },
    ],
  },
  {
    semestre: 5,
    cursos: [
      { nombre: "Procesos de Integración Internacional", prereqs: ["Economía de El Salvador"] },
      { nombre: "Instituciones e Instrumentos de Derecho Internacional Privado", prereqs: ["Instituciones e Instrumentos de Derecho Internacional Público"] },
      { nombre: "Realidad Política de América Latina", prereqs: ["Realidad Política de El Salvador y Centroamérica"] },
      { nombre: "Historia de las Relaciones Internacionales II", prereqs: ["Historia de las Relaciones Internacionales I"] },
      { nombre: "Organización Internacional", prereqs: ["Globalización y Libre Comercio"] },
    ],
  },
  {
    semestre: 6,
    cursos: [
      { nombre: "Integración Centroamericana", prereqs: ["Procesos de Integración Internacional"] },
      { nombre: "Derecho Diplomático y Consular", prereqs: ["Instituciones e Instrumentos de Derecho Internacional Privado"] },
      { nombre: "Desarrollo Económico y Medioambiente", prereqs: ["Realidad Política de América Latina"] },
      { nombre: "Política Exterior en el Continente Americano", prereqs: ["Historia de las Relaciones Internacionales II"] },
      { nombre: "Manejo de Crisis, Solución y Transformación de Conflictos", prereqs: ["Organización Internacional"] },
    ],
  },
  {
    semestre: 7,
    cursos: [
      { nombre: "Fundamentos de Mercadotecnia Internacional", prereqs: ["Integración Centroamericana"] },
      { nombre: "Negociaciones Internacionales", prereqs: ["Derecho Diplomático y Consular", "Manejo de Crisis, Solución y Transformación de Conflictos"] },
      { nombre: "Cooperación Internacional", prereqs: ["Desarrollo Económico y Medioambiente"] },
      { nombre: "Identificación y Formulación de Proyectos", prereqs: ["Política Exterior en el Continente Americano", "Desarrollo Económico y Medioambiente"] },
      { nombre: "Inglés I", prereqs: ["Manejo de Crisis, Solución y Transformación de Conflictos"] },
    ],
  },
  {
    semestre: 8,
    cursos: [
      { nombre: "Mercadotecnia Internacional", prereqs: ["Fundamentos de Mercadotecnia Internacional"] },
      { nombre: "Derecho Económico Internacional", prereqs: ["Negociaciones Internacionales"] },
      { nombre: "Derechos Humanos y Derecho Internacional Humanitario", prereqs: ["Cooperación Internacional"] },
      { nombre: "Ejecución, Monitoreo y Evaluación de Proyectos", prereqs: ["Cooperación Internacional", "Identificación y Formulación de Proyectos"] },
      { nombre: "Inglés II", prereqs: ["Inglés I"] },
    ],
  },
  {
    semestre: 9,
    cursos: [
      { nombre: "Administración Pública", prereqs: ["Mercadotecnia Internacional"] },
      { nombre: "Derecho Territorial y Marítimo Internacional", prereqs: ["Derecho Económico Internacional"] },
      { nombre: "Política Mundial Contemporánea", prereqs: ["Derechos Humanos y Derecho Internacional Humanitario"] },
      { nombre: "Desarrollo y Agenda Social Internacional", prereqs: ["Ejecución, Monitoreo y Evaluación de Proyectos"] },
      { nombre: "Inglés III", prereqs: ["Inglés II"] },
    ],
  },
  {
    semestre: 10,
    cursos: [
      {
        nombre: "Seminario sobre Relaciones Internacionales",
        prereqs: [
          "Administración Pública",
          "Derecho Territorial y Marítimo Internacional",
          "Política Mundial Contemporánea",
          "Desarrollo y Agenda Social Internacional",
          "Inglés III",
        ],
      },
      {
        nombre: "Seminario sobre Problemas Jurídicos Internacionales",
        prereqs: [
          "Administración Pública",
          "Derecho Territorial y Marítimo Internacional",
          "Política Mundial Contemporánea",
          "Desarrollo y Agenda Social Internacional",
          "Inglés III",
        ],
      },
      {
        nombre: "Taller de Cooperación y Proyectos",
        prereqs: [
          "Administración Pública",
          "Derecho Territorial y Marítimo Internacional",
          "Política Mundial Contemporánea",
          "Desarrollo y Agenda Social Internacional",
          "Inglés III",
        ],
      },
      {
        nombre: "Inglés IV",
        prereqs: [
          "Administración Pública",
          "Derecho Territorial y Marítimo Internacional",
          "Política Mundial Contemporánea",
          "Desarrollo y Agenda Social Internacional",
          "Inglés III",
        ],
      },
    ],
  },
];

const estado = JSON.parse(localStorage.getItem("estadoMalla") || "{}");

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function estaCompleto(nombre) {
  return estado[nombre];
}

function cumpleRequisitos(prereqs) {
  return prereqs.every((nombre) => estaCompleto(nombre));
}

const contenedor = document.getElementById("malla");

malla.forEach(({ semestre, cursos }) => {
  const bloque = document.createElement("div");
  bloque.className = "semester";

  const titulo = document.createElement("h2");
  titulo.textContent = `Semestre ${semestre}`;
  bloque.appendChild(titulo);

  cursos.forEach((curso) => {
    const div = document.createElement("div");
    div.textContent = curso.nombre;
    div.className = "course";

    function actualizarEstado() {
      div.classList.remove("locked", "completed");
      if (curso.prereqs && !cumpleRequisitos(curso.prereqs)) {
        div.classList.add("locked");
      } else if (estaCompleto(curso.nombre)) {
        div.classList.add("completed");
      }
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("locked")) return;
      estado[curso.nombre] = !estado[curso.nombre];
      guardarEstado();
      location.reload();
    });

    actualizarEstado();
    bloque.appendChild(div);
  });

  contenedor.appendChild(bloque);
});
