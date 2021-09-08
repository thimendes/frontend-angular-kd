import { Data } from "@angular/router"
import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public descricao: string
    public publicacao: string
    public data: Date
    public tema: Tema
    public titulo: string
    public usuario: User
    public midia: string
}