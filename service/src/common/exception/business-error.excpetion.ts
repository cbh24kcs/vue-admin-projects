import { HttpException, HttpStatus } from "@nestjs/common";

export class BusinessErrorException extends HttpException {
  constructor(message) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
