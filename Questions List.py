import csv

def display_menu():
    print("\nCOMMAND MENU")
    print("add  - Add question/answer to file")
    print("show - Show all questions and answers")
    print("del  - Delete a question/answer combo")
    print("end  - Exit program")
    print()

def readQuestions():
    questions = []
    with open("Questions.csv", "r", newline="") as file:
        reader = csv.reader(file)
        for row in reader:
            questions.append(row)
        return questions

def writeQuestions(questions):
    with open("Questions.csv", "w", newline="") as file:
        writer = csv.writer(file)
        writer.writerows(questions)

def addQuestion(questions):

    questionList = []

    question = input("Question: ")
    rightAnswer = input("Correct Answer: ")
    wrongAnswer = input("Incorrect Answer: ")

    questionList.append(question)
    questionList.append(rightAnswer)
    questionList.append(wrongAnswer)
    questions.append(questionList)

    with open("Questions.csv", "w", newline="") as file:
        writer = csv.writer(file)
        writer.writerows(questions)

    print("Question was added to the file.\n")

def showQuestions(questions):
    for i in range(len(questions)):
        question = questions[i]
        print(str(i+1) + ". " + question[0] + " Correct Answer: " + question[1] + "." + "Incorrect Answer: " + question[2])
    print()

def deleteQuestion(questions):
    index = int(input("Number: "))   
    question = questions.pop(index - 1)
    readQuestions()
    print(question[0] + " was deleted.\n")

    writeQuestions(questions)
    

def main():

    questions = readQuestions()

    display_menu()

    while True:
        command = input("\nWhat do you want to do? : ")
        if command.lower() == "add":
            addQuestion(questions)
        elif command.lower() == "show":
            showQuestions(questions)
        elif command.lower() == "del":
            deleteQuestion(questions)
        elif command == "end":
            break
        else:
            print("Not a valid command. Please try again.\n")

    print("\nGood Job!!")

if __name__ == "__main__":
    main()
