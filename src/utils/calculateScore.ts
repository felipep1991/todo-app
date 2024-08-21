export type Weight = "Easy" | "Medium" | "Hard";

const scoreMapping: Record<Weight, number> = {
  "Easy": 25,
  "Medium": 50,
  "Hard": 100,
};

// Função para calcular pontos
export const calculateScore = (weight: Weight | undefined): number => {
  return weight ? scoreMapping[weight] : 0; // Retorna 0 se o peso não for encontrado
};