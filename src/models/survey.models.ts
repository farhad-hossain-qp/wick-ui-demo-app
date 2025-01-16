export interface ISurvey {
  id: number;
  userId: number;
  folderId: number;
  name: string;
  type: number;
  creationDate: string;
  responseCount: number;
  description: string;
}
