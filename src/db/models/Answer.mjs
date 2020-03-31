export default class Answer {
  constructor(text, author, role, createdAt, like, questions) {
    this.text = text;
    this.author = author;
    this.role = role;
    this.createdAt = createdAt;
    this.like = like;
    this.questions = questions;
  }
}
