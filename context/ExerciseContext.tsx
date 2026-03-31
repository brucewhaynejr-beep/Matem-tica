import { createContext, useContext, useState } from "react";
  import { Exercise, exercisesData } from "@/data/exercises";                                                                                                                                          
                                                                                                                                                                                                       
  interface ExerciseContextData {                                                                                                                                                                      
    exercises: Exercise[];                                                                                                                                                                             
    getExerciseById: (id: number) => Exercise | undefined;                                                                                                                                             
    markAsSolved: (id: number) => void;                                                                                                                                                                
    resetExercises: () => void;                                                                                                                                                                        
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  const ExerciseContext = createContext<ExerciseContextData | undefined>(undefined);                                                                                                                   
                                                                                                                                                                                                       
  export function ExerciseProvider({ children }: { children: React.ReactNode }) {                                                                                                                      
    const [exercises, setExercises] = useState<Exercise[]>(exercisesData);                                                                                                                             
                                         
    const getExerciseById = (id: number) => {                                                                                                                                                          
      return exercises.find((ex) => ex.id === id);
    };                                                                                                                                                                                                 
                                                                                                                                                                                                       
    const markAsSolved = (id: number) => {                                                                                                                                                             
      setExercises((prev) =>                                                                                                                                                                           
        prev.map((ex) => (ex.id === id ? { ...ex, solved: true } : ex))
      );                                                                                                                                                                                               
    };                                   
                                                                                                                                                                                                       
    const resetExercises = () => {                                                                                                                                                                     
      setExercises(exercisesData);                                                                                                                                                                     
    };                                                                                                                                                                                                 
                                                                                                                                                                                                       
    return (              
      <ExerciseContext.Provider                                                                                                                                                                        
        value={{                         
          exercises,                                                                                                                                                                                   
          getExerciseById,               
          markAsSolved,                                                                                                                                                                                
          resetExercises,                
        }}
      >
        {children}
      </ExerciseContext.Provider>
    );                                   
  }                                      
                                                                                                                                                                                                       
  export function useExerciseContext() {                                                                                                                                                               
    const context = useContext(ExerciseContext);                                                                                                                                                       
    if (!context) {                                                                                                                                                                                    
      throw new Error(                                                                                                                                                                                 
        "useExerciseContext deve ser usado dentro de ExerciseProvider"
      );                                                                                                                                                                                               
    }                                                                                                                                                                                                  
    return context;                                                                                                                                                                                    
  }                                                                                                                                                                                                    
    
