export interface Produto{
  id:string
  nome:string;
  descricao:string;
  preco:string;
  estado:string; //VENDIDO,DISPONIVEL,RESERVADO
  categoria:string //Cozinha,Sala,Quarto,Banheiro,Outros;
  foto:string
  fotos:string[]
}
