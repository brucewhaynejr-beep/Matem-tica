import { createContext, useContext, useState, useEffect } from "react";
                                                                                                                                                                                                       
  interface ProgressContextData {                                                                                                                                                                      
    progress: Record<number, "not-started" | "in-progress" | "completed">;                                                                                                                             
    setProgress: (id: number, status: "not-started" | "in-progress" | "completed") => void;                                                                                                            
    resetProgress: () => void;                                                                                                                                                                         
    getProgressStats: () => { total: number; completed: number; inProgress: number };                                                                                                                  
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  const ProgressContext = createContext<ProgressContextData | undefined>(undefined);                                                                                                                   
                                                                                                                                                                                                       
  export function ProgressProvider({ children }: { children: React.ReactNode }) {                                                                                                                      
    const [progress, setProgressState] = useState<Record<number, "not-started" | "in-progress" | "completed">>({});                                                                                    
                                         
    // Recuperar progresso salvo do localStorage na inicialização                                                                                                                                      
    useEffect(() => {                    
      const saved = localStorage.getItem("mat7ano-progress");                                                                                                                                          
      if (saved) {                                                                                                                                                                                     
        try {                                                                                                                                                                                          
          setProgressState(JSON.parse(saved));                                                                                                                                                         
        } catch (e) {                                                                                                                                                                                  
          console.error("Erro ao carregar progresso:", e);                                                                                                                                             
        }                                                                                                                                                                                              
      }                                                                                                                                                                                                
    }, []);                                                                                                                                                                                            
                                                                                                                                                                                                       
    const setProgress = (id: number, status: "not-started" | "in-progress" | "completed") => {                                                                                                         
      setProgressState((prev) => {                                                                                                                                                                     
        const updated = { ...prev, [id]: status };
        localStorage.setItem("mat7ano-progress", JSON.stringify(updated));                                                                                                                             
        return updated;                  
      });                                                                                                                                                                                              
    };                                                                                                                                                                                                 
                                                                                                                                                                                                       
    const resetProgress = () => {                                                                                                                                                                      
      setProgressState({});                                                                                                                                                                            
      localStorage.removeItem("mat7ano-progress");                                                                                                                                                     
    };                                                                                                                                                                                                 
                                         
    const getProgressStats = () => {                                                                                                                                                                   
      const total = Object.keys(progress).length;                                                                                                                                                      
      const completed = Object.values(progress).filter((p) => p === "completed").length;                                                                                                               
      const inProgress = Object.values(progress).filter((p) => p === "in-progress").length;                                                                                                            
      return { total, completed, inProgress };
    };                                                                                                                                                                                                 
                                                                                                                                                                                                       
    return (                                                                                                                                                                                           
      <ProgressContext.Provider value={{ progress, setProgress, resetProgress, getProgressStats }}>                                                                                                    
        {children}                                                                                                                                                                                     
      </ProgressContext.Provider>                                                                                                                                                                      
    );                                   
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  export function useProgressContext() {                                                                                                                                                               
    const context = useContext(ProgressContext);                                                                                                                                                       
    if (!context) {                                                                                                                                                                                    
      throw new Error("useProgressContext deve ser usado dentro de ProgressProvider");                                                                                                                 
    }                     
    return context;                                                                                                                                                                                    
  }          
