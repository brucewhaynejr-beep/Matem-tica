import type { Metadata } from "next";
  import ExerciseCard from "@/components/ExerciseCard.tsx";                                                                                                                                            
  import VideoPlayer from "@/components/VideoPlayer.tsx";                                                                                                                                              
  import { ExerciseContext } from "@/context/ExerciseContext.tsx";                                                                                                                                     
  import { ProgressContext } from "@/context/ProgressContext.tsx";                                                                                                                                     
  import { useEffect, useState } from "react";                                                                                                                                                         
                                                                                                                                                                                                       
  export const metadata: Metadata = {                                                                                                                                                                  
    title: "Mat7ano - Matemática para o 7º Ano",                                                                                                                                                       
    description: "Exercícios interativos para alunos do 7º ano",                                                                                                                                       
  };                                                                                                                                                                                                   
                                                                                                                                                                                                       
  export default function Home() {                                                                                                                                                                     
    const [exercises, setExercises] = useState([]);                                                                                                                                                    
    const [progress, setProgress] = useState({});                                                                                                                                                      
                                                                                                                                                                                                       
    // Carrega os exercícios quando o componente monta
    useEffect(() => {                                                                                                                                                                                  
      // Simulação de carregamento inicial                                                                                                                                                             
      const initialExercises = [                                                                                                                                                                       
        {                                                                                                                                                                                              
          id: 1,                                                                                                                                                                                       
          title: "Frações Equivalentes",                                                                                                                                                               
          description: "Complete as frações para torná‑las equivalentes.",                                                                                                                             
          type: "fre",                                                                                                                                                                                 
          solved: false,                                                                                                                                                                               
        },                                                                                                                                                                                             
        {                                                                                                                                                                                              
          id: 2,                                                                                                                                                                                       
          title: "Multiplicação de Números de 2 Dígitos",                                                                                                                                              
          description: "Resolva os problemas e confira seus resultados.",                                                                                                                              
          type: "mul",                                                                                                                                                                                 
          solved: false,  
        },                                                                                                                                                                                             
        {                                
          id: 3,                                                                                                                                                                                       
          title: "Divisão por 10, 100 e 1000",
          description: "Divida os números pelos poderes de 10.",                                                                                                                                       
          type: "div",                   
          solved: false,                                                                                                                                                                               
        },                                                                                                                                                                                             
      ];                                                                                                                                                                                               
                                                                                                                                                                                                       
      setExercises(initialExercises);                                                                                                                                                                  
    }, []);                                                                                                                                                                                            
                                         
    return (                                                                                                                                                                                           
      <div className="p-4">              
        {/* Lista de Exercícios */}                                                                                                                                                                    
        <div className="space-y-6">      
          {exercises.map((ex) => (       
            <ExerciseCard                                                                                                                                                                              
              key={ex.id}                                                                                                                                                                              
              exercise={ex}                                                                                                                                                                            
              onSolving={() => setProgress((p) => ({ ...p, [ex.id]: "in-progress" }))}                                                                                                                 
              onComplete={() => setProgress((p) => ({ ...p, [ex.id]: "completed" }))}                                                                                                                  
            />                                                                                                                                                                                         
          ))}                                                                                                                                                                                          
        </div>                                                                                                                                                                                         
                                                                                                                                                                                                       
        {/* Área de Progresso */}                                                                                                                                                                      
        <section className="mt-8 bg-blue-50 p-4 rounded-lg">                                                                                                                                           
          <h2 className="text-lg font-semibold mb-2">Seu Progresso</h2>                                                                                                                                
          {progress ? (                                                                                                                                                                                
            <ul className="space-y-2">                                                                                                                                                                 
              {Object.entries(progress).map(([id, status]) => {                                                                                                                                        
                const ex = exercises.find((e) => e.id == id);                                                                                                                                          
                return (                                                                                                                                                                               
                  <li key={id} className="flex items-center">                                                                                                                                          
                    <span className="text-sm mr-2">{ex?.title}</span>                                                                                                                                  
                    <span                                                                                                                                                                              
                      className={`px-2 py-1 rounded text-xs font-medium ${                                                                                                                             
                        status === "completed"                                                                                                                                                         
                          ? "bg-green-100 text-green-800"                                                                                                                                              
                          : status === "in-progress"                                                                                                                                                   
                          ? "bg-yellow-100 text-yellow-800"                                                                                                                                            
                          : "bg-gray-200 text-gray-600"                                                                                                                                                
                      `}>                                                                                                                                                                              
                        {status}                                                                                                                                                                       
                      </span>                                                                                                                                                                          
                  </li>                                                                                                                                                                                
                );                                                                                                                                                                                     
              })}                                                                                                                                                                                      
            </ul>                                                                                                                                                                                      
          ) : (                          
            <p className="text-sm text-gray-500">Ainda não há progresso registrado.</p>                                                                                                                
          )}                             
        </section>                                                                                                                                                                                     
      </div>
    );                                                                                                                                                                                                 
  }                                      
                      
