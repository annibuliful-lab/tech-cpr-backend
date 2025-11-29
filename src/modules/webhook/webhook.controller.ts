import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Response,
} from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Post(':source/feed-data')
  webhookFeedData(@Body() body: any, @Res() response) {
    console.log(body);
    response.status(HttpStatus.OK).send(body);
  }
}
