import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class Pagination {
  @IsNumber()
  @Type(() => Number)
  pageSize: number = 1;

  @IsNumber()
  @Type(() => Number)
  pageNo: number = 10;
  
  order: Record<string, "asc" | "desc">;
}
