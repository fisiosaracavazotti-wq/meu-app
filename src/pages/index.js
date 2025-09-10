import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Bem-vinda(o) ao <span style={{ color: "teal" }}>Conhecimento Sara</span></h1>
      <p>
         Olá! Sou a <strong> Dra Sara Cavazotti</strong>, fisioterapeuta apaixonada por saúde e 
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
      {/* resto do conteúdo da home */}
    </Layout>
  );
}
