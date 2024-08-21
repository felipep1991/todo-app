import styled from "@emotion/styled";
import { FormControl, FormLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { CSSProperties } from "react";

interface WeightSelectProps {
  selectedWeight: string;
  onWeightChange: (weight: string) => void;
  width?: CSSProperties["width"];
}

const weights = ["Easy", "Medium", "Hard"];

/**
 * Componente para selecionar o peso das tarefas.
 */
export const WeightSelect: React.FC<WeightSelectProps> = ({
  selectedWeight,
  onWeightChange,
  width,
}) => {
  const handleWeightChange = (event: SelectChangeEvent<unknown>): void => {
    onWeightChange(event.target.value as string);
  };

  return (
    <FormControl sx={{ width: width || "100%" }}>
      <FormLabel sx={{ marginLeft: "8px", fontWeight: 500 }}>Peso da Tarefa</FormLabel>
      <StyledSelect value={selectedWeight} onChange={handleWeightChange}>
        {weights.map((weight) => (
          <MenuItem key={weight} value={weight}>
            {weight}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

const StyledSelect = styled(Select)<{ width?: CSSProperties["width"] }>`
  margin: 12px 0;
  border-radius: 16px !important;
  transition: 0.3s all;
  width: ${({ width }) => width || "100%"};
  background: #ffffff18;
  border: 1px solid #0000003a;
`;
