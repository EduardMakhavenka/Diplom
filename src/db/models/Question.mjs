export default class Question {
  constructor(text, name, email, createdAt, like, answers, to) {
    this.text = text;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.like = like;
    this.answers = answers;
    this.to = to;
  }
}
