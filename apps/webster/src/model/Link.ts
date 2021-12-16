export default class Link {
  private title: string;
  private icon: string;
  private url: string;

  constructor() {}

  getUrl(): string {
    return this.url;
  }

  getImagePath(): string {
    return this.icon;
  }

  getTitle(): string {
    return this.title;
  }

  setUrl(url: string): void {
    this.url = url;
  }

  setImagePath(icon: string): void {
    this.icon = icon;
  }

  setTitle(title: string): void {
    this.title = title;
  }
}
