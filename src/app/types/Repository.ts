export interface Repository {
  id: string;
  name: string;
  descriptionHTML: string;
  language: {
    name?: string;
    color?: string;
  };
  isArchived: boolean;
  isPrivate: boolean;
  isFork: boolean;
  url: string;
  updatedAt: Date;
  stars: number;
}
