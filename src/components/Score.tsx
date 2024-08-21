// Score.tsx
import React from 'react';
import styled from '@emotion/styled';

interface ScoreProps {
  score: number;
}

/**
 * Componente para exibir a pontuação dentro de um retângulo estilizado.
 */
const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <StyledRectangulo>
      <TextoScore>{score} score</TextoScore>
    </StyledRectangulo>
  );
};

const StyledRectangulo = styled.div`
  width: 200px; /* Largura do retângulo */
  height: 100px; /* Altura do retângulo */
  background-color: #f0f0f0; /* Cor de fundo */
  border: 2px solid #007bff; /* Borda do retângulo */
  border-radius: 10px; /* Bordas arredondadas */
  display: flex; /* Usar Flexbox para centralizar o texto */
  justify-content: center; /* Centralizar horizontalmente */
  align-items: center; /* Centralizar verticalmente */
  margin: 20px auto; /* Margem automática para centralização */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
`;

const TextoScore = styled.h2`
  font-size: 24px; /* Tamanho da fonte */
  color: #333; /* Cor do texto */
  margin: 0; /* Remover margens padrão */
`;

export default Score;