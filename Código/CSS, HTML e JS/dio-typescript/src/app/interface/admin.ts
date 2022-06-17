import { Usuario } from './usuario';
export interface Admin extends Usuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}
