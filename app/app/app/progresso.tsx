import { useProgressContext } from "@/context/ProgressContext";
  import { useExerciseContext } from "@/context/ExerciseContext";
  import Link from "next/link";

  export default function ProgressoPage() {
    const { progress, resetProgress } = useProgressContext();
    const { exercises } = useExerciseContext();

    const stats = {
      total: exercises.length,
      completed: Object.entries(progress).filter(
        ([_, status]) => status === "completed"
      ).length,
      inProgress: Object.entries(progress).filter(
        ([_, status]) => status === "in-progress"
      ).length,
    };

    const percentComplete = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Meu Progresso
        </h1>

        {/* Resumo do progresso */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Visão Geral</h2>
            <span className="text-sm font-medium text-gray-600">
              {percentComplete}% concluído
            </span>
          </div>

          {/* Barra de progresso */}
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700">
                {stats.completed}
              </h3>
              <p className="text-sm text-green-600">Concluídos</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-700">
                {stats.inProgress}
              </h3>
              <p className="text-sm text-yellow-600">Em Progresso</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-700">
                {stats.total - stats.completed - stats.inProgress}
              </h3>
              <p className="text-sm text-gray-600">Não Iniciados</p>
            </div>
          </div>
        </div>

        {/* Lista detalhada de exercícios */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Exercícios</h2>
          {exercises.length > 0 ? (
            exercises.map((ex) => {
              const status = progress[ex.id] || "not-started";
              let badgeColor = "bg-gray-200 text-gray-700";
              if (status === "completed") badgeColor = "bg-green-100 text-green-700";
              if (status === "in-progress") badgeColor = "bg-yellow-100 text-yellow-700";

              return (
                <div
                  key={ex.id}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-800 font-medium">{ex.title}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}>
                    {status === "not-started"
                      ? "Não Iniciado"
                      : status === "in-progress"
                      ? "Em Progresso"
                      : "Concluído"}
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-center py-4">
              Nenhum exercício encontrado.
            </p>
          )}
        </div>

        {/* Botões de ação */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              if (confirm("Tem certeza que deseja resetar seu progresso?")) {
                resetProgress();
              }
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Resetar Progresso
          </button>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            ← Voltar ao Início
          </Link>
        </div>
      </section>
    );                    
  }        
