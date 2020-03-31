export default class Question {
  constructor(text, author, role, createdAt, like, answers) {
    this.text = text;
    this.author = author;
    this.role = role;
    this.createdAt = createdAt;
    this.like = like;
    this.answers = answers;
  }
}
