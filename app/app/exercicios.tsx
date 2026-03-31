 import { useExerciseContext } from "@/context/ExerciseContext";
  import { useProgressContext } from "@/context/ProgressContext";
  import ExerciseCard from "@/components/ExerciseCard";
  import VideoPlayer from "@/components/VideoPlayer";
  import Link from "next/link";

  export default function ExerciciosPage() {
    const { exercises } = useExerciseContext();
    const { progress, setProgress } = useProgressContext();

    return (
  section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Exercícios Interativos
        </h1>

        {/* Lista de exercícios em grid responsivo */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {exercises.map((ex) => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              onSolving={() => setProgress(ex.id, "in-progress")}
              onComplete={() => setProgress(ex.id, "completed")}
            />
          ))}
  div>

        {/* Vídeo explicativo da semana (opcional) */}
       div className="bg-white rounded-lg shadow-md p-6 mb-8h2 className="text-2xl font-semibold mb-4">Vídeo Explicativo da Semana</h2>
          <VideoPlayer
            title="Frações Equivalentes - 7º Ano"
            src="https://www.youtube.com/embed/VtUoT9N6Y7A"
          />
        </div>

        {/* Botão para voltar à home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            ← Voltar ao Início
          </Linkdiv>
      </section>                                   
    );
  }        
