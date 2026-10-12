// Homework 7: JavaScript interactivity for the portfolio
console.log('Hello World!');

// Portfolio owner information
const name = 'Ashton Heitkam';
let hasDownloadedResume = false;

// Return the required personalized greeting.
function showGreeting(personName) {
    return 'Hello, my name is ' + personName + '! Welcome to my portfolio!';
}

// Choose a greeting based on the visitor's local time.
function getTimeGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good morning!';
    } else if (hour < 18) {
        return 'Good afternoon!';
    }

    return 'Good evening!';
}

// Display the greetings when the page loads.
const personalGreeting = document.getElementById('personalGreeting');
const timeGreeting = document.getElementById('timeGreeting');

if (personalGreeting) {
    personalGreeting.textContent = showGreeting(name);
}

if (timeGreeting) {
    timeGreeting.textContent = getTimeGreeting();
}

// Alert only the first time the resume link is clicked.
const resumeLink = document.getElementById('downloadResume');
const resumeStatus = document.getElementById('resumeStatus');

if (resumeLink) {
    resumeLink.addEventListener('click', function () {
        if (!hasDownloadedResume) {
            hasDownloadedResume = true;

            // Bonus: wait two seconds before showing the alert.
            window.setTimeout(function () {
                alert('Your resume is downloaded successfully!');
            }, 2000);

            if (resumeStatus) {
                resumeStatus.textContent = 'Your resume download was started.';
            }
        } else if (resumeStatus) {
            resumeStatus.textContent = 'You have already received the download confirmation.';
        }
    });
}

// Calculate the number of whole days between today and a deadline.
function daysUntilDeadline(submissionDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadline = new Date(submissionDate + 'T00:00:00');
    deadline.setHours(0, 0, 0, 0);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((deadline.getTime() - today.getTime()) / millisecondsPerDay);
}

// Update the ongoing project's deadline countdown.
const deadlineDays = daysUntilDeadline('2026-12-01');
const deadlineCountdown = document.getElementById('deadlineCountdown');

if (deadlineCountdown) {
    if (deadlineDays > 0) {
        deadlineCountdown.textContent = deadlineDays + ' days remaining until the deadline.';
    } else if (deadlineDays === 0) {
        deadlineCountdown.textContent = 'The project deadline is today!';
    } else {
        deadlineCountdown.textContent = 'The sample project deadline has passed.';
    }
}

console.log('Days until project deadline:', deadlineDays);
