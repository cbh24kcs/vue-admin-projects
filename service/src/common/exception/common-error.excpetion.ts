import { HttpException, HttpStatus } from "@nestjs/common";

export class CommonErrorException extends HttpException {
  constructor(message) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
