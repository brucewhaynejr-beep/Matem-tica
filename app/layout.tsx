import type { Metadata } from "next";
  import ExerciseProvider from "@/context/ExerciseContext.tsx";
  import ProgressProvider from "@/context/ProgressContext.tsx";
  import "../styles/globals.css";

  export const metadata: Metadata = {
    title: "Mat7ano - Matemática para o 7º Ano",
    description: "Plataforma de exercícios interativos para alunos do 7º ano",
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="pt-BR">
        <body className="bg-gray-100 min-h-screen">
         header className="bg-blue-600 text-white shadow-md">
           div className="container mx-auto px-4 py-4 flex justify-betweenh1 className="text-2xl font-bold">📐 Mat7ano</h1>
             ul className="flex space-x-6">
                  <li>
                    <a
                      href="/"
                      className="hover:underline"
                      aria-label="Início"
                    >
                      Início
                    </ali>
                    <a
                      href="/exercicios"
                      className="hover:underline"
                      aria-label="Exercícios"
                    >
                      Exercícios
                    </a>
                 li>
                    <a
                      href="/progresso"
                      className="hover:underline"
                      aria-label="Progresso"
                    >
                      Progresso
                    </a>
                 ul>
              </nav>
            </div>
          </header>
          <main className="container mx-auto px-4 py-6">
            {/* Envolver as páginas com os provedores de contexto */}
            <ExerciseProgressProvider>
            </ExerciseProvider>
          </main>
          <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-8">
            <p>© {new Date().getFullYear()} Mat7ano – Matemática para o 7º Ano</p>
          </footer>
        </body>
      </html>
    );
  }
