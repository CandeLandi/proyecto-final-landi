import { User } from "../../../users/models";
import { Curso } from '../../../cursos/models/index';

export interface Inscription {
  id: string | number;
  userId: string | number;
  productId: string | number;
  user?: User;
  course?: Curso;
}

export interface CreateInscriptionData {
  userId: string | number | null;
  inscriptionId: string | number | null;
}
