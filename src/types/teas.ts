export type Tea = {
  id: number;
  name: string;
  price: number;
  count: number;
  description?: string;
  isMain: boolean;
  isByPiece?: boolean;
  isBlocked?: boolean; // block price and count
};

export type Teas = Tea[];
