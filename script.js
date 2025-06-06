// Example: Mark lesson 1 as completed
function markLessonCompleted(lessonId) {
  let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
  if (!completedLessons.includes(lessonId)) {
    completedLessons.push(lessonId);
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }
}

// Example: Check if lesson 1 is completed
function isLessonCompleted(lessonId) {
  let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
  return completedLessons.includes(lessonId);
}