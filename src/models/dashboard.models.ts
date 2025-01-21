export interface IDashboard {
  id: number;
  userId: number;
  creationDate: string;
  datasourceType: "Survey";
  datasourceId: number;
  name: string;
}
