 import React from "react"; 
                                                                                                                                                                                                       
  interface VideoPlayerProps {                                                                                                                                                                         
    title: string;                                                                                                                                                                                     
    src: string; // URL do vídeo (ex: YouTube embed ou arquivo local)
  }                                                                                                                                                                                                    
                                         
  export default function VideoPlayer({ title, src }: VideoPlayerProps) {
    return (                                                                                                                                                                                           
      <div className="bg-white rounded-lg shadow md:p-6 p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>                                                                                                                                        
                                         
        {/* Player de vídeo responsive */}                                                                                                                                                             
        <div className="aspect-w-16 aspect-h-9">                                                                                                                                                       
          {/* Usando iframe para vídeos do YouTube ou Vimeo, ou HTML5 <video> */}                                                                                                                      
          <iframe                                                                                                                                                                                      
            src={src}                                                                                                                                                                                  
            title={title}                                                                                                                                                                              
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"                                                                                           
            allowFullScreen                                                                                                                                                                            
            className="w-full h-full"                                                                                                                                                                  
          />                             
        </div>                                                                                                                                                                                         
                                         
        {/* Botão de solução rápida (opcional) */}                                                                                                                                                     
        <button className="mt-4 bg-gray-200 hover:bg-gray-300 rounded py-2 px-4 text-sm">
          Ver Solução     
        </button>                        
      </div>                             
    );                                                                                                                                                                                                 
  }                                                                                                                                                                                                    
                   
