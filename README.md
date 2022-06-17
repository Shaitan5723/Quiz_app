# Quiz_app
Javascript Quiz App

This application is designed to test the knowledge of individuals about Javascript through a timed multiple choice quiz on the subject.

The application is built using HTML, CSS and Javascript.

Though the basic framework/functionality of the application is meant to work as a simple 10 question quiz with a timer, and a save score function, individuals with a basic understanding of JavaScript may ammend the question array to create their own quiz using the code.

The quiz starts off with an instruction page that also holds a start button.
The top of the page also contains two items, one is a button that leads to highscores (previously played game scores on local storage). The other is a timer.
![screenshot of instructions](/Assets/images/intro_page.png)

Once the start button is clicked, the quiz will begin by showing the first question. The timer will also begin a countdown.
![quiz has begun](/Assets/images/quiz_questions.png)

If the timer runs out of time, or you have completed the final question, you will be prompted to submit your name to be recorded onto local storage.
![saving your score](/Assets/images/save_score.png)

Once you have submitted your name, your score will be recorded, and you will be shown the list of high scores.
![leaderboard](/Assets/images/leaderboard.png)
