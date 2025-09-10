import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>
        Bem-vinda(o) ao <span style={{ color: "teal" }}>Conhecimento Sara</span>
      </h1>

      <p>
        Olá! Sou a <strong>Dra. Sara Cavazotti</strong>, fisioterapeuta apaixonada
        por saúde e qualidade de vida. Depois de anos de experiência clínica e
        acadêmica, decidi trazer meu conhecimento também para o digital, unindo{" "}
        <strong>reabilitação, desenvolvimento humano e tecnologia</strong>.
      </p>

      <p>
        Aqui você vai encontrar conteúdos práticos e dinâmicos para acabar com as
        dores que atrapalham sua rotina. Porque ninguém merece viver com dor – e
        você não precisa se acostumar com ela!
      </p>

      <p>
        Meu objetivo é ajudar você a transformar sua vida com orientações
        simples, eficazes e que podem ser aplicadas no dia a dia, no conforto da
        sua casa.
      </p>

      <p>
        Seja muito bem-vinda(o)! 🌿 Aproveite os conteúdos e volte sempre, pois
        aqui tem espaço para aprendizado, evolução e bem-estar.
      </p>
            {/* Rodapé com links sociais */}
      <footer style={{ textAlign: "center", marginTop: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          
          <a
            href="https://www.instagram.com/fisiosaracavazotti"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#E1306C",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/sara-cavazotti"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#0077B5",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            LinkedIn
          </a>

          <a
            href="http://lattes.cnpq.br/9632431348591051"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#333",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Lattes
          </a>

        </div>
      </footer>
    </Layout>
  );
}
