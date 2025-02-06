"use client"

import { likertOptions, questions } from "@/constants/questions"
import { Progress } from "./ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";
import { Button } from "./ui/button";

export const QuestionsDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [respostas, setRespostas] = useState< {[key: number]: number }>({})

  // Função para atualizar a resposta da pergunta atual
  const handleAnswerChange = (questionId: number, value: number) => {
    setRespostas({
      ...respostas,
      [questionId]: value,
    });

  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const currentQuestion = questions[currentIndex];

  const progress = ((currentIndex) / questions.length) * 100

  return (
    <section className="w-full grid place-content-center">
      <section className="w-full min-[840px]:w-[800px] min-[840px]:h-[500px] flex flex-col space-y-14 p-12">
      
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{progress}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="space-y-12 ">
        <div className="space-y-1">
            <section className="space-y-8" >
              <header >
                <h2 className="text-2xl text-center font-bold tracking-tight text-muted-foreground">
                  {currentQuestion.text}
                </h2>
              </header>
              <div className="pt-10 flex items-center gap-6">
                <span className="text-2xl font-semibold text-zinc-600">Concordo</span>
                <RadioGroup className="w-full flex justify-between"
                  value={
                    respostas[currentQuestion.id]
                      ? String(respostas[currentQuestion.id])
                      : ""
                  }
                  onValueChange={(value) =>
                    handleAnswerChange(currentQuestion.id, Number(value))
                  }
                >
                  {likertOptions.map((option) =>  (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem className="h-12 w-12" value={String(option.value)} 
                      />
                    </div>
                  ))}
                </RadioGroup>
                <span className="text-2xl font-semibold text-zinc-600">Discordo</span>
              </div>

                <div className={`flex justify-end transition-opacity duration-300 ${
                    respostas[currentQuestion.id]
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
  )
}