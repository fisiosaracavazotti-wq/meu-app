export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Bem-vinda(o) ao <span style={{ color: "#008080" }}>Conhecimento Sara</span>
      </h1>

      <p style={{ marginBottom: "1rem" }}>
        Sou a <strong>Dra. Sara Cavazotti</strong>, fisioterapeuta apaixonada por saúde e 
        qualidade de vida. Depois de anos de experiência clínica e acadêmica,
        decidi trazer meu conhecimento também para o digital, unindo 
        <strong> reabilitação, desenvolvimento humano e tecnologia</strong>.
      </p>

      <p style={{ marginBottom: "1rem" }}>
        Aqui você vai encontrar conteúdos práticos e dinâmicos para acabar com as dores
        que atrapalham sua rotina. Porque ninguém merece viver com dor – e você
        não precisa se acostumar com ela!
      </p>

      <p style={{ marginBottom: "1rem" }}>
        Meu objetivo é ajudar você a transformar sua vida com orientações simples,
        eficazes e que podem ser aplicadas no dia a dia, no conforto da sua casa.
      </p>

      <p style={{ marginBottom: "2rem" }}>
        Seja muito bem-vinda(o)! 🌿  
        Aproveite os conteúdos e volte sempre, pois aqui tem espaço para aprendizado,
        evolução e bem-estar.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="https://instagram.com/saracavazotti_fisioterapeuta"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#E1306C",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/sara-cavazotti-64023250"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#0077B5",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          LinkedIn
        </a>

        <a
          href="http://lattes.cnpq.br/8548083445583490"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "#444",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Lattes
        </a>
      </div>
    </main>
  );
}