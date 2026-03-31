export interface Exercise {            
    id: number;                                                                                                                                                                                        
    title: string;                                                                                                                                                                                     
    description: string;                                                                                                                                                                               
    instructions: string;                                                                                                                                                                              
    type: "fraction" | "multiplication" | "division" | "geometry" | "algebra" | "statistics";
    difficulty: "easy" | "medium" | "hard";                                                                                                                                                            
    questions: Array<{                                                                                                                                                                                 
      id: number;                                                                                                                                                                                      
      question: string;                                                                                                                                                                                
      options?: string[];                                                                                                                                                                              
      correctAnswer: string | number;                                                                                                                                                                  
      explanation: string;                                                                                                                                                                             
    }>;                                                                                                                                                                                                
    videoUrl?: string;                                                                                                                                                                                 
    estimatedTime: string; // ex: "15 min"                                                                                                                                                             
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  export const exercisesData: Exercise[] = [                                                                                                                                                           
    {                                                                                                                                                                                                  
      id: 1,                                                                                                                                                                                           
      title: "Frações Equivalentes",                                                                                                                                                                   
      description: "Aprenda a encontrar frações equivalentes e simplificar frações.",
      instructions: "Complete as frações para torná‑las equivalentes.",                                                                                                                                
      type: "fraction",                  
      difficulty: "easy",                
      estimatedTime: "15 min",                                                                                                                                                                         
      videoUrl: "https://www.youtube.com/embed/VtUoT9N6Y7A",                                                                                                                                           
      questions: [                                                                                                                                                                                     
        {                                                                                                                                                                                              
          id: 1,                                                                                                                                                                                       
          question: "Qual fração é equivalente a 1/2?",                                                                                                                                                
          options: ["2/3", "2/4", "3/4", "1/3"],                                                                                                                                                       
          correctAnswer: "2/4",                                                                                                                                                                        
          explanation: "Multiplicando numerador e denominador de 1/2 por 2, obtemos 2/4.",                                                                                                             
        },                                                                                                                                                                                             
        {                                                                                                                                                                                              
          id: 2,                                                                                                                                                                                       
          question: "Simplifique a fração 6/8.",                                                                                                                                                       
          correctAnswer: "3/4",                                                                                                                                                                        
          explanation: "Dividindo numerador e denominador por 2, temos 3/4.",                                                                                                                          
        },                                                                                                                                                                                             
      ],                                                                                                                                                                                               
    },                                                                                                                                                                                                 
    {                                                                                                                                                                                                  
      id: 2,                                                                                                                                                                                           
      title: "Multiplicação de Números de 2 Dígitos",                                                                                                                                                  
      description: "Pratique a multiplicação de números com dois dígitos usando o algoritmo padrão.",                                                                                                  
      instructions: "Resolva os problemas e confira seus resultados.",
      type: "multiplication",                                                                                                                                                                          
      difficulty: "medium",                                                                                                                                                                            
      estimatedTime: "20 min",                                                                                                                                                                         
      videoUrl: "https://www.youtube.com/embed/2a10VTv47UY",                                                                                                                                           
      questions: [                                                                                                                                                                                     
        {                                                                                                                                                                                              
          id: 1,                                                                                                                                                                                       
          question: "Qual é o resultado de 23 × 45?",                                                                                                                                                  
          correctAnswer: 1035,                                                                                                                                                                         
          explanation: "23 × 45 = 1035 (use o algoritmo da multiplicação).",                                                                                                                           
        },                               
        {                                
          id: 2,
          question: "Calcule 34 × 12.",                                                                                                                                                                
          correctAnswer: 408,
          explanation: "34 × 12 = 408.",                                                                                                                                                               
        },                               
      ],
    },
    {
      id: 3,
      title: "Divisão por 10, 100 e 1000",
      description: "Divida números poderes de 10 e entenda a mudança de posição decimal.",
      instructions: "Divida os números conforme indicado.",
      type: "division",                  
      difficulty: "easy",                                                                                                                                                                              
      estimatedTime: "10 min",                                                                                                                                                                         
      videoUrl: "https://www.youtube.com/embed/3dZ0b4_6L1M",                                                                                                                                           
      questions: [                                                                                                                                                                                     
        {                                                                                                                                                                                              
          id: 1,                                                                                                                                                                                       
          question: "450 ÷ 10 = ?",                                                                                                                                                                    
          correctAnswer: 45,                                                                                                                                                                           
          explanation: "Dividir por 10 desloca o decimal uma casa para a esquerda: 450 → 45.",                                                                                                         
        },                               
        {                                                                                                                                                                                              
          id: 2,                                                                                                                                                                                       
          question: "7200 ÷ 100 = ?",                                                                                                                                                                  
          correctAnswer: 72,                                                                                                                                                                           
          explanation: "Dividir por 100 desloca o decimal duas casas: 7200 → 72.",                                                                                                                     
        },                                                                                                                                                                                             
      ],                                                                                                                                                                                               
    },                                                                                                                                                                                                 
    // Adicione mais exercícios aqui posteriormente                                                                                                                                                    
  ];                                                                                                                                                                                                   
     
