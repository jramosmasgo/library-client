export interface AuthorGetById {
  id: string;
  name: string;
  bibliography: string;
  gender: string;
  photo?: string;
  dateBirth: Date;
}
