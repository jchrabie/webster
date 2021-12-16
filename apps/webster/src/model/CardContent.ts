export default class CardContent {
  content: string;
  icon: string;
  title: string;

  constructor(title: string, content: string, icon: string) {
    this.content = content;
    this.icon = icon;
    this.title = title;
  }
}
