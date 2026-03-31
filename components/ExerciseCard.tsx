import { useState } from "react";                                                                                                                                                                    
  import { useExerciseContext } from "@/context/ExerciseContext";                                                                                                                                      
  import { useProgressContext } from "@/context/ProgressContext";                                                                                                                                      
                                                                                                                                                                                                       
  interface ExerciseCardProps {                                                                                                                                                                        
    exercise: {                                                                                                                                                                                        
      id: number;                                                                                                                                                                                      
      title: string;                                                                                                                                                                                   
      description: string;                                                                                                                                                                             
      type: string;                                                                                                                                                                                    
      solved: boolean;                                                                                                                                                                                 
    };                                                                                                                                                                                                 
    onSolving: (id: number) => void;                                                                                                                                                                   
    onComplete: (id: number) => void;                                                                                                                                                                  
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  export default function ExerciseCard({ exercise, onSolving, onComplete }: ExerciseCardProps) {                                                                                                       
    const { toggleExerciseStatus, addToProgress } = useExerciseContext();                                                                                                                              
    const { setProgress } = useProgressContext();                                                                                                                                                      
                                                                                                                                                                                                       
    const [answer, setAnswer] = useState<string>("");                                                                                                                                                  
    const [showSolution, setShowSolution] = useState(false);                                                                                                                                           
                                                                                                                                                                                                       
    const handleSubmit = (e: React.FormEvent) => {                                                                                                                                                     
      e.preventDefault();                                                                                                                                                                              
      // Simulação de verificação da resposta                                                                                                                                                          
      const isCorrect = exercise.type === "fre" && answer.includes("1/2");                                                                                                                             
      if (isCorrect) {                                                                                                                                                                                 
        onComplete(exercise.id);                                                                                                                                                                       
        setShowSolution(true);                                                                                                                                                                         
      } else {                                                                                                                                                                                         
        alert("Resposta incorreta! Tente novamente.");                                                                                                                                                 
      }                                                                                                                                                                                                
    };                                                                                                                                                                                                 
                                                                                                                                                                                                       
    return (                                                                                                                                                                                           
      <div                                                                                                                                                                                             
        className={`exercise-card border-${exercise.solved ? "green-300" : "gray-300"} shadow-md p-4 transition-all duration-200 hover:shadow-lg`}                                                     
        style={{ animation: "fadeIn 0.5s ease-in" }}                                                                                                                                                   
      >                                  
       h3 className="text-lg font-medium mb-2">{exercise.title}</h3>                                                                                                                                   
        <p className="mb-2">{exercise.descriptionform onSubmit={handleSubmit}>                                                                                                                         
          <textarea                                                                                                                                                                                    
            className="border rounded p-2 w-full"                                                                                                                                                      
            rows={2}                                                                                                                                                                                   
            value={answer}                                                                                                                                                                             
            onChange={(e) => setAnswer(e.target.value)}                                                                                                                                                
            placeholder="Resposta"                                                                                                                                                                     
          />                                                                                                                                                                                           
         button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">                                                                                                               
            Souber                                                                                                                                                                                     
          </button>                                                                                                                                                                                    
        </form>                                                                                                                                                                                        
                                                                                                                                                                                                       
        {p className="mt-4 text-gray-500">Resposta correta: {exercise.description}.</p>                                                                                                                
        )}                                                                                                                                                                                             
                                                                                                                                                                                                       
        <button                                                                                                                                                                                        
          onClick={() => addToProgress(exercise.id)}                                                                                                                                                   
          disabled={exercise.solved}                                                                                                                                                                   
          className="mt-4 bg-blue-300 text-white px-4 py-2 rounded"
        >                                                                                                                                                                                              
          Solicitarbutton>                                                                                                                                                                             
      </div>                                                                                                                                                                                           
    );                                                                                                                                                                                                 
  }                            
