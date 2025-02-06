import { questions } from "@/constants/questions"

export interface Resultado {
  tipo: string
  dimensaoSoma: { EI: number; SN: number; TF: number; JP: number }
}

export const calcularResultado = (respostas: { [key: number]: number }): Resultado => {
  const dimensaoSoma = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  }

  questions.forEach((q) => {
    const resposta = respostas[q.id];
    if (resposta !== undefined) {
      const valorCentralizado = resposta - 4;
      const fator = q.direction === q.dimension[0] ? 1 : -1;
      dimensaoSoma[q.dimension as keyof typeof dimensaoSoma] += fator * valorCentralizado;
    }
  })

  const tipo =
    (dimensaoSoma.EI >= 0 ? "E" : "I") +
    (dimensaoSoma.SN >= 0 ? "S" : "N") +
    (dimensaoSoma.TF >= 0 ? "T" : "F") +
    (dimensaoSoma.JP >= 0 ? "J" : "P")

  return { tipo, dimensaoSoma }
}
