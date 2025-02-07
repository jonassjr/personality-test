"use client"

import { likertOptions, personalityDescriptions } from "@/constants/questions"
import { Progress } from "./ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { calcularResultado, Resultado } from "@/utils/calculateResult"

const getRadioItemClasses = (value: number): string => {
  if (value === 1 || value === 7) {
    return "h-12 w-12"
  } else if (value === 2 || value === 6) {
    return "h-10 w-10"
  } else if (value === 3 || value === 5) {
    return "h-8 w-8"
  } else if (value === 4) {
    return "h-6 w-6"
  }
  // Valor padrão, caso necessário
  return "h-12 w-12"
}

const getRadioColorClass = (value: number): string => {
  if (value >= 1 && value <= 3) {
    return "fill-green-400 stroke-green-400"
  } else if (value === 4) {
    return "fill-gray-400 stroke-gray-400"
  } else if (value >= 5 && value <= 7) {
    return "fill-purple-400 stroke-purple-400"
  }
  // Valor padrão
  return "";
}

type Questions = {
  id: string
  Text: string
  Dimension: string
  Direction: "first" | "second"
}

export const QuestionsDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [respostas, setRespostas] = useState< {[key: number]: number }>({})
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [questions, setQuestions] = useState<Questions[]>([])

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://localhost:8055/items/MBTI_Questions");
        const data = await response.json()
        console.log(data.data)
        setQuestions(data.data)
      } catch (error) {
        console.error("Erro ao buscar perguntas:", error);
      }
    }
    fetchQuestions()
  }, [])

  // Função para atualizar a resposta da pergunta atual
  const handleAnswerChange = (questionId: number, value: number) => {
    setRespostas({
      ...respostas,
      [questionId]: value,
    })
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setResultado(calcularResultado(respostas, questions))
    }
  }

  // let currentQuestion

 
  const currentQuestion = questions[currentIndex]
  

  if (!currentQuestion) return null

  const progress = ((currentIndex) / questions.length) * 100
  // const isLastQuestion = perguntas.findIndex(q => q.id === currentQuestion.id) === perguntas.length - 1;
  return (
    <section>
      {resultado ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold">Seu tipo de perfil é: {resultado.tipo}</h2>
          <pre className="mt-4 p-4 bg-gray-200 rounded-lg">
            {/* {JSON.stringify(resultado.dimensaoSoma, null, 2)} */}
            <p>{personalityDescriptions[resultado.tipo] || "Descrição não encontrada."}</p>
          </pre>
        </div>
      ) : (
        <section className="w-f ull grid place-content-center">
          <section className="w-full min-[840px]:w-[800px] min-[840px]:h-[500px] flex flex-col space-y-14 p-12">
        
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span className="font-semibold">{`${progress.toFixed(0)}%`}</span>
            </div>
            <Progress value={progress} className="h-2"/>
          </div>
        
          <div className="space-y-12 ">
            <div className="space-y-1">
              <section className="space-y-8" >
                <header >
                  <h2 className="text-2xl text-center font-bold tracking-tight text-muted-foreground">
                    {currentQuestion.Text}
                  </h2>
                </header>
                <div className="pt-10 flex items-center gap-6">
                  <span className="text-2xl font-semibold text-zinc-600">Concordo</span>
                  <RadioGroup className="w-full flex justify-between"
                    value={respostas[Number(currentQuestion.id)] ? String(respostas[Number(currentQuestion.id)]) : ""}
                    
                    onValueChange={(value) =>
                      handleAnswerChange(Number(currentQuestion.id), Number(value))
                    }
                  >
                    {likertOptions.map((option) =>  (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={String(option.value)}
                          className={`${getRadioItemClasses(option.value)}`} 
                          colorClass={getRadioColorClass(option.value)}
                        />
                      </div>
                    ))}
                  </RadioGroup>
                  <span className="text-2xl font-semibold text-zinc-600">Discordo</span>
                </div>

                  <div className={`flex justify-end transition-opacity duration-300 ${
                      currentQuestion.id in respostas
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                    }`}>
                  <Button onClick={handleNext}>
                    Próximo
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </section >
      </section>
    )}
  </section>
  )
}