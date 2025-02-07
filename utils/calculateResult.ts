type Question = {
  id: string,
  Dimension: string,
  Direction: string,
}

let questions: Question[]

try {
  const response = await fetch("http://localhost:8055/items/MBTI_Questions");
  const data = await response.json()
  console.log(data.data)
  questions = data.data
} catch (error) {
  console.error("Erro ao buscar perguntas:", error);
}


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
    const resposta = respostas[string(q.id)];
    if (resposta !== undefined) {
      const valorCentralizado = resposta - 4;
      const fator = q.Direction === q.Dimension[0] ? 1 : -1;
      dimensaoSoma[q.Dimension as keyof typeof dimensaoSoma] += fator * valorCentralizado;
    }
  })

  const tipo =
    (dimensaoSoma.EI >= 0 ? "E" : "I") +
    (dimensaoSoma.SN >= 0 ? "S" : "N") +
    (dimensaoSoma.TF >= 0 ? "T" : "F") +
    (dimensaoSoma.JP >= 0 ? "J" : "P")

  return { tipo, dimensaoSoma }
}
