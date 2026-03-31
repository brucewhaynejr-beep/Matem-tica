import type { Metadata } from "next";  
  import ExerciseProvider from "@/context/ExerciseContext";                                                                                                                                            
  import ProgressProvider from "@/context/ProgressContext";                                                                                                                                            
  import "../styles/globals.css";                                                                                                                                                                      
                                                                                                                                                                                                       
  export const metadata: Metadata = {                                                                                                                                                                  
    title: "Mat7ano - Matemática para o 7º Ano",                                                                                                                                                       
    description: "Plataforma de exercícios interativos para alunos do 7º Ano",                                                                                                                         
  };                                                                                                                                                                                                   
                                                                                                                                                                                                       
  export default function RootLayout({                                                                                                                                                                 
    children,                                                                                                                                                                                          
  }: {                                                                                                                                                                                                 
    children: React.ReactNode;                                                                                                                                                                         
  }) {                                   
    return (                                                                                                                                                                                           
      <html lang="pt-BR">
        <body className="bg-gray-100 min-h-screen">                                                                                                                                                    
          <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">                                                                                                            
              <h1 className="text-2xl font-bold">📐 Mat7ano</h1>                                                                                                                                       
              <nav>                                                                                                                                                                                    
                <ul className="flex space-x-6">                                                                                                                                                        
                  <li>                                                                                                                                                                                 
                    <a href="/" className="hover:underline">                                                                                                                                           
                      Início                                                                                                                                                                           
                    </a>                                                                                                                                                                               
                  </li>                                                                                                                                                                                
                  <li>                                                                                                                                                                                 
                    <a href="/exercicios" className="hover:underline">                                                                                                                                 
                      Exercícios                                                                                                                                                                       
                    </a>                 
                  </li>                                                                                                                                                                                
                  <li>                                                                                                                                                                                 
                    <a href="/progresso" className="hover:underline">                                                                                                                                  
                      Progresso                                                                                                                                                                        
                    </a>                                                                                                                                                                               
                  </li>                  
                </ul>                                                                                                                                                                                  
              </nav>                                                                                                                                                                                   
            </div>                                                                                                                                                                                     
          </header>                                                                                                                                                                                    
          <main className="container mx-auto px-4 py-6">
            <ExerciseProvider>                                                                                                                                                                         
              <ProgressProvider>{children}</ProgressProvider>                                                                                                                                          
            </ExerciseProvider>
          </main>                                                                                                                                                                                      
          <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-8">
            <p>© {new Date().getFullYear()} Mat7ano – Matemática para o 7º Ano</p>                                                                                                                     
          </footer>                                                                                                                                                                                    
        </body>                                                                                                                                                                                        
      </html>                                                                                                                                                                                          
    );                                                                                                                                                                                                 
  }    
