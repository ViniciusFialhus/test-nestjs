import "./page.css";

export default function Home() {
  return (
    <main className="formTest">
      <section className="sectionForm">
        <input className="inputs" placeholder="Inicio de Vigência " />
        <span className="material-symbols-outlined" style={{ color: 'gray' }}>event</span>

        <input
          className="inputs"
          placeholder="Dia(s)"
          style={{ width: "10%" }}
        />
        <input
          className="inputs"
          placeholder="Final Vigência"
          style={{ width: "15%" }}
        />
        <span className="material-symbols-outlined" style={{ color: 'gray' }}>event</span>
        <input
          className="inputs"
          placeholder="Valor Garantia"
          style={{ width: "17%" }}
        />
      </section>
    </main>
  );
}
