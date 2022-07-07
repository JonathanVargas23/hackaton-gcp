/* eslint-disable prettier/prettier */
import { Injectable, HttpStatus, Inject, HttpException } from '@nestjs/common';
import { PredictionServiceClient } from '@google-cloud/aiplatform';

@Injectable()
export class HackatonService {
  // constructor() {}
  
  public async sendImage(data) {
    // console.log(`funciona:`, data.buffer.toString());
    console.log(`funciona:`, data);
    
    const client = new PredictionServiceClient();
    // Do something with DatasetServiceClient.
    console.log('client', client);

    const request = {
      endpoint: '',
      instances: data,
    };

    // const response = await client.explain(request);
    // console.log('response', response);

    return {
      message: `103 kl`
    };
  }
}
