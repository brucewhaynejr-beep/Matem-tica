import { createContext, useContext, useState } from "react";
                                                                                                                                                                                                       
  interface ExerciseContextData {                                                                                                                                                                      
    exercises: Array<{ id: number; title: string; description: string; type: string; solved: boolean }>;                                                                                               
    toggleExerciseStatus: (id: number, solved: boolean) => void;                                                                                                                                       
    addToProgress: (id: number) => void;                                                                                                                                                               
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  const ExerciseContext = createContext<ExerciseContextData | undefined>(undefined);                                                                                                                   
                                                                                                                                                                                                       
  export function ExerciseProvider({ children }: { children: React.ReactNode }) {                                                                                                                      
    const [exercises, setExercises] = useState<Array<{ id: number; title: string; description: string; type: string; solved: boolean }>>([]);                                                          
                                                                                                                                                                                                       
    const toggleExerciseStatus = (id: number, solved: boolean) => {                                                                                                                                    
      setExercises((prev) =>             
        prev.map((ex) =>                                                                                                                                                                               
          ex.id === id ? { ...ex, solved } : ex                                                                                                                                                        
        )                                                                                                                                                                                              
      );                                                                                                                                                                                               
    };                                                                                                                                                                                                 
                                                                                                                                                                                                       
    const addToProgress = (id: number) => {                                                                                                                                                            
      // Lógica para adicionar ao progresso (pode ser armazenado em localStorage ou estado)                                                                                                            
      console.log(`Adicionando exercício ${id} ao progresso`);                                                                                                                                         
    };                                                                                                                                                                                                 
                                                                                                                                                                                                       
    return (                                                                                                                                                                                           
      <ExerciseContext.Provider value={{ exercises, toggleExerciseStatus, addToProgress }}>                                                                                                            
        {children}                                                                                                                                                                                     
      </ExerciseContext.Provider>                                                                                                                                                                      
    );                                                                                                                                                                                                 
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  export function useExerciseContext() {                                                                                                                                                               
    const context = useContext(ExerciseContext);                                                                                                                                                       
    if (!context) {                                                                                                                                                                                    
      throw new Error("useExerciseContext deve ser usado dentro de ExerciseProvider");                                                                                                                 
    }                                                                                                                                                                                                  
    return context;                                                                                                                                                                                    
  }               
