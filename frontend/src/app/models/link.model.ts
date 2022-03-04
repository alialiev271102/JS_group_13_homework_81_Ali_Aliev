export class Link {
  constructor(
    public id: string,
    public Url: string,
    public shortUrl: string,
  ) {}
}

export interface LinkData {
  id: string;
  Url: string;
  shortUrl: string;

}
