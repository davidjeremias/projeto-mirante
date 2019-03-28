import { Email } from './email';
import { Telefone } from './telefone';
import { Endereco } from './endereco';

export class Cliente{
    id: number;
    cpf: string;
    nome: string;
    endereco: Endereco;
    telefones: Telefone[];
    emails: Email[];
    
}