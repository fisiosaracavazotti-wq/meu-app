import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      {/* Barra de navegação */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "15px 0",
          backgroundColor: "#f0f0f0",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "#333" }}>
          <span
            style={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Início
          </span>
        </Link>

        <Link href="/comeca-aqui" style={{ textDecoration: "none", color: "#333" }}>
          <span
            style={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Comece Aqui
          </span>
        </Link>

        <Link href="/consultoria-online" style={{ textDecoration: "none", color: "#333" }}>
          <span
            style={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Consultoria Online
          </span>
        </Link>
      </nav>

      {/* Conteúdo da página */}
      <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
}

